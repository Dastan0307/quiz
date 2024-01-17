import { Card, Typography } from '@mui/material';
import { useNavigate } from "react-router-dom";
import styles from './detailed_card.module.scss';

const DetailedArticleCard = ({ ...props }) => {
  const navigate = useNavigate();

  return (
    <Card className={styles.card__detail_article} onClick={() => navigate(`/article/${props.id}`)}>
      <div className={styles.title}>
        <Typography variant="h4" className={styles.card__title_article}>{props.title}</Typography>
        <p>#{props.category} <span> {props.read_time} минут</span></p> 
      </div>
      <img src={props.art_image} alt="Error :(" className={styles.card__img} />
    </Card>
  );
};

export default DetailedArticleCard;