import styles from './button.module.scss';

export const WhiteButton = (props) => {
  return (
    <button {...props} className={styles.button_white}>
      {props.children}
    </button>
  );
};

