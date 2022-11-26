import styles from '../../styles/ProjectPage.module.css'
import { HiArrowLeft } from 'react-icons/hi';
import Router from 'next/router'
import { NextSeo } from 'next-seo';

import Image from 'next/image'
import battle from '../../public/unity/battle.gif'

export default function Page() {

    const handleClick = () => {
        Router.push('/projects')
    }

    return (
      <div className={styles.container}>
        <NextSeo title="Unity | Space Exploration themed game."
                description="Game made using unity."/>

        <div onClick={handleClick} className={styles.return}>
            <span className={styles.icon}><HiArrowLeft size={32}/></span>
        </div>
        <div className={styles.project}>
            <h1>Space Exploration Game using Unity</h1>  
            <p>
                Developing our game required many different areas around game design and development to be explored. 
                Throughout this project, I was personally responsible for implementing many major features. Such things as scripted behaviour for entities, survival mechanisms and assets and UI design and implementation. 
                One the of most notable features I fully developed was the final boss battle between the player’s ship and an enemy ship as a climactic finish for the game.
            </p>

            <div className={styles['img-container']}>     
                <Image 
                    src={battle}
                    alt="Picture of the author"
                    className={styles.img}/>
                <span className={styles.caption}>Caption: Demo of players homing missile attack.</span>
            </div>

            <p>
                Very minor details of this game can be discussed as this game was developed was an external party outside of the university.
            </p>

        </div>

      </div>
    )
  }