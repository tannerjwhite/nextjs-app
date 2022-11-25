import styles from '../../styles/ProjectPage.module.css'
import { HiArrowLeft } from 'react-icons/hi';
import Router from 'next/router'
import { NextSeo } from 'next-seo';

import Image from 'next/image'
import statement from '../../public/xapi/statement.png'
import screenshot from '../../public/xapi/screenshot.png'
import time from '../../public/xapi/time.png'

export default function Page() {

    const handleClick = () => {
        Router.push('/projects')
    }

    return (
      <div className={styles.container}>
        <NextSeo title="Unreal Engine 4 | Experimental xAPI Plugin"
                description="A little write-up about my final year indivdual project, which was to develop an experimental xAPI plugin for the Australian Border Force."/>

        <div onClick={handleClick} className={styles.return}>
            <span className={styles.icon}><HiArrowLeft size={32}/></span>
        </div>


        <div className={styles.project}>
            <h1>Unreal Engine 4 - Experimental xAPI Plugin</h1>
            
            <p>
                In my final year of university, I had the opportunity to develop an experimental xAPI plugin for Unreal Engine 4.  xAPI is a standardised format that is used to capture and collect user
                metrics and events throughout a learning or training experience. JSON is used to format xAPI and an example can be seen below. 
            </p>

            <div className={styles['img-container']}>     
                <Image 
                    src={statement}
                    alt="Picture of the author"
                    className={styles.img}/>
                <span className={styles.caption}>Caption: xAPI Statement</span>
            </div>


            <p>
                The purpose of undertaking this project is due to the fact that UE4 does not support xAPI out of the box. 
                xAPI is a mechanism used predominately inside of a serious game or simulation training, which UE4 is heavily used to develop such environments.  
            </p>

            <p>
                After developing the plugin, a simple multiple-choice quiz was developed inside of UE4 to utilise the plugin. 
                This allowed the tracking of users’ data, such as the time taken to answer a question and complete the quiz. As well as the overall success of a user’s attempt.  
                An example of a question can be seen below.
            </p>

            <div className={styles['img-container']}>     
                <Image 
                    src={screenshot}
                    alt="Picture of the author"
                    className={styles.img}/>
                <span className={styles.caption}>Caption: Quiz Screenshot</span>
            </div>


            <p>
                This data was imported into python and analysed as an integral part of my thesis. An example of such data can be seen in the image below. 
                This image shows a user’s cumulative time to finish the quiz using the available duration data for each question. 
            </p>

            <div className={styles['img-container']}>     
                <Image 
                    src={time}
                    alt="Picture of the author"
                    className={styles.img}/>
                <span className={styles.caption}>Caption: Quiz Screenshot</span>
            </div>
        </div>
      </div>
    )
  }