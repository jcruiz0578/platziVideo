import {useState, useEffect} from 'react';


const useInitialState = (API) => {

     // videos : variable para guardar el estado.  setVideos: actualizar el estado
     //const [videos, setVideos] = useState([]);

    const [videos, setVideos] = useState({ mylist: [], trends: [], originals: [] });



    useEffect(() => {
        fetch(API)
            .then(response => response.json())
            .then(data => setVideos(data));
    }, []);

   return videos;

};

export default useInitialState;






