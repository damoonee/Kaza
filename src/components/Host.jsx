import React from 'react';

function Host(props) {
    return (
      <>
        <span className="nom_proprietaire">{props.name}</span>
        <img
          className="photo_proprietaire"
          src={props.picture}
          alt="Propriétaire"
        />
      </>
    );
}

export default Host;