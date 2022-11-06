import React from "react";
import s from "./Card.module.scss";

export default function Card({ images, active, next, prev }) {
  return (
    <div
      className={`${s.cardGroup} ${active && s.cardActive} ${
        next && s.cardNext
      } ${prev && s.cardPrev}`}
    >
      <div className={`${s.littleCard} ${s.card}`}>
        <img
          src={images.littleOne}
          alt="littleCard"
          className={`${s.imageLittle} ${s.image}`}
        />
      </div>
      <div className={`${s.bigCard} ${s.card}`}>
        <img
          src={images.bigOne}
          alt="bigCard"
          className={`${s.imageLarge} ${s.image}`}
        />
      </div>
      <div className={`${s.littleCard} ${s.card}`}>
        <img
          src={images.littleTwo}
          alt="littleCard"
          className={`${s.imageLittle} ${s.image}`}
        />
      </div>
      <div className={`${s.bigCard} ${s.card}`}>
        <img
          src={images.bigTwo}
          alt="bigCard"
          className={`${s.imageLarge} ${s.image}`}
        />
      </div>
      <div className={`${s.littleCard} ${s.card}`}>
        <img
          src={images.littleThree}
          alt="littleCard"
          className={`${s.imageLittle} ${s.image}`}
        />
      </div>
      <div className={`${s.bigCard} ${s.card}`}>
        <img
          src={images.bigThree}
          alt="bigCard"
          className={`${s.imageLarge} ${s.image}`}
        />
      </div>
      <div className={`${s.littleCard} ${s.card}`}>
        <img
          src={images.littleFour}
          alt="littleCard"
          className={`${s.imageLittle} ${s.image}`}
        />
      </div>
      <div className={`${s.bigCard} ${s.card}`}>
        <img
          src={images.bigFour}
          alt="bigCard"
          className={`${s.imageLarge} ${s.image}`}
        />
      </div>
    </div>
  );
}
