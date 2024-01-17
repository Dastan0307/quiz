import { useNavigate } from 'react-router-dom';
import img1 from '../assets/images/confetti-gif-8 1.svg';
import img2 from '../assets/images/confetti-gif-8 2.svg';
import { PrimaryButton } from '../components/Button/PrimaryButton';
import styles from '../styles/result.module.scss';

const ResultPage = ({ correct, questions }) => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.result}>
        <img src={img1} alt="Error :(" className={styles.img1} />
        <img src={img2} alt="Error :(" className={styles.img2} />
        <h4>Поздравляем!</h4>
        <p className={styles.correct__title}>
          Вы ответили правильно на 
          {
            correct > 5 ? 
            <span className={styles.active__correct}>{correct} вопросов из {questions.length}</span> : 
            <span className={styles.passive__correct}>{correct} вопросов из {questions.length}</span>
          }
        </p>
        <p className={styles.p}>У вас всегда есть возможность пройти квиз заново, чтобы еще раз проверить свои знания!</p>
        <PrimaryButton onClick={() => navigate('/')}>Вернуться</PrimaryButton>
      </div>
    </div>
  );
};

export default ResultPage;
