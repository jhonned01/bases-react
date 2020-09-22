import React from 'react'
import PropTypes from 'prop-types';
import '../assets/syles/components/CarouselIteam.scss'

const CarouselIteam=({cover ,title, year ,contentRating, duration}) => (
    <div className="carousel-item">
  <img className="carousel-item__img" src={cover} alt={title} />
  <div className="carousel-item__details">
    <div>
      <img className="carousel-item__details--img" src="../assets/play-icon.png" alt="Play Icon" /> 
      <img className="carousel-item__details--img" src="../assets/plus-icon.png" alt="Plus Icon" /> 
    </div>
<p className="carousel-item__details--title">{title}</p>
    <p className="carousel-item__details--subtitle">
    {`${year} ${contentRating} ${duration}`}
    </p>
  </div>
</div>


)

CarouselIteam.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  duration: PropTypes.number.isRequired
}
export default CarouselIteam