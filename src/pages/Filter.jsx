import styles from '../styles/filter.module.scss';

const Filter = () => {
  return (
    <div className={styles.filter}>
      <p className={styles.title}>Фильтр <span>Cбросить все</span></p>
      <div className={styles.checkbox}>
        <input type="checkbox" className={styles.inp} value="История"  />
        <p>История</p>
      </div>
      <div className={styles.checkbox}>
        <input type="checkbox" className={styles.inp} value="Литература" />
        <p>Литература</p>
      </div>
      <div className={styles.checkbox}>
        <input type="checkbox" className={styles.inp} value="Философия" />
        <p>Философия</p>
      </div>
      <div className={styles.checkbox}>
        <input type="checkbox" className={styles.inp} value="Психология" />
        <p>Психология</p>
      </div>
      <div className={styles.checkbox}>
        <input type="checkbox" className={styles.inp} value="Психология" />
        <p>Психология</p>
      </div>
      <div className={styles.checkbox}>
        <input type="checkbox" className={styles.inp} value="Музыка" />
        <p>Музыка</p>
      </div>
      <div className={styles.checkbox}>
        <input type="checkbox" className={styles.inp} value="Кино" />
        <p>Кино</p>
      </div>
      <button className={styles.btn}>Применить</button>
    </div>
  );
};

export default Filter;
