import { Card, Typography } from '@mui/material';
import img1 from '../../assets/images/Frame 3.svg';
import styles from './detailed_card.module.scss';

const DetailedArticleCard = () => {
  return (
    <Card className={styles.card__detail_article}>
      <div className={styles.title}>
        <Typography variant="h4" className={styles.card__title_article}>Жизнь и правление Наполеона Бонапарта</Typography>
        <p>#История <span>15 минут</span></p>
      </div>
      <img src={img1} alt="Error :(" className={styles.card__img} />
    </Card>
  );
};

export default DetailedArticleCard;