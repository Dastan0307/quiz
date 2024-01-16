import img1 from '../../assets/images/Frame 3.svg';
import styles from './detailed_card.module.scss';

const DetailedQuizCard = () => {
  return (
    <div className={styles.card__detailed_quiz}>
      <img src={img1} alt="Error :(" />
      <h4 className={styles.card__title_quiz}>Философия</h4>
      <p>10 вопросов</p>
    </div>
  );
};

export default DetailedQuizCard;
