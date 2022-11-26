import styles from '../styles/Home.module.css'
import { SocialIcon } from 'react-social-icons';
import Carousel from '../components/carousel'
import Router from 'next/router'
import { NextSeo } from 'next-seo';

export default function Home() {

  const handleClick = () => {
    Router.push('/projects')
}


  return (
    <div className={styles.container}>
              <NextSeo title="Work In Progress | Tanner White"
                description="A simple little nextjs app to showcase projects completed at university."/>
      <div className={styles.left}>
        
        <div className={styles.name}>
          Hi<span className={styles.accent}>, </span>my name is Tanner<span className={styles.accent}>.</span>
        </div>
        
        <p className={styles.blurb}>
          I am a graduate <span className={styles.accent}>Software Engineer</span>. I completed my studies at The University of Newcaslte. 
          I have developed this site to be a showcase of projects completed during my studies. 
        </p>
        <p>This site is still being developed.</p>

      </div>
    
      <div className={styles.right}>
        <Carousel />

        <div className={styles['link-container']}>
          <span className={styles['project-button']} onClick={() => handleClick()}><h3>View All Projects</h3></span>
          <div className={styles['social-icons']}>
            <SocialIcon className={'icon'} url={'https://www.linkedin.com/in/tannerjwhite01/'}/>
            <SocialIcon className={'icon'} url={'https://github.com/tannerjwhite'} bgColor='#6e5494'/>
          </div>
        </div>

      </div>
    </div>
  )
}


