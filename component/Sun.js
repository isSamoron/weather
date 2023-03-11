import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Clear from '../public/cloud/Clear.png'
import Clouds from '../public/cloud/Clouds.png'
import Drizzle from '../public/cloud/Drizzle.png'
import Haze from '../public/cloud/Haze.png'
import Rain from '../public/cloud/Rain.png'
import Thunderstorm from '../public/cloud/Thunderstorm.png'
import Thunderstorm2 from '../public/cloud/Thunderstorm2.png'
// import HeavyRain from '../public/cloud/HeavyRain.png'
// imgData.weather[0].main

export default function Sun({imgData}) {
  {imgData&&console.log(typeof(imgData[0].main))}
  
  return (
    <div>
      {/* {imgData&&<Image className={styles.img} src={toString(imgData[0].main)} alt='img' />} */}
      {imgData&&<Image className={styles.img} src={imgData[0].main == 'Clear'? Clear:imgData[0].main == 'Clouds'? Clouds:imgData[0].main == 'Drizzle'? Drizzle:imgData[0].main == 'Rain'? Rain:imgData[0].main == 'Thunderstorm'? Thunderstorm:Haze} alt='img' />}
    </div>
  )
}

