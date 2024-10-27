import React, { useRef } from 'react'
import './Testimonial.css'
import back from '/assets/back-icon.png'
import next from '/assets/next-icon.png'
import principal from '/assets/user-1.png'

import electrical from '/assets/user-2.png'
import ece from '/assets/user-3.png'
import civil from '/assets/user-4.png'
const Testimonial = () => {
    const slider=useRef();
    let tx=0;
    const slideForward=()=>{
        if(tx>-50){
            tx-=20;
        }
        slider.current.style.transform=`translate(${tx}%)`
    }
    const slideBackward=()=>{
        if(tx<0){
            tx+=25;
        }
        slider.current.style.transform=`translate(${tx}%)`
    }
  return (
    <div className='testimonials'>
        <h1>Testimonial</h1>
        <p>what students say</p>
        <img src={next} alt="" className='next-btn' onClick={slideForward}/>
        <img src={back} alt="" className='back-btn'onClick={slideBackward}/>

        <div className='slider'>
            <ul ref={slider}>
                <li>
                    <div className='slide'>
                        <div className='user-info'>
                            <img src={principal} alt=""/>
                            <div>
                                <h3>william jackson</h3>
                                <h4>Edusity | USA</h4>
                            </div>
                        </div>
                        <p>. "Stayzone provided me with a sense of security and comfort during my solo travel. Thank you for the warm hospitality!" - Sarah, France
                        </p>
                    </div>
                </li>
                <li>
                    <div className='slide'>
                        <div className='user-info'>
                            <img src={electrical} alt=""/>
                            <div>
                                <h3>sophia</h3>
                                <h4>Australia</h4>
                            </div>
                        </div>
                        <p>ayzone's social events helped me meet fellow travelers and make lifelong friends. Unforgettable experiences!"</p>
                    </div>
                </li>
                <li>
                    <div className='slide'>
                        <div className='user-info'>
                            <img src={ece} alt=""/>
                            <div>
                                <h3>Maria</h3>
                                <h4>Brazil</h4>
                            </div>
                        </div>
                        <p>"Stayzone is an exceptional hostel! The staff are warm, welcoming, and always willing to help. Rooms are clean, comfy, and spacious."</p>
                    </div>
                </li>
                <li>
                    <div className='slide'>
                        <div className='user-info'>
                            <img src={civil} alt=""/>
                            <div>
                                <h3> sophia</h3>
                                <h4>student | USA</h4>
                            </div>
                        </div>
                        <p>"Stayzone's staff went above and beyond to help me with my travel plans. Grateful for their expertise!" </p>
                    </div>
                </li>
                <li>
                    <div className='slide'>
                        <div className='user-info'>
                            <img src={ece} alt=""/>
                            <div>
                                <h3>maya</h3>
                                <h4>canada</h4>
                            </div>
                        </div>
                        <p>"Stayzone exceeded my expectations! The location is perfect, with easy access to public transport. Breakfast options are delicious and varied." </p>
                    </div>
                </li>
                <li>
                    <div className='slide'>
                        <div className='user-info'>
                            <img src={civil} alt=""/>
                            <div>
                                <h3>Lisa</h3>
                                <h4>odisha</h4>
                            </div>
                        </div>
                        <p>"I loved my stay at Stayzone! The atmosphere is vibrant, with regular events and activities. Met amazing people from around the world." </p>
                    </div>
                </li>
            </ul>

        </div>
    </div>
  )
}

export default Testimonial
