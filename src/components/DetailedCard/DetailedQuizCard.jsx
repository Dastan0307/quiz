import styles from './detailed_card.module.scss';

const DetailedQuizCard = ({ quiz }) => {

  return (
    <div className={styles.card__detailed_quiz}>
      <img src={quiz.quiz_image } alt="Error :(" />
      <h4 className={styles.card__title_quiz}>{quiz.title}</h4>
      <p>10 вопросов</p>
    </div>
  );
};

export default DetailedQuizCard;
