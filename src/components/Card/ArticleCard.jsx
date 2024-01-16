import { Card, Typography } from "@mui/material";
import listImg3 from '../../assets/images/Frame 3.svg';
import styles from './card.module.scss';

const ArticleCard = () => {
  return (
    <Card className={styles.card__article}>
      <Typography variant="h4" className={styles.card__title_article}>Жизнь и правление Наполеона Бонапарта </Typography>
      <div className={styles.card__img}>
        <p>#История</p>
        <img src={listImg3} alt="Error :(" className={styles.img} />
      </div>
    </Card>
  );
};

export default ArticleCard;
