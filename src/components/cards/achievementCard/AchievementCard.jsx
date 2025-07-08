import React from "react";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { AchimentBadgeIcon } from "../../../assets";
import "./AchievementCard.css"; // Create this CSS file for styles.
import { IoIosArrowRoundForward } from "react-icons/io";

const AchievementsCard = () => {
  return (
    <Card className="custom-card"
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
          backgroundColor: "#28a745",
          position: "absolute",
          top: 0,
          left: "10%",
        }}
      />
      <Card.Body>
        <div className="d-flex justify-content-between align-items-start mb-1">
          <Card.Title
            className="fw-bolder fs-3 mt-3 custom-title"
            style={{
              color: "#0BB72B",
              paddingBottom: "10px",
              display: "inline",
            }}
          >
            What We Have Achieved So Far
          </Card.Title>
          <img
            src={AchimentBadgeIcon}
            alt="Achievement Icon"
            style={{
              position: "absolute",
              top: "0px",
              right: "20px",
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
                <span className="list-text  py-2">Highlight Key Achievements And Success Stories</span>
              </div>
            </li>
            <li className="list-item list-design">
              <div className="d-flex align-items-start">
                <IoIosArrowRoundForward
                  size={40}
                  className="arrow text-muted"
                />
                <span className="list-text  py-2">Highlight Key Achievements And Success Stories</span>
              </div>
            </li>

            <li className="list-item list-design">
              <div className="d-flex align-items-start">
                <IoIosArrowRoundForward
                  size={40}
                  className="arrow text-muted"
                />
                <span className="list-text py-2 ">Number Of Beneficiaries, Successful Events, And Social Impact Statistics</span>
              </div>
            </li>

            <li className="list-item list-design">
              <div className="d-flex align-items-start">
                <IoIosArrowRoundForward
                  size={40}
                  className="arrow text-muted"
                />
                <span className="list-text py-2">Highlight Key Achievements And Success Stories</span>
              </div>
            </li>

            <li className="list-item list-design">
              <div className="d-flex align-items-start">
                <IoIosArrowRoundForward
                  size={40}
                  className="arrow text-muted"
                />
                <span className="list-text py-2">Highlight Key Achievements And Success Stories</span>
              </div>
            </li>
          </ul>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default AchievementsCard;
