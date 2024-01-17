import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import QuizCard from '../../components/Card/QuizCard';
import ArticleCard from '../../components/Card/ArticleCard';
import { getAticles } from '../../store/slices/Article/ArticleSlice';
import styles from './main.module.scss';
import { getQuizes } from '../../store/slices/Quiz/quizSlice';

const Main = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const articles = useSelector(state => state.article.article?.results);
  const quizes = useSelector(state => state.quiz.quiz.results);

  useEffect(() => {
    dispatch(getAticles());
    dispatch(getQuizes());
  }, [dispatch, ]);

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
      <Swiper
              slidesPerView={3.5}
              spaceBetween={16}
              grabCursor={true}
              modules={[Pagination]}
              className="mySwiper"
            >
        {
          articles?.map(artic => 
            <SwiperSlide key={artic.id}>
              <ArticleCard key={artic.id} artic={artic} />
            </SwiperSlide>
          )
        }

      </Swiper>
      </div>
      <div className={styles.titles}>
        <h4 className={styles.h4}>Квизы</h4>
        <ArrowForwardIcon 
          className={styles.icon} 
          onClick={() => navigate('/all-quizes')}
        />
      </div>
      <div className={styles.list2}>
        {
          quizes?.map(quiz => 
            <QuizCard key={quiz.id} quiz={quiz} />
          )
        }
      </div>
    </div>
  );
};

export default Main;
