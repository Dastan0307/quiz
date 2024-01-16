import { Card, Typography } from '@mui/material';
import listImg3 from '../../assets/images/Frame 3.svg';
import styles from './card.module.scss';

const QuizCard = () => {
  return (
    <Card className={styles.card__quiz}>
      <img src={listImg3} alt="Error :(" />
      <Typography variant="h4" className={styles.card__title_quiz}>История</Typography>
      <p>10 вопросов</p>
    </Card>
  );
};

export default QuizCard;
