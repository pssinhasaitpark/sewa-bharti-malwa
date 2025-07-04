import React from "react";

const EventsComponent = () => {
  const events = [
    {
      date: "25",
      month: "June",
      title: "Every Life Deserves Dignity",
      time: "12:00 am — 5:00 pm",
      location: "Indore, MP (India)",
    },
    {
      date: "15",
      month: "Dec",
      title: "Empowering Through Education",
      time: "12:00 am — 5:00 pm",
      location: "Indore, MP (India)",
    },
    {
      date: "22",
      month: "Mar",
      title: "Empowering Through Education",
      time: "12:00 am — 5:00 pm",
      location: "Indore, MP (India)",
    },
  ];

  return (
    <div
      style={{
        // width: '664px',
        height: "649px",
        background: "linear-gradient(145.38deg, #F15700 9.1%, #011659 95.63%)",
        padding: "20px",
        color: "white",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div className="mb-4">
        <div className="mb-3">
          <span style={{ fontSize: "16px" }}>Events</span>
          <div
            style={{
              width: "60px",
              height: "2px",
              backgroundColor: "white",
              marginTop: "8px",
            }}
          ></div>
        </div>
        <h1 style={{ fontSize: "48px", margin: "10px 0" }}>
          Be A Part Of The Change
        </h1>
        <h2 style={{ fontSize: "32px", margin: "10px 0" }}>Upcoming Events</h2>
      </div>

      <div style={{ marginTop: "40px" }}>
        {events.map((event, index) => (
          <div key={index} style={{ display: "flex", marginBottom: "30px" }}>
            <div
              style={{
                backgroundColor: "white",
                color: "black",
                width: "80px",
                height: "80px",
                borderRadius: "12px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                marginRight: "20px",
              }}
            >
              <span style={{ fontSize: "28px", fontWeight: "bold" }}>
                {event.date}
              </span>
              <span style={{ fontSize: "14px" }}>{event.month}</span>
            </div>

            <div>
              <h3 style={{ fontSize: "20px", margin: "0 0 10px 0" }}>
                {event.title}
              </h3>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "5px",
                }}
              >
                <span style={{ marginRight: "10px" }}>🕐</span>
                <span style={{ fontSize: "16px" }}>{event.time}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <span style={{ marginRight: "10px" }}>📍</span>
                <span style={{ fontSize: "16px" }}>{event.location}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsComponent;
