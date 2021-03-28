import React from 'react';
import PropTypes from 'prop-types';
import '../assets/styles/componets/CarouselItem.scss'
import playIcon from '../assets/images/play-icon.png';
import plusIcon from '../assets/images/plus-icon.png';

// cover, title, year, contentRating, duration provienen de la API json
const CarouselItem = ({ cover, title, year, contentRating, duration }) => (
  <div className="carousel-item">
    <img className="carousel-item__img" src={cover} alt={title} />
    <div className="carousel-item__details">
      <div>
        <img className="carousel-item__details--img" src={playIcon} alt="Play Icon" />
        <img className="carousel-item__details--img" src={plusIcon} alt="Plus Icon" />
      </div>
      <p className="carousel-item__details--title">{title}</p>
      <p className="carousel-item__details--subtitle">
        {`${year}  ${contentRating} ${duration}`}
      </p>
    </div>
  </div>


);

// propTypes  con la "p" minuscula
// las validaciones deben de ser dependiendo del valor que envia el json
// para este tipo de validación se debe instalar PropTypes: npm install --save prop-types e importarlo

CarouselItem.propTypes ={

  cover: PropTypes.string,
  title: PropTypes.string,
  year:PropTypes.number,
  contentRating: PropTypes.string,
  duration: PropTypes.number

}

export default CarouselItem;