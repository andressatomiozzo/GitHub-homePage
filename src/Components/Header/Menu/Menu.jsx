import MenuIcon from "../../../assets/svg/menu.svg?react"
import styles from "./Menu.module.css"

const Menu = () => {
  return (
    <button className={styles.button}>
      <MenuIcon/>
    </button>
  )
}

export default Menu
