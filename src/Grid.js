import React from "react";
import Image from "./Image";

export default function Grid(props) {
  const renderImages = () => {
    return props.images.map((image) => {
      return <Image id={image.id} access={props.access} key={image.id} />;
    });
  };

  return <div>{renderImages()}</div>;
}
