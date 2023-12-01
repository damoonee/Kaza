import React from "react";
import { useState } from "react";
import ArrowLeft from '../assets/VectorLeft.svg'
import ArrowRight from '../assets/Vector.svg'

import '../style/Slider.css'

function Carrousel({ slides }) {
  /* Crée un Hook d'état */
  const [current, setCurrent] = useState(0); //je définie l'index du premier slide à 0
  const length = slides.length; //longueur du tableau de slides

  /**Function pour l'image precedente */
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1); // on repart au premier slide quand on arrive au dernier
  };
  /**Function pour l'image suivante */
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1); // on repart au dernier slide quand on est au premier
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }
  return (
    <section className="slide">
      {length > 1 && (
        <div className="slider_previous" onClick={prevSlide}>
          <img src={ArrowLeft} alt="" className="arrow_left" />
        </div>
      )}
      {length > 1 && (
        <div className="slider_next" onClick={nextSlide}>
        <img src={ArrowRight} alt="" className="arrow_right" />
      </div>
      )}
      {slides.map((image, index) => {
        return (
          <div
            key={index}
            className={index === current ? "slider active" : "slider"}
          >
            {index === current && (
              <img src={image} alt="img-appartement" className="slide_image" />
            )}
            {index === current && length > 1 && (
              <span className="slider_number">
                {current + 1}/{length}
              </span>
            )}
          </div>
        );
      })}
    </section>
  );
}

export default Carrousel;


