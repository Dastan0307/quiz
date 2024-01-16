import { useState } from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from 'react-router-dom';
import listImg2 from '../../assets/images/Frame 2.svg';
import listImg4 from '../../assets/images/Frame 4.svg';
import listImg9 from '../../assets/images/Frame 9.svg';
import listImg11 from '../../assets/images/Frame 11.svg';
import listImg12 from '../../assets/images/Frame 12.svg';
import styles from './main.module.scss';
import QuizCard from '../../components/Card/QuizCard';
import ArticleCard from '../../components/Card/ArticleCard';
import { useEffect, useState } from 'react';
import { getAticles } from '../../store/slices/Article/ArticleSlice';
import { useDispatch } from 'react-redux';

const Main = () => {
  const [page, setPage] = useState(0);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAticles(page));
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.titles}>
        <h4 className={styles.h4}>Статьи</h4>
        <ArrowForwardIcon 
          className={styles.icon} 
          onClick={() => navigate('/all-articles')} 
        />
      </div>
      <div className={styles.list}>
        <ArticleCard />
        <img src={listImg2} alt="Error :(" className={styles.img} onClick={() => navigate('/article')} />
        <img src={listImg4} alt="Error :(" className={styles.img} />
      </div>
      <div className={styles.titles}>
        <h4 className={styles.h4}>Квизы</h4>
        <ArrowForwardIcon 
          className={styles.icon} 
          onClick={() => navigate('/all-quizes')}
        />
      </div>
      <div className={styles.list2}>
        <img src={listImg9} alt="Error :(" className={styles.img} onClick={() => navigate('/quiz')} />
        <img src={listImg11} alt="Error :(" className={styles.img} />
        <QuizCard />
        <img src={listImg12} alt="Error :(" className={styles.img} />
      </div>
    </div>
  );
};

export default Main;
