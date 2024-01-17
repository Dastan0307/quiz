import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate, useParams } from 'react-router-dom';
import imgStartPage from '../assets/images/image.svg';
import point from '../assets/images/Group.svg';
import { PrimaryButton } from '../components/Button/PrimaryButton';
import styles from '../styles/quiz.module.scss';
import { getQuizeById } from '../store/slices/Quiz/quizSlice';

const Quiz = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const { id } = useParams();
  const quiz = useSelector(state => state.quiz.quizById);
  console.log(quiz);

  useEffect(() => {
    dispatch(getQuizeById(id))
  }, [dispatch, id, ]);
  

  return (
    <div className={styles.quiz}>
      <ArrowBackIcon className={styles.quizArrowIcon} onClick={() => navigate('/all-quizes')} />
      <img src={point} alt="Error" className={styles.point} />
      <div className={styles.startQuiz}>
        <h4 className={styles.title}>Квиз “{quiz.title}”</h4>
        <img src={quiz.quiz_image} alt="Error :(" className={styles.imgStartPage} />
        <p>{quiz.welcome_page}</p>
        <PrimaryButton onClick={() => navigate('/quiz-questions')}>Начать квиз</PrimaryButton>
      </div>
    </div>
  );
};

export default Quiz;