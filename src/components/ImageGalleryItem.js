import React from "react";

function ImageGalleryItem({ images, showModal }) {
  return (
    <>
      {images.map((image) => (
        <li className="ImageGalleryItem" key={image.id}>
          <img
            src={image.webformatURL}
            alt=""
            className="ImageGalleryItem-image"
            onClick={() => showModal(image.largeImageURL)}
          />
        </li>
      ))}
    </>
  );
}

export default ImageGalleryItem;
