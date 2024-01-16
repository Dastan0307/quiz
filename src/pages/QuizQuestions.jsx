import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { WhiteButton } from '../components/Button/WhiteButton';
import { PrimaryButton } from '../components/Button/PrimaryButton';
import styles from '../styles/quiz-questions.module.scss';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? 'rgba(185, 255, 160, 1)' : '#308fe8',
  },
}));

const QuizQuestions = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.questions}>
      <ArrowBackIcon className={styles.arrowIcon} onClick={() => navigate('/quiz')} />
      <div className={styles.option}>
        <p className={styles.count_question}>Вопрос 4 из 10</p>
        <Box sx={{ flexGrow: 1 }}>
          <BorderLinearProgress variant="determinate" value={50} className={styles.line_count_question} />
        </Box>
        <p className={styles.question}>Вопрос 4. Какое событие считается началом Французской революции?</p>
        <WhiteButton>Ответ 1</WhiteButton>
        <WhiteButton>Ответ 2</WhiteButton>
        <WhiteButton>Ответ 3</WhiteButton>
        <WhiteButton>Ответ 4</WhiteButton>
        <PrimaryButton>Следующий вопрос</PrimaryButton>
      </div>
    </div>
  );
};

export default QuizQuestions;