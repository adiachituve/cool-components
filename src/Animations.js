import React from 'React';

const Animation = () => {

    return (
        <div className="animations container">
            <h2>Animations</h2>
            <button className='bttn grow'>GROW</button>
            <button className='bttn shrink'>SHRINK</button>
            <button className='bttn color'>COLOR</button>
            <div className='rotating-container'>
                <button className='bttn rotating'>ROTAT</button>
            </div>

        </div>
    )
}

export default Animation;