import { useState } from "react";
import "./style.css";
const ImageGallery = () => {
  const [showImage, setShowImage] = useState("");
  const ImageData = [
    {
      id: 1,
      imageSrc:
        "https://imgs.search.brave.com/bAdI7a7qnuuOIJphttt3DfbzLnCU7ZDMtnkejXq6UII/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zdDIu/ZGVwb3NpdHBob3Rv/cy5jb20vMTAwMDkz/OC81NDk5L2kvNDUw/L2RlcG9zaXRwaG90/b3NfNTQ5OTg2MTMt/c3RvY2stcGhvdG8t/Z2luZ2VyLWNhdC5q/cGc",
    },
    {
      id: 2,
      imageSrc:
        "https://images.pexels.com/photos/1183434/pexels-photo-1183434.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 3,
      imageSrc:
        "https://images.pexels.com/photos/207983/pexels-photo-207983.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 4,
      imageSrc:
        "https://images.pexels.com/photos/1670413/pexels-photo-1670413.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  const imgHandler = (id) => {
    const [imgClick] = ImageData.filter((img) => img.id === id);
    console.log(typeof imgClick.imageSrc);
    setShowImage(imgClick.imageSrc);
  };
  return (
    <div className="main-container">
      <div className="text">
        <p>Click On Image</p>
      </div>
      <div className="main-container-img">
        {ImageData.map((img) => (
          <div
            onClick={() => imgHandler(img.id)}
            key={img.id}
            className="image-card-container"
          >
            <img src={img.imageSrc} />
          </div>
        ))}
      </div>
      <div className="show-img">
        {showImage && (
          <>
            <div className="text">
              <p>selected Image</p>
            </div>
            <div className="image-card-container-show">
              <img src={showImage} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ImageGallery;
