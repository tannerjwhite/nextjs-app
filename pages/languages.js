import Head from 'next/head'
import ExperienceItem from '../components/experienceitem'
import useSWR from 'swr';
import styles from '../styles/Icons.module.css'

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Lanugages() {

  const { data, error } = useSWR('/api/languagedata', fetcher);


  if (error) return <div>Failed to load</div>
  if(!data) return <div>Loading...</div>;

    return (
      <div className={styles.container}>
        <Head>
          <title>Tanner White | Languages</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css" />
        </Head>
 
      {
        data.languages.map(language => (
          <ExperienceItem key={language.id} language={language}/>
        ))
      }



    </div>
    )
  }