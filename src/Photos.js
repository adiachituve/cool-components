import React, { useState, useEffect } from "react";

const Photos = () => {
    const [Photos, setPhotos] = useState([]);

    function fetchData() {
        fetch("https://jsonplaceholder.typicode.com/photos")
            .then(res => res.json())
            .then(photos => setPhotos(photos));
    }

    useEffect(() => {
        fetchData();
    }, []);


    return (
        <div className="photos container">
            <h2>Photos</h2>
            <div className="photos-wrapper">
                {Photos.length ?
                    Photos.map((photo)=> <img className="photo" src={photo.thumbnailUrl} key={photo.id}/>):
                    <div>Loading Photos...</div>
                }
            </div>
        </div>
    );
};
export default Photos;