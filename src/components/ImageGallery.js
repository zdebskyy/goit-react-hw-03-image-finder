import React from "react";
import ImageGalleryItem from "./ImageGalleryItem";

function ImageGallery({ images, onShowModal }) {
  return (
    <>
      <ul className="ImageGallery">
        <ImageGalleryItem images={images} showModal={onShowModal} />
      </ul>
    </>
  );
}
export default ImageGallery;
