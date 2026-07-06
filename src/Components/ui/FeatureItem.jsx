import { Link } from "react-router-dom";
import styles from "./FeatureItem.module.css";

const FeatureItem = ({svg: Svg, title, className}) => {
  return (
    <Link to="#" className={`${className} ${styles.link}`}>
      <Svg/>
      <span className={styles.title}>{title}</span>
    </Link>
  );
};

export default FeatureItem;
