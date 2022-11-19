import styles from '../styles/Icons.module.css'

const Icon = ({src}) => {

  return (
    <div className={styles.icon}>
        <img src={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/'+ src} />
    </div>
);
}
 
export default Icon;