import React from 'react';
import '../css/style.scss';
import Image from '../css/gift_img2.png'

const Splash = (props) => {
    return (
        <div className="home-page">
            <div className="home-content">
                <h1>GIFTED</h1>
                <div className="gift-image">
                    <img className="img" src={Image}></img>
                </div>
                <p>Never repeat a gift by tracking here.</p>
                <button onClick={() => 
                    props.hideSplash()}>ENTER</button>
            </div>
        </div>
    )
}

export default Splash;