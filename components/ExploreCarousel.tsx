"use client";

import { useEffect, useState } from "react";

/**
 * Rotating preview images on the Explore Math card.
 * To change the slides: replace or add files in public/worlds/explore/
 * and update this list.
 */
const exploreImages = [
  "/worlds/explore/01.png",
  "/worlds/explore/02.png",
  "/worlds/explore/03.png",
  "/worlds/explore/04.png",
  "/worlds/explore/05.png",
];

const FIRST_IMAGE_DURATION = 5000;
const IMAGE_DURATION = 3500;

export default function ExploreCarousel() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const delay = currentImage === 0 ? FIRST_IMAGE_DURATION : IMAGE_DURATION;

    const timeout = setTimeout(() => {
      setCurrentImage((prev) => (prev + 1) % exploreImages.length);
    }, delay);

    return () => clearTimeout(timeout);
  }, [currentImage]);

  return (
    <img
      src={exploreImages[currentImage]}
      alt="Explore Math"
      className="w-full rounded-[28px]"
    />
  );
}
