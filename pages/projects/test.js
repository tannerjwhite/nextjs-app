import styles from '../../styles/ProjectPage.module.css'
import { HiArrowLeft } from 'react-icons/hi';
import Router from 'next/router'
import { NextSeo } from 'next-seo';

import Image from 'next/image'
import testPic from '../../public/unreal/UE4_logo.jpg'

export default function Test() {

    const handleClick = () => {
        Router.push('/projects')
    }

    return (
      <div className={styles.container}>
        <NextSeo
            title="About Us, or just any title that you wish"
            description="Then with a short description here."
            />
        <div onClick={handleClick} className={styles.return}>
            <span className={styles.icon}><HiArrowLeft size={32}/></span>
        </div>


        <div className={styles.project}>
            <h1>A Long Title</h1>
            
            <p>

                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in quam lacus. Mauris luctus augue quis libero vehicula, eu ornare sem euismod. Donec ultrices at nisi in ultrices. 
                Phasellus scelerisque odio non dolor volutpat sollicitudin. In hac habitasse platea dictumst. In nec rhoncus massa. Nam lobortis neque in nunc maximus, ac ornare ipsum condimentum. 
                Fusce mollis turpis nisl, at laoreet sapien porttitor vitae. Nulla nec rhoncus lectus. Proin non augue quis mi sodales aliquam. In vulputate semper ligula et auctor. In hac habitasse platea dictumst. 
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce consectetur fermentum egestas.
            </p>

            <p>
                Cras dignissim gravida ultrices. Quisque laoreet, massa in bibendum tempus, lacus ipsum ornare mi, et sollicitudin est orci ac lectus. Aliquam nec purus ac sem malesuada vehicula. 
                Duis ac nisl in arcu commodo faucibus sed nec nisi. Vivamus non eros non ligula lobortis porta. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam erat volutpat. 
                Nullam quis bibendum est. Quisque lacus urna, maximus quis est in, consequat finibus ipsum. Praesent ut lacus aliquam, pellentesque enim ac, imperdiet ligula. 
                Fusce bibendum elit a eros fringilla congue. In tristique, lectus ac vulputate dictum, neque dolor venenatis augue, vel aliquet odio turpis in orci.
            </p>

            <div className={styles['img-container']}>
                {
                    //<img className={styles.img} src="/unreal/UE4_logo.jpg"/>
                }     
                <Image 
                    src={testPic}
                    alt="Picture of the author"/>
                <span className={styles.caption}>Caption: Test caption</span>
            </div>


            <p>
                Cras dignissim gravida ultrices. Quisque laoreet, massa in bibendum tempus, lacus ipsum ornare mi, et sollicitudin est orci ac lectus. Aliquam nec purus ac sem malesuada vehicula. 
                Duis ac nisl in arcu commodo faucibus sed nec nisi. Vivamus non eros non ligula lobortis porta. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam erat volutpat. 
                Nullam quis bibendum est. Quisque lacus urna, maximus quis est in, consequat finibus ipsum. Praesent ut lacus aliquam, pellentesque enim ac, imperdiet ligula. 
                Fusce bibendum elit a eros fringilla congue. In tristique, lectus ac vulputate dictum, neque dolor venenatis augue, vel aliquet odio turpis in orci.
            </p>

            <p>
                Cras dignissim gravida ultrices. Quisque laoreet, massa in bibendum tempus, lacus ipsum ornare mi, et sollicitudin est orci ac lectus. Aliquam nec purus ac sem malesuada vehicula. 
                Duis ac nisl in arcu commodo faucibus sed nec nisi. Vivamus non eros non ligula lobortis porta. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam erat volutpat. 
                Nullam quis bibendum est. Quisque lacus urna, maximus quis est in, consequat finibus ipsum. Praesent ut lacus aliquam, pellentesque enim ac, imperdiet ligula. 
                Fusce bibendum elit a eros fringilla congue. In tristique, lectus ac vulputate dictum, neque dolor venenatis augue, vel aliquet odio turpis in orci.
            </p>

            <p>
                Cras dignissim gravida ultrices. Quisque laoreet, massa in bibendum tempus, lacus ipsum ornare mi, et sollicitudin est orci ac lectus. Aliquam nec purus ac sem malesuada vehicula. 
                Duis ac nisl in arcu commodo faucibus sed nec nisi. Vivamus non eros non ligula lobortis porta. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam erat volutpat. 
                Nullam quis bibendum est. Quisque lacus urna, maximus quis est in, consequat finibus ipsum. Praesent ut lacus aliquam, pellentesque enim ac, imperdiet ligula. 
                Fusce bibendum elit a eros fringilla congue. In tristique, lectus ac vulputate dictum, neque dolor venenatis augue, vel aliquet odio turpis in orci.
            </p>

            <p>
                Cras dignissim gravida ultrices. Quisque laoreet, massa in bibendum tempus, lacus ipsum ornare mi, et sollicitudin est orci ac lectus. Aliquam nec purus ac sem malesuada vehicula. 
                Duis ac nisl in arcu commodo faucibus sed nec nisi. Vivamus non eros non ligula lobortis porta. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam erat volutpat. 
                Nullam quis bibendum est. Quisque lacus urna, maximus quis est in, consequat finibus ipsum. Praesent ut lacus aliquam, pellentesque enim ac, imperdiet ligula. 
                Fusce bibendum elit a eros fringilla congue. In tristique, lectus ac vulputate dictum, neque dolor venenatis augue, vel aliquet odio turpis in orci.
            </p>
        </div>
      </div>
    )
  }