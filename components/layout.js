import Navbar from "./navbar"
import styles from "../styles/Layout.module.css"
import Head from 'next/head'

const Layout = ({ children }) => {
  return (
    <div className={styles.content}>
      <Navbar />
      { children }
    </div>
  );
}
 
export default Layout;