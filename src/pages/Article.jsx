import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { getAticleById } from '../store/slices/Article/ArticleSlice';
import styles from '../styles/article.module.scss';

const Article = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const article = useSelector(state => state.article.articleById)
  const { id } = useParams();

  useEffect(() => {
    dispatch(getAticleById(id))
  }, [id, dispatch,  ]);



  return (
    <div className={styles.container}>
      <div className={styles.history}>
        <ArrowBackIcon className={styles.arrowIcon} onClick={() => navigate('/all-articles')} />
        <h4 className={styles.title}>{article.title}</h4>
        <p className={styles.history_time}>#{article.category?.name} <span>{article.read_time} минут</span></p>
        <p className={styles.paragraph}>{article.content}</p>
      </div>
    </div>
  );
};

export default Article;