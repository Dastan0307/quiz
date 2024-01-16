import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import imgStartPage from '../assets/images/image.svg';
import point from '../assets/images/Group.svg';
import { PrimaryButton } from '../components/Button/PrimaryButton';
import styles from '../styles/quiz.module.scss';

const Quiz = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.quiz}>
      <ArrowBackIcon className={styles.quizArrowIcon} onClick={() => navigate('/all-quizes')} />
      <img src={point} alt="Error" className={styles.point} />
      <div className={styles.startQuiz}>
        <h4 className={styles.title}>Квиз “История”</h4>
        <img src={imgStartPage} alt="Error :(" className={styles.imgStartPage} />
        <p>Добро пожаловать на квиз по истории.
            Это увлекательное путешествие через века и эпохи, которые сформировали наш мир таким, каким мы его знаем сегодня. В этом квизе вы окунетесь в важнейшие события, великих личностей и ключевые моменты, которые оказали огромное влияние
            на развитие человечества.
        </p>
        <PrimaryButton onClick={() => navigate('/quiz-questions')}>Начать квиз</PrimaryButton>
      </div>
    </div>
  );
};

export default Quiz;