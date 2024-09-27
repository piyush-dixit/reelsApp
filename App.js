
 import Footer from './Footer';
 import React, { useEffect, useState, useRef } from 'react';
 import './App.css';
import CarouselComponent from './Carousel';
import { mediaData } from './data';

const App = () => {
  const mediaRefs = useRef([]);
  const [currentProduct, setCurrentProduct] = useState({ title: '', price: ''  , type: ''});
  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      if (entry) {
        const index = entry.target.getAttribute('data-index');
        setCurrentProduct({
          title: mediaData[index].title,
          price: mediaData[index].price,
          type: mediaData[index].type,
        });
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {      // i search this line from google 
      threshold: 1, 
    });
    mediaRefs.current.forEach((media) => {
      if (media) {
        observer.observe(media);
      }
    });
    return () => {
      mediaRefs.current.forEach((media) => {
        if (media) {
          observer.unobserve(media);
        }
      });
    };
  }, []);

  return (
    <div className="app">
      <div className="media-container">
        {mediaData.map((media, index) => (
          <div className="media-item" key={index} data-index={index} ref={(el) => (mediaRefs.current[index] = el)}>
            {media.type === 'image' ? (
              <img src={media.src} alt={`media-${index}`} />
            ) : (
              <video   autoPlay loop muted controls>
                <source src={media.src} type="video/mp4" />
             Your browser does not support the video tag.        {/* if video not play then this message will show */}
              </video>
            )}
         
          </div>
        ))}
      </div>
      <CarouselComponent />
      <Footer />
    </div>
  );
};

export default App;
//  <div className="product-info">
// <div className="product-left">
//   <p>{currentProduct.title}</p>
//   <p className="price">{currentProduct.price}</p>
//   <p>{currentProduct.type}</p>
// </div>
// <button className="shop-button">SHOP</button>
// </div> 