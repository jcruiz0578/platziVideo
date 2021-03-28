import React, { useState, useEffect } from "react";
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from "../components/Footer";

import useInitialState from '../hooks/useInitialState';

import '../assets/styles/App.scss';


const API = 'http://localhost:3000/initialState';




const Home = () => {

    // videos : variable para guardar el estado.  setVideos: actualizar el estado

    //const [videos, setVideos] = useState([]);



    // *** PASADA AuseInitialState.js  **
    /* const [videos, setVideos] = useState({ mylist: [], trends: [], originals: [] });

    useEffect(() => {
        fetch('http://localhost:3000/initialState')
            .then(response => response.json())
            .then(data => setVideos(data));
    }, []); // el [] vacio es para evitrl el loop infinito

    //console.log(videos)
 */
    //**************************************** */


    const initialState = useInitialState(API);


    return (


        <div className="App">
            <Header />
            <Search />

            //.mylist: proviene del json
            {initialState.mylist.length > 0 && (
                <Categories title="Mi Lista">
                    <Carousel>
                        <CarouselItem />

                    </Carousel>
                </Categories>

            )}


            <Categories title="Tendencias">
                <Carousel>
                    {initialState.trends.map(item =>
                        <CarouselItem key={item.id} {...item} />
                    )}

                </Carousel>
            </Categories>

            <Categories title="Originales de Platzi Videos">
                <Carousel>
                    {initialState.originals.map(item =>
                        <CarouselItem key={item.id} {...item} />
                    )}

                </Carousel>
            </Categories>




            <Footer />

        </div>

    );
};
export default Home;