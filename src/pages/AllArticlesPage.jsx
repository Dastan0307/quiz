import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SearchIcon from '@mui/icons-material/Search';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router-dom';
// import btnFilter from '../assets/button.svg';
// import img21 from '../assets/Frame 21.svg';
// import img22 from '../assets/Frame 22.svg';
// import img23 from '../assets/Frame 23.svg';
// import img24 from '../assets/Frame 24.svg';
// import img25 from '../assets/Frame 25.svg';
// import img26 from '../assets/Frame 26.svg';
// import img27 from '../assets/Frame 27.svg';
// import img28 from '../assets/Frame 28.svg';
// import img29 from '../assets/Frame 29.svg';
// import img30 from '../assets/Frame 30.svg';
// import img31 from '../assets/Frame 31.svg';
// import img32 from '../assets/Frame 32.svg';
import {   
  btnFilter,
  img21,
  img22,
  img23,
  img24,
  img25,
  img26,
  img27,
  img28,
  img29,
  img30,
  img31,
  img32 } from '../assets';
import point from '../assets/images/Group.svg';
import styles from '../styles/all_articles.module.scss';
import Filter from './Filter';
import { useState } from 'react';
import DetailedArticleCard from '../components/DetailedCard/DetailedArticleCard';


const AllArticlesPage = () => {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.tools}>
        <img src={point} alt="Error" className={styles.point} />
        <div className={styles.title}>
          <ArrowBackIcon className={styles.arrowIcon} onClick={() => navigate('/')} />
          <p>Все статьи</p>
        </div>
        <div className={styles.filter}>
          <SearchIcon className={styles.searchIcon} />
          <input type="search" placeholder='Поиск статей' />
          <img 
            src={btnFilter} 
            alt="Error :(" 
            style={{width: '44px', height: '44px', cursor: 'pointer'}} 
            onClick={() => setOpen(!open)}
          />
          {
            open ?
              <Filter /> :
              '' 
          }
        </div>
      </div>
      <div className={styles.list}>
        <img src={img21} alt="Error :(" onClick={() => navigate('/article')} />
        <DetailedArticleCard />
        <DetailedArticleCard />
        <DetailedArticleCard />
        <DetailedArticleCard />
        <DetailedArticleCard />
        <DetailedArticleCard />
        <DetailedArticleCard />
        <DetailedArticleCard />
        <DetailedArticleCard />
        <DetailedArticleCard />
        <DetailedArticleCard />
      </div>
      <Stack spacing={2}>
        <Pagination count={10} variant="outlined" shape="rounded" className={styles.pagination} />
      </Stack>
    </div>
  );
};

export default AllArticlesPage;
