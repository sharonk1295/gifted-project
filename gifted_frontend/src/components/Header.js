import React from 'react';
import '../css/style.scss';

const Header = (props) => {

    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container-fluid">
                <h1>GIFTED</h1>
                <nav>
                    <ul>
                        <button onClick={() => {
                            console.log('test')
                            props.showHome()
                        }}>Home</button>
                        <button onClick={() => {
                            console.log('test')
                            props.showHistory()
                        }}>Gift history</button>
                        <button onClick={() => {
                            console.log('test')
                            props.showForm()
                        }}>Add Recipient</button>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Header;