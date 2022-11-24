import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectCube } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import styles from '../styles/Carousel.module.css'
import ProjectCard from './projectcard'
import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());


export default function Carousel() {

    const { data, error } = useSWR('/api/projectshowcase', fetcher);

    if (error) return <div>Failed to load</div>
    if(!data) return <div>Loading...</div>;

    return (
        <div className={styles.container}>

            <Swiper
                effect={"cube"}
                cubeEffect={{
                    shadow: false
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay, EffectCube, Pagination]}
                className="mySwiper"
            >
                {
                    data.projects.map(project => (
                        <SwiperSlide key={project.id}>
                            <ProjectCard project={project} cssStyle={'home-page-card'}/>
                        </SwiperSlide>
                    ))
                }
            </Swiper>

        </div>
      );
  }