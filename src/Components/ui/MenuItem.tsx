import { Link } from "react-router-dom";
import styles from "./MenuItem.module.css";

type props = {
  svg: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  className?: string;
};

const MenuItem = ({ svg: Svg, title, className }: props) => {
  return (
    <Link to="#" className={`${styles.link} ${className}`}>
      <Svg />
      <span className={styles.title}>{title}</span>
    </Link>
  );
};

export default MenuItem;
