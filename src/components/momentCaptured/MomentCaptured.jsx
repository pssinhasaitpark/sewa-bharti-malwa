import React from "react";

import { Button } from "react-bootstrap";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import {
  MaskGroup1,
  MaskGroup2,
  MaskGroup3,
  MaskGroup4,
  MaskGroup5,
  MaskGroup6,
} from "../../assets";

const ImageGallery = () => {
  const [open, setOpen] = React.useState(false);
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const images = [
    {
      src: MaskGroup1,
      alt: "Child with a slate",
      caption: "Caption 1",
    },
    {
      src: MaskGroup2,
      alt: "Group of children",
      caption: "Caption 2",
    },
    {
      src: MaskGroup3,
      alt: "Children with a laptop",
      caption: "Caption 3",
    },
    {
      src: MaskGroup4,
      alt: "Children in traditional attire",
      caption: "Caption 4",
    },
    {
      src: MaskGroup5,
      alt: "Children playing",
      caption: "Caption 5",
    },
    {
      src: MaskGroup6,
      alt: "Children smiling",
      caption: "Caption 6",
    },
  ];

  return (
    <>
      <div className="moments-gallery">
        <div className="container">
          {/* Header Section */}
          <div className="row align-items-center mb-5">
            <div className="col-lg-8 col-md-7 justify-content-center d-flex flex-column">
              <h1 className="moments-title">
                <span className="moments-text flagship">Moments</span>{" "}
                <span className="captured-text define-impact">Captured</span>
              </h1>
              <p className="moments-subtitle">
                A Visual Journey Through Our Milestones, Memories, And The
                <br></br>Lives We've Touched Along The Way.
              </p>
              <Button variant="warning" className="view-all-button">
                View All
              </Button>
            </div>
            <div className="col-lg-4 col-md-5 text-md-end mt-3 mt-md-0"></div>
          </div>

          {/* Image Grid */}
          <div className="moments-grid">
            {/* Column 1 */}
            <div className="grid-column">
              <div className="column-wrapper">
                <div
                  className="image-container img-tall mt-5 pt-lg-5 pt-0"
                  onClick={() => {
                    setCurrentIndex(0);
                    setOpen(true);
                  }}
                >
                  <img
                    src={images[0].src}
                    alt={images[0].alt}
                    className="img-fluid mt-5"
                  />
                </div>
              </div>
            </div>

            {/* Column 2 */}
            <div className="grid-column">
              <div className="column-wrapper">
                <div
                  className="image-container img-medium"
                  onClick={() => {
                    setCurrentIndex(1);
                    setOpen(true);
                  }}
                >
                  <img
                    src={images[1].src}
                    alt={images[1].alt}
                    className="img-fluid"
                  />
                </div>
                <div
                  className="image-container img-medium"
                  onClick={() => {
                    setCurrentIndex(2);
                    setOpen(true);
                  }}
                >
                  <img
                    src={images[2].src}
                    alt={images[2].alt}
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>

            {/* Column 3 */}
            <div className="grid-column">
              <div className="column-wrapper abcd">
                <div
                  className="image-container img-short"
                  onClick={() => {
                    setCurrentIndex(3);
                    setOpen(true);
                  }}
                >
                  <img
                    src={images[3].src}
                    alt={images[3].alt}
                    className="img-fluid h-100"
                  />
                </div>
                <div
                  className="image-container img-tall"
                  onClick={() => {
                    setCurrentIndex(4);
                    setOpen(true);
                  }}
                >
                  <img
                    src={images[4].src}
                    alt={images[4].alt}
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>

            {/* Column 4 */}
            <div className="grid-column">
              <div className="column-wrapper">
                <div
                  className="image-container img-tall mt-5 pt-0"
                  onClick={() => {
                    setCurrentIndex(5);
                    setOpen(true);
                  }}
                >
                  <img
                    src={images[5].src}
                    alt={images[5].alt}
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={images.map((img) => ({
          src: img.src,
          alt: img.alt,
          description: img.caption,
        }))}
        index={currentIndex}
      />

      {/* Custom CSS for the component */}
      <style jsx>{`
        /* Your existing styles here */
        .moments-gallery {
          padding: 40px 20px;
          min-height: 100vh;
        }
        .view-all-btn {
          background-color: #e67e22;
          border-color: #e67e22;
          color: white;
          padding: 10px 20px;
          border-radius: 5px;
          font-weight: 500;
          font-size: 0.9rem;
          border: none;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }
        .view-all-btn:hover {
          background-color: #d35400;
          border-color: #d35400;
        }
        .image-container {
          overflow: hidden;
          border-radius: 8px;
          position: relative;
          transition: transform 0.3s ease;
          margin-bottom: 15px;
          height: 100%;
          cursor: pointer;
        }
        .image-container:hover {
          transform: translateY(-5px);
        }
        .image-container img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
          display: block;
        }
        .image-container:hover img {
          transform: scale(1.05);
        }
        .img-tall {
          height: 400px;
        }
        .img-medium {
          height: 320px;
        }
        .img-short {
          height: 240px;
        }
        .moments-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 15px;
          max-width: 1200px;
          margin: 0 auto;
        }
        .grid-column {
          flex: 1;
          min-width: 250px;
          display: flex;
          flex-direction: column;
        }
        .column-wrapper {
          display: flex;
          flex-direction: column;
          height: 100%;
        }
        .abcd {
          margin-top: -70px;
        }
        @media (max-width: 991px) {
          .grid-column {
            flex: 1 1 calc(50% - 7.5px);
          }
        }
        @media (max-width: 575px) {
          .grid-column {
            flex: 1 1 100%;
            min-width: 100%;
          }
          .moments-title {
            font-size: 2.2rem;
          }
        }
      `}</style>
    </>
  );
};

export default ImageGallery;
