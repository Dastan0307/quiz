import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { PrimaryButton } from '../components/Button/PrimaryButton';
import { getAnswers, getQuestions } from '../store/slices/Questions/questionsSlice';
import ResultPage from './ResultPage';
import styles from '../styles/quiz-questions.module.scss';

const QuizQuestions = () => {
  const [step, setStep] = useState(0);
  const [correct, setCorrect] = useState(0);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const questions = useSelector(state => state.questions.questions);
  const answers = useSelector(state => state.questions.answers);
  const question = questions[step];

  useEffect(() => {
    dispatch(getQuestions())
    dispatch(getAnswers())
  }, [dispatch, ]);

  const getOneVariant = (id) => {
    const correctAnswer = answers.find((item) => item.id === id);
    if(correctAnswer.is_right) {
      setCorrect(correct + 1)
    }
    setTimeout(() => {
      setStep(step + 1);
    }, 1000);
  }

  // const parcentage = Math.round((step / question?.length || 0) * 100); 
  const parcentage = question ? Math.round((step / question.length) * 100) : 0;

  return (
    <div className={styles.questions}>
      <ArrowBackIcon className={styles.arrowIcon} onClick={() => navigate('/')} />
      {
        step !== questions?.length ? 
        <div className={styles.option}>
        <p className={styles.count_question}>Вопрос {step + 1} из {questions.length}</p>
        {/* <Box sx={{ flexGrow: 1 }}>
          <BorderLinearProgress variant="determinate" value={parcentage} className={styles.line_count_question} />
        </Box> */}
        <div style={{ width: '940px', height:'12px', margin: 'auto', border: '1px solid rgba(0, 0, 0, 1)', borderRadius: '13px', overflow: 'hidden' }}>
          <div style={{  width: `${parcentage}%`, backgroundColor: 'rgba(185, 255, 160, 1)', height: '20px', transition: 'width 0.5s' }}></div>
        </div>
        <p className={styles.question}>{question?.title}</p>
      <ul>
        {
            question?.answer.map((vari) => (
              <li key={vari.id} onClick={() => getOneVariant(vari.id)}>{vari.answer_text}</li>
            ))
          }
      </ul>
        <PrimaryButton>Следующий вопрос</PrimaryButton>
      </div> :
      <ResultPage correct={correct} questions={questions} />
      }
    </div>
  );
};

export default QuizQuestions;