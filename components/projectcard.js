import { AutoTextSize } from 'auto-text-size'
import Router from 'next/router'
import styles from '../styles/Projects.module.css'

import Image from 'next/image'
import testPic from '../public/unreal/UE4_logo.jpg'

const ProjectCard = ({project, cssStyle}) => {

    const handleClick = () => {
        console.log([project.title]);
        Router.push(project.url)
    }



    return (
        <div className={styles[cssStyle]} onClick={() => handleClick()}>

            <div className={styles['heading-container']}>
                <AutoTextSize maxFontSizePx={36}>{project.title}</AutoTextSize>
            </div>
            <div className={styles['subheading-container']}>
                <h2>{project.subtitle}</h2>
            </div>

            <div className={styles['img-container']}>
                <Image 
                    src={project["img-path"]}
                    alt='Unreal Engine 4 Logo'
                    layout={'fill'} 
                    sizes="(width: 100%)"
                    objectFit={'contain'}
                    className={styles['project-img']}
                />
            </div>



            
            <div className={styles['card-blurb']}>
                {project.blurb}
            </div>

            <div className={styles['tags-container']}>
                {
                    project.tags.map( tag => (
                    <span key={tag} className={styles.tag}>
                        #{tag}
                    </span>))
                }
            </div>



        </div>
    );
}

export default ProjectCard;