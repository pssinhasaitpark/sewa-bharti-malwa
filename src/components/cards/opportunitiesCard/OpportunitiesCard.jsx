import React from "react";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { OpportunitiesIcon } from "../../../assets";
import "./OpportunitiesCard.css"; // Create this CSS file for styles.
import { IoIosArrowRoundForward } from "react-icons/io";

const OpportunitiesCard = () => {
  return (
    <Card
      style={{
        border: "none",
        borderRadius: "10px",
        boxShadow: "inset 0 0 8px rgba(0, 0, 0, 0.1)",
        position: "relative",
        margin: "20px",
      }}
    >
      <div
        style={{
          height: "4px",
          width: "20%",
          backgroundColor: "#3353F6",

          position: "absolute",
          top: 0,
          left: "10%",
        }}
      />
      <Card.Body className="mt-3">
        <div className="d-flex justify-content-between align-items-start mb-5">
          <Card.Title
            className="fw-bolder fs-3 mt-3 "
            style={{
              color: "#3353F6",
              paddingBottom: "10px",
              display: "inline",
            }}
          >
            What We Have Achieved So Far
          </Card.Title>
          <img
            src={OpportunitiesIcon}
            alt="Achievement Icon"
            style={{
              position: "absolute",
              top: "20px",
              right: "10px",
            }}
          />
        </div>
        <Card.Text>
          <ul className="list-unstyled">
            <li className="list-item list-design">
              <div className="d-flex align-items-start">
                <IoIosArrowRoundForward
                  size={40}
                  className="arrow text-muted"
                />
                <span className="list-text">
                  Highlight Key Achievements And Success Stories
                </span>
              </div>
            </li>

            <li className="list-item list-design">
              <div className="d-flex align-items-start">
                <IoIosArrowRoundForward
                  size={40}
                  className="arrow text-muted"
                />
                <span className="list-text">
                  Number Of Beneficiaries, Successful Events, And Social Impact
                  Statistics
                </span>
              </div>
            </li>

            <li className="list-item list-design">
              <div className="d-flex align-items-start">
                <IoIosArrowRoundForward
                  size={40}
                  className="arrow text-muted"
                />
                <span className="list-text">
                  Highlight Key Achievements And Success Stories
                </span>
              </div>
            </li>

            <li className="list-item list-design">
              <div className="d-flex align-items-start">
                <IoIosArrowRoundForward
                  size={40}
                  className="arrow text-muted"
                />
                <span className="list-text">
                  Highlight Key Achievements And Success Stories
                </span>
              </div>
            </li>
          </ul>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default OpportunitiesCard;
