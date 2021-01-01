import { Avatar } from '@material-ui/core';
import React, {useEffect, useState} from 'react';

const Photos = () => {
    const [photos, setPhoto] = useState([]);

    useEffect(() => {
        const url = 'https://randomuser.me/api/?results=5';
        fetch(url)
        .then(res => res.json())
        .then(data => setPhoto(data.results))
    }, [])
    return (
       <div>
           {
            photos.map( photo => <Avatar>
           <img src={photo.picture.thumbnail} alt=""/>

        </Avatar> )
           }
       </div>
    );
};

export default Photos;