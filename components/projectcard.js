import Router from 'next/router'
import styles from '../styles/Projects.module.css'

const ProjectCard = ({project, cssStyle}) => {

    const handleClick = () => {
        console.log([project.title]);
        Router.push(project.url)
    }

    return (
        <div className={styles[cssStyle]} onClick={() => handleClick()}>

            <h1>{project.title}</h1>
            <h3>{project.subtitle}</h3>
            <img className={styles['project-img']} src={project["img-path"]}/>

            
            <div className={styles['card-blurb']}>
                {project.blurb}
            </div>

            <div className={styles['tags-container']}>
                {
                    project.tags.map(tag => (
                    <span className={styles.tag}>
                        #{tag}
                    </span>))
                }
            </div>



        </div>
    );
}

export default ProjectCard;