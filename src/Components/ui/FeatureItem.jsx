import { Link } from "react-router-dom";
import styles from "./FeatureItem.module.css";

const FeatureItem = ({svg: Svg, title}) => {
  return (
    <Link to="#" className={styles.link}>
      <Svg/>
      <span className={styles.title}>{title}</span>
    </Link>
  );
};

export default FeatureItem;
