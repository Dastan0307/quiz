import { Card, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styles from './card.module.scss';

const ArticleCard = ({ artic }) => {
  const navigate = useNavigate();

  return (
    <Card className={styles.card__article} onClick={() => navigate(`/article/${artic.id}`)}>
      <Typography variant="h4" className={styles.card__title_article}>{artic.title}</Typography>
      <div className={styles.card__img}>
        <p>#{artic.category.name}</p>
        <img src={artic.art_image} alt="Error :(" className={styles.img} />
      </div>
    </Card>
  );
};

export default ArticleCard;
