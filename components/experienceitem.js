import Icon from './icon'
import styles from '../styles/Icons.module.css'


const ExperienceItem = ({language}) => {


  return (
    <div className={styles['language-container']}>
        <div className={styles.banner}>{language.title}</div>

        <Icon src={language.src}/>

        <div className={styles.text}>
            <div> <span>Experience Level:</span> {language.level}</div>
            <div>{language.blurb}</div>
        </div>
    </div>
);
}
 
export default ExperienceItem;