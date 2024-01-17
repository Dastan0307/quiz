import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import quizImg1 from '../assets/images/Frame 11 1.svg';
import quizImg3 from '../assets/images/Frame 11 3.svg';
import point from '../assets/images/Group.svg';
import { PrimaryButton } from '../components/Button/PrimaryButton';
import DetailedQuizCard from '../components/DetailedCard/DetailedQuizCard';
import { getQuizes } from '../store/slices/Quiz/quizSlice';
import styles from '../styles/all_quizes.module.scss';

const AllQuizesPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const quizes = useSelector(state => state.quiz.quiz.results);

  useEffect(() => {
    dispatch(getQuizes());
  }, [dispatch, ]);

  return (
    <div className={styles.all_quizes}>
      <div className={styles.back}>
        <ArrowBackIcon className={styles.arrowIcon} onClick={() => navigate('/')} />
        <p>Все квизы</p>
      </div>
      <img src={point} alt="Error :(" className={styles.point} />
      <div className={styles.swiper}>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 100,
            stretch: 100,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ el: '.swiper-pagination', clickable: true }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper_container"
        >
          <SwiperSlide>
            <img src={quizImg1} alt="slide_image" className={styles.swiperImg} />
          </SwiperSlide>
          {
            quizes?.map((quiz) => (
              <SwiperSlide key={quiz.id}>
                <DetailedQuizCard key={quiz.id} quiz={quiz}/>
              </SwiperSlide>
            ))
          }
          <SwiperSlide>
            <img src={quizImg3} alt="slide_image" className={styles.swiperImg} />
          </SwiperSlide>

          <div className="slider-controler">
            <div className="swiper-button-prev slider-arrow">
            </div>
            <div className="swiper-button-next slider-arrow">
            </div>
          </div>
        </Swiper>
      </div>
      <PrimaryButton onClick={() => navigate('/quiz')}>Начать квиз</PrimaryButton>
    </div>
  );
};

export default AllQuizesPage;
