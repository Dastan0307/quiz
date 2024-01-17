import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SearchIcon from '@mui/icons-material/Search';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router-dom';
import { btnFilter } from '../assets';
import point from '../assets/images/Group.svg';
import Filter from './Filter';
import { getAticles } from '../store/slices/Article/ArticleSlice';
import DetailedArticleCard from '../components/DetailedCard/DetailedArticleCard';
import styles from '../styles/all_articles.module.scss';


const AllArticlesPage = () => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const articles = useSelector(state => state.article.article.results);

  const [open, setOpen] = useState(false);

  useEffect(() => {
    dispatch(getAticles(search));
  }, [dispatch, search, ]);

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
          <input type="search" placeholder='Поиск статей' onChange={(e) => setSearch(e.target.value)} />
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
        {
          articles?.map((artic) => (
            <DetailedArticleCard 
              key={artic.id} 
              id={artic.id}
              title={artic.title} 
              art_image={artic.art_image} 
              read_time={artic.read_time}
              category={artic.category.name}
            />
          ))
        }
      </div>
      <Stack spacing={2}>
        <Pagination count={10} variant="outlined" shape="rounded" className={styles.pagination} />
      </Stack>
    </div>
  );
};

export default AllArticlesPage;
