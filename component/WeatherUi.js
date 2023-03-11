// import Image from 'next/image'
import React from 'react'
import styles from '../styles/Home.module.css'
import Sun from './Sun'
import { FaCloud, FaEyeDropper, FaWind } from "react-icons/fa";
import Loading from './Loading';


export default function WeatherUi({ data, loading }) {

    return (
        <>
            <div className={styles.uiMain}>
                <div>
                    {loading && <div className={styles.loading}><Loading /></div>}
                    {!loading && <div className={styles.imgContainer}>
                        <Sun imgData={data.weather} />
                    </div>}
                    {!loading && <div className={styles.content}>
                        <div className={styles.extraContent}>
                            {data.clouds && <p><FaCloud style={{ color: "#7B756B" }} /> {data.clouds.all}%</p>}
                            {data.main && <p><FaEyeDropper style={{ color: "#DB3F02" }} /> {data.main.humidity}%</p>}
                            {data.wind && <p><FaWind style={{ color: "green" }} /> {data.wind.speed} km/h</p>}
                        </div>
                        <div>
                            {data.main && <p style={{ fontSize: "4rem" }}>{(data.main.temp.toFixed(0) - 273)}<span style={{ fontSize: 'x-large' }}>&#8451;</span></p>}
                            {data.main && <p style={{ fontSize: '0.8rem', opacity: '0.5' }}>( {data.weather[0].description} )</p>}
                        </div>
                    </div>}
                </div>
            </div>
        </>
    )
}
