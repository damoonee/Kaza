import React from 'react';
import RedStar from '../assets/VectorRed.svg';
import GreyStar from '../assets/VectorGrey.svg';

function Rate(props) {
  const score = props.score;
  const notes = [1, 2, 3, 4, 5];
return (
  <div className="rate_contenair">
    {notes.map((note) =>
      score >= note ? (
        <img
        key={note.toString()}
        className="etoile"
        src={RedStar}
        alt="star"
        />
      ) : (
        <img
        key={note.toString()}
        className="etoile_grey"
        src={GreyStar}
        alt="star"
        />
      )
    )}
  </div>
);
}

export default Rate;