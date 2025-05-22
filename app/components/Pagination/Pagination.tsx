import ArrowLeft from '../../assets/svg/arrowLeft.svg'
import ArrowRight from '../../assets/svg/arrowRight.svg'

import styles from './styles.module.scss'
const Pagination: React.FC = () => {
  return (
    <div className={styles.pagination}>
      <div className={styles.totalItem}>
        Hiển thị <span>10</span> nhân viên
      </div>
      <div className={styles.totalPage}>
        <button><img src={ArrowLeft} alt='ArrowLeft' /></button>
        <button className={`${styles.itemPage} ${styles.itemActive}`}>1</button>
        <button className={styles.itemPage}>2</button>
        <button className={styles.itemPage}>3</button>
        <button className={styles.itemPage}>...</button>
        <button className={styles.itemPage}>8</button>
        <button className={styles.itemPage}>9</button>
        <button className={styles.itemPage}>10</button>
        <button><img src={ArrowRight} alt='ArrowRight' /></button>
      </div>
    </div>
  )
}

export default Pagination