import type React from "react";
import styles from './styles.module.scss';

type TitleProps = {
  name: string;
}

const TitlePage: React.FC<TitleProps> = ({ name }) => {
  return (
    <div className={styles.wrapperTitle}> <span className={styles.namePage}>{name}</span></div >
  )
}
export default TitlePage;