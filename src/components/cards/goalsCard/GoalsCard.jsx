import React from "react";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { GoalsIcon } from "../../../assets";
import "./GoalsCard.css";
import { FaArrowRightLong } from "react-icons/fa6";

const goals = [
  {
    text: "To Open 300 Self-Practice Study Centers In Ujain &...",
    segments: [
      { color: "orange", width: "30%" },
      { color: "green", width: "30%" },
      { color: "blue", width: "40%" },
    ],
  },
  {
    text: "To Manage Social Well-Being",
    segments: [
      { color: "orange", width: "20%" },
      { color: "green", width: "30%" },
      { color: "blue", width: "50%" },
    ],
  },
  {
    text: "To Start 5 Skill Centers",
    segments: [
      { color: "orange", width: "20%" },
      { color: "green", width: "30%" },
      { color: "blue", width: "50%" },
    ],
  },
  {
    text: "To Distribute 800 Tribal Girl Kits",
    segments: [
      { color: "orange", width: "20%" },
      { color: "green", width: "30%" },
      { color: "blue", width: "50%" },
    ],
  },
];

const GoalsCard = () => {
  return (
    <Card
      className="goals-card"
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
          backgroundColor: "#fd7e14",
          position: "absolute",
          top: 0,
          left: "10%",
        }}
      />
      <Card.Body className="p-0 mt-2">
        <Card.Title className="fs-4 p-2">Our Next Goal</Card.Title>
        <img src={GoalsIcon} alt="Goals Icon" className="goal-icon" />
        {goals.map((goal, idx) => (
          <div
            className={`goal-item p-1 list-item${
              idx !== goals.length - 1 ? " with-border" : ""
            }`}
            key={goal.text}
          >
            <div className="goal-text-bar-wrapper">
              <div className="d-flex align-items-center goal-text-row">
                <FaArrowRightLong className="arrow" />
                <span className="goal-text">{goal.text}</span>
              </div>
              {/* Always show the thin segmented line */}
              <div className="segmented-progress-line">
                {goal.segments.map((seg, i) => (
                  <div
                    key={i}
                    className={`segment ${seg.color}`}
                    style={{ width: seg.width }}
                  ></div>
                ))}
              </div>
              {/* Overlay expands from bottom to top on hover */}
              <div className="segmented-progress-overlay">
                {goal.segments.map((seg, i) => (
                  <div
                    key={i}
                    className={`segment ${seg.color}`}
                    style={{ width: seg.width }}
                  >
                    <span className="segment-label">{seg.width}</span>
                  </div>
                ))}
                <div className="overlay-content">
                  <div className="d-flex align-items-center goal-text-row overlay-row">
                    <FaArrowRightLong className="arrow" />
                    <span className="goal-text">{goal.text}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Card.Body>
    </Card>
  );
};

export default GoalsCard;
