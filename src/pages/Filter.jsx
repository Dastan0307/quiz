import styles from '../styles/filter.module.scss';

const Filter = () => {
  return (
    <div className={styles.filter}>
      <p className={styles.title}>Фильтр <span>Cбросить все</span></p>
      <div className={styles.checkbox}>
        <input type="checkbox" className={styles.inp} />
        <p>История</p>
      </div>
      <div className={styles.checkbox}>
        <input type="checkbox" className={styles.inp} />
        <p>Литература</p>
      </div>
      <div className={styles.checkbox}>
        <input type="checkbox" className={styles.inp} />
        <p>Философия</p>
      </div>
      <div className={styles.checkbox}>
        <input type="checkbox" className={styles.inp} />
        <p>Психология</p>
      </div>
      <div className={styles.checkbox}>
        <input type="checkbox" className={styles.inp} />
        <p>Искусство</p>
      </div>
      <div className={styles.checkbox}>
        <input type="checkbox" className={styles.inp} />
        <p>Музыка</p>
      </div>
      <div className={styles.checkbox}>
        <input type="checkbox" className={styles.inp} />
        <p>Кино</p>
      </div>
      <button className={styles.btn}>Применить</button>
    </div>
  );
};

export default Filter;
