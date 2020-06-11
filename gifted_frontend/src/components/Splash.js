import React from 'react';
import '../css/style.scss';

const Splash = (props) => {
    return (
        <div className="home-page">
            <div className="home-content">
                <h1>GIFTED</h1>
                <div className="gift-image">
                    <img className="img" src="../css/gift4.jpg"></img>
                </div>
                <p>Never repeat a gift by tracking here.</p>
                <button onClick={() => 
                    props.hideSplash()}>ENTER</button>
            </div>
        </div>
    )
}

export default Splash;