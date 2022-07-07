import React, { useState } from 'react';
import NewTask from '../components/NewTask'
import Weather from '../components/Weather';

function Footer(props) {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    return (
        <>
            <footer>
                <div className="container">
                    <div className="wrap">
                        <div className="current-weather">
                        <Weather/>
                        </div>
                        <div className="btn btn-primary" onClick={handleShow}>+ Add Task</div>
                    </div>
                </div>
            </footer>
            <NewTask show={show} onClose={handleClose}/>
            
        </>
    );
}

export default Footer;