import logo from '../../assets/images/Квизум.svg';
import styles from './header.module.scss';

const Header = () => {
  return (
    <div className={styles.header}>
      <img src={logo} alt="Error :(" className={styles.img} />
    </div>
  );
};

export default Header;
