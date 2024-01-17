import { Card, Typography } from '@mui/material';
import { useNavigate } from "react-router-dom";
import styles from './card.module.scss';

const QuizCard = ({ quiz }) => {
  const navigate = useNavigate();

  return (
    <Card className={styles.card__quiz} onClick={() => navigate(`/quiz/${quiz.id}`)}>
      <img src={quiz.quiz_image} alt="Error :(" />
      <Typography variant="h4" className={styles.card__title_quiz}>{quiz.title}</Typography>
      <p>10 вопросов</p>
    </Card>
  );
};

export default QuizCard;
