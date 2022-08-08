import React from "react";
import BuyButton from "../BuyButton";

export default function Card({id, name, imgFront, imgBack, type, hp, attack, defence, price}) {

  return (
    <li className={`pokemon ${name}`} data-id={`${id}`}>
      <figure>
        <img
          src={`${imgFront}`}
          alt={`${name}`}
          className="pokemon__image front"
        />
        <img
          src={`${imgBack}`}
          alt={`${name}`}
          className="pokemon__image back"
        />
      </figure>
      <h2 className="pokemon__name">{`${name}`}</h2>
      <div className="pokemon__info">
        <p>
          <span className="pokemon__info--name">Type</span>
          <span className="pokemon__info--value">{`${type}`}</span>
        </p>
        <p>
          <span className="pokemon__info--name">HP</span>
          <span className="pokemon__info--value">{`${hp}`}</span>
        </p>
        <p>
          <span className="pokemon__info--name">Attack</span>
          <span className="pokemon__info--value">{`${attack}`}</span>
        </p>
        <p>
          <span className="pokemon__info--name">Defence</span>
          <span className="pokemon__info--value">{`${defence}`}</span>
        </p>
        <p>
          <span className="pokemon__info--name">Price</span>
          <span className="pokemon__info--value">${`${price}`}</span>
        </p>
      </div>
      <BuyButton name={name} price={price} img={imgFront} />
    </li>
  );
}
