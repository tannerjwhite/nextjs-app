import Link from 'next/link';
import styles from '../styles/Nav.module.css'
import { useRouter } from "next/router";


const Navbar = () => {

const router = useRouter();


  return (
    <nav className={styles.navbar}>
        <div className={styles["nav-items"]}>
            <h1><Link className={router.pathname == "/" ? styles.active : ""} href="/">Home</Link></h1>
            <h1><Link className={router.pathname == "/projects" ? styles.active : ""} href="/projects">Projects</Link></h1>
            <h1><Link className={router.pathname == "/languages" ? styles.active : ""} href="/languages">Experience</Link></h1>
            <h1><Link className={router.pathname == "/about" ? styles.active : ""} href="/about">About</Link></h1>
        </div>
    </nav>
);
}
 
export default Navbar;