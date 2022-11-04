import React, { useEffect } from "react";
import { trailImages } from "../../utils/constants";
import s from "./TrailingImages.module.scss";

export default function TrailingImages() {
  const images = document.getElementsByClassName("js-name");

  let globalIndex = 0;
  let last = { x: 0, y: 0 };

  const activate = (image, x, y) => {
    image.style.left = `${x}px`;
    image.style.top = `${y}px`;
    image.dataset.status = "active";
    last = { x, y };
  };

  const distanceMoved = (x, y) => {
    return Math.hypot(x - last.x, y - last.y);
  };

  const handleMove = (e) => {
    if (distanceMoved(e.clientX, e.clientY) > 100) {
      const lead = images[globalIndex % images.length];
      const tail = images[(globalIndex - 5) % images.length];

      activate(lead, e.clientX, e.clientY);

      if (tail) tail.dataset.status = "inactive";
      globalIndex++;
    }
  };

  return (
    <section className={s.section} onMouseMove={handleMove}>
      {trailImages.map((img, index) => {
        return (
          <img
            key={img}
            className={`${s.image} js-name`}
            data-index={index}
            data-status="inactive"
            src={img}
          />
        );
      })}
    </section>
  );
}
