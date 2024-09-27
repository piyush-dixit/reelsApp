
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Card from './Card.jsx';
import { cardsData } from './data';

const CarouselComponent = () => {
    console.log("cardsData", cardsData);
  return (
    <Carousel
      showThumbs={false}
      showStatus={false}
      infiniteLoop
      autoPlay
    >
      {cardsData.map((card, index) => (
        <div key={index}>
          <Card image={card.image} title={card.title} price={card.price} />
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;
