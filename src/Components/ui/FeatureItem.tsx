import { Link } from "react-router-dom";
import styles from "./FeatureItem.module.css";

type props = {
  svg: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  className?: string;
};

const FeatureItem = ({ svg: Svg, title, className }: props) => {
  return (
    <Link to="#" className={`${className} ${styles.link}`}>
      <Svg />
      <span className={styles.title}>{title}</span>
    </Link>
  );
};

export default FeatureItem;
