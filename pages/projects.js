import styles from '../styles/Projects.module.css'
import ProjectCard from '../components/projectcard'
//useSWR allows the use of SWR inside function components
import useSWR from 'swr';

//Write a fetcher function to wrap the native fetch function and return the result of a call to url in json format
const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Projects() {

  const { data, error } = useSWR('/api/projectdata', fetcher);

  if (error) return <div>Failed to load</div>
  if(!data) return <div>Loading...</div>;

  return (
    <div className={styles.container}>
      <div className={styles['project-card-list']}>

        {
          data.projects.map(project => (
            <ProjectCard key={project.id} project={project}/>
          ))
        }

      </div>
    </div>
  )
}
