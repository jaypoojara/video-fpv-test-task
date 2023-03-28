import React, {useState, useEffect} from 'react';
import {View, useWindowDimensions, Animated} from 'react-native';
import Video from 'react-native-video';
import Modal from 'react-native-modal';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Voice, {
  SpeechRecognizedEvent,
  SpeechResultsEvent,
  SpeechErrorEvent,
  SpeechEndEvent,
} from '@react-native-voice/voice';
import {styles} from './styles';
import {Header} from '../../components/Header/Header';
import {useAppNavigation} from '../../../App';
import data from '../../assets/data.json';
import Toast from 'react-native-toast-message';
import find from 'lodash/find';
import {CloseModal} from '../../components/CloseModal/CloseModal';
import {
  RightAnswer,
  Speak,
  SpeakNow,
  WrongAnswer,
} from '../../components/SpeechToText/SpeechToText';

export const ConversationScreen = () => {
  const [paused, setPaused] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [results, setResults] = useState<string[]>([]);
  const [isListening, setIsListening] = useState(false);
  const [currentWord, setCurrentWord] = useState<{
    id: string;
    question: string;
    question_timestamp: number;
    answer: string;
  } | null>();
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [animatedProgress] = useState(new Animated.Value(0));
  const [speakNow, setSpeakNow] = useState(false);
  const [showWrongAnswer, setShowWrongAnswer] = useState(false);
  const [showRightAnswer, setShowRightAnswer] = useState(false);

  const {goBack} = useAppNavigation();
  const {height} = useWindowDimensions();
  const insets = useSafeAreaInsets();
  const videoHeight = height - (insets.top + 50); // header height

  useEffect(() => {
    const onSpeechResults = (e: SpeechResultsEvent) => {
      setResults(e.value ?? []);
    };

    Voice.onSpeechResults = onSpeechResults;

    return function cleanup() {
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);

  useEffect(() => {
    async () => await Voice.stop();
    if (results.length) {
      const findResult = find(
        results,
        result =>
          result.toLocaleLowerCase() ===
          currentWord?.answer.toLocaleLowerCase(),
      );
      setSpeakNow(false);
      if (!findResult) {
        setShowWrongAnswer(true);
      } else {
        setShowRightAnswer(true);
      }
    }
  }, [results]);

  async function startListening() {
    try {
      setResults([]);
      await Voice.start('en-US');
      setIsListening(true);
    } catch (e) {}
  }

  const onMore = () => {
    setPaused(true);
    setModalVisible(true);
  };

  const onClose = () => {
    setPaused(true);
    setModalVisible(true);
  };

  const keepLearning = () => {
    setModalVisible(false);
    setPaused(false);
  };

  const endSession = () => goBack();

  const onLoad = (data: any) => {
    setDuration(data.duration || 0);
    setPaused(false);
  };

  const onEnd = () => goBack();

  const showToast = (question: string) => {
    Toast.show({
      text1: question,
      visibilityTime: 2500,
    });
  };

  useEffect(() => {
    const findQuestionAtCurrentTime = find(
      data,
      d => d.question_timestamp === currentTime,
    );

    if (findQuestionAtCurrentTime) {
      showToast(findQuestionAtCurrentTime.question);
      setCurrentWord(findQuestionAtCurrentTime);
    }
  }, [currentTime]);

  const onContinue = () => {
    setCurrentWord(null);
    setShowRightAnswer(false);
    setShowWrongAnswer(false);
    setPaused(false);
  };

  const tryAgain = () => {
    setShowWrongAnswer(false);
    startListening();
  };

  const renderSpeechToText = () => {
    if (!currentWord) {
      return null;
    }

    if (showRightAnswer) {
      return (
        <RightAnswer textToSpeak={currentWord.answer} onPress={onContinue} />
      );
    }

    if (showWrongAnswer) {
      return (
        <WrongAnswer
          result={results?.[0] || " Text doesn't match"}
          onPress={tryAgain}
        />
      );
    }

    if (speakNow) {
      return <SpeakNow textToSpeak={currentWord.answer} />;
    }

    return (
      <Speak
        textToSpeak={currentWord.answer}
        style={{}}
        onPress={() => {
          setPaused(true);
          setSpeakNow(true);
          startListening();
        }}
      />
    );
  };

  return (
    <View style={styles.container}>
      <Header
        onMore={onMore}
        onClose={onClose}
        duration={duration}
        currentTime={currentTime}
        animatedProgress={animatedProgress}
      />
      <Video
        source={require('../../assets/dummy.mp4')}
        style={[styles.backgroundVideo, {height: videoHeight}]}
        paused={paused}
        resizeMode="cover"
        onLoad={onLoad}
        onEnd={onEnd}
        onProgress={Animated.event([{currentTime: animatedProgress}], {
          useNativeDriver: false,
          listener: (event: any) => {
            setCurrentTime(Math.round(event.currentTime));
          },
        })}
      />
      {renderSpeechToText()}
      <Modal isVisible={modalVisible}>
        <CloseModal endSession={endSession} keepLearning={keepLearning} />
      </Modal>
    </View>
  );
};
