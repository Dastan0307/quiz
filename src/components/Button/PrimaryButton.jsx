import styles from './button.module.scss';

export const PrimaryButton= (props) => {
  return (
    <button {...props} className={styles.button}>
      {props.children}
    </button>
  );
};

