import React from 'react';
import '../css/style.scss';

const Header = (props) => {
    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container-fluid">
                <h1>GIFTED</h1>
                <nav>
                    <ul>
                        <li>Recipients</li>
                        <li>Gift History</li>
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