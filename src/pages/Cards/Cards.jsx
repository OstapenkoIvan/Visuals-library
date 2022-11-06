import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { VscChromeClose } from "react-icons/vsc";

import { cards } from "../../utils/constants";
import Card from "../Card";
import s from "./Cards.module.scss";

export default function Cards() {
  const [active, setActive] = useState(0);
  const [next, setNext] = useState(1);
  const [prev, setPrev] = useState(cards.length - 1);

  const handleAccept = () => {
    setActive(active + 1 <= cards.length - 1 ? active + 1 : 0);
    setNext(next + 1 <= cards.length - 1 ? next + 1 : 0);
    setPrev(prev + 1 <= cards.length - 1 ? prev + 1 : 0);
  };

  const handleDecline = () => {
    setActive(active - 1 >= 0 ? active - 1 : cards.length - 1);
    setNext(next - 1 >= 0 ? next - 1 : cards.length - 1);
    setPrev(prev - 1 >= 0 ? prev - 1 : cards.length - 1);
  };

  return (
    <section className={s.container}>
      <div className={s.cardSwiper}>
        <div className={s.cardGroups}>
          {cards.map((card, index) => {
            return (
              <Card
                key={card.bigOne}
                images={card}
                active={index === active}
                next={index === next}
                prev={index === prev}
              />
            );
          })}
        </div>
        <div className={s.swiperButtons}>
          <button
            id={s.declineButton}
            className={s.button}
            onClick={handleDecline}
          >
            <VscChromeClose className={s.buttonIcon} />
          </button>
          <button
            id={s.acceptButton}
            className={s.button}
            onClick={handleAccept}
          >
            <FaHeart className={s.buttonIcon} />
          </button>
        </div>
      </div>
    </section>
  );
}
