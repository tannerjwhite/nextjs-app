import Navbar from "./navbar"
import styles from "../styles/Layout.module.css"

const Layout = ({ children }) => {
  return (
    <div className={styles.content}>
      <Navbar />
      { children }
    </div>
  );
}
 
export default Layout;