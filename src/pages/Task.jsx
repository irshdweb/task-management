import React from 'react';
import Card from '../components/Card'

function Task() {

    return (
        <section className='main'>
            <h3>All Task</h3>
            <div className="row mt-3">
                <Card />
            </div>
        </section>
    );
}

export default Task;