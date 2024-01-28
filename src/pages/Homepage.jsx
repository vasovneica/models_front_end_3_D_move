import React, { useState } from react;
import Slider from '../components/Slider/Slider.jsx';
import { ImgWall } from '../components/ImgWall/ImgWall.jsx';
import addDetailImg from '../img/add_details.jpg';
import addDetailImg2 from '../img/add_details_2.jpg';
import addDetailImg3 from '../img/add_details_3.jpg';


const Homepage = () => {

    const [pathToFrameContent, setPathFrameContent] = useState(null);


    return (

        <main className='home-page'>
            <div className='up-section-home'>
                <ImgWall />
                <div className='sub-text-up-section-home'>
                    <p className='bgbg'>all models posted here are in <b>obj</b> format</p>
                </div>
            </div>

            <div className='middle-section-home'>
                <h2>Customize the materials in the engine</h2>
                <p className='bgbg'>Not all models have separate materials for headlights and taillights, as well as chrome.</p>
                <div className='middle-section-home-sub-description'>
                </div>
            </div>

            <div className='down-section-home'>
                <h2>Assemble the parts as you need</h2>
                <p className='bgbg'>Download and add mirrors, flashlights, fog lights, spare wheels in the engine</p>
                <div className='demo-slider-section'>
                    <Slider images={[addDetailImg, addDetailImg2, addDetailImg3]} />
                </div>
                <p></p>
            </div>
        </main>
    )
}

export { Homepage }
