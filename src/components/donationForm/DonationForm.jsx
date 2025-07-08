import { Divide } from "lucide-react";
import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { IoIosCloudUpload } from "react-icons/io";
import "./DonationForm.css";
function DonationForm() {
  const [selectedDonationType, setSelectedDonationType] = useState("once");
  const [selectedAmount, setSelectedAmount] = useState("");
  const [selectedCitizenship, setSelectedCitizenship] = useState("indian");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    idProof: null,
    whatsappNumber: "",
    certificate: false,
  });

  const predefinedAmounts = [
    "₹ 4500.00",
    "₹ 2000.00",
    "₹ 100.00",
    "₹ 3000.00",
    "₹ 9500.00",
    "₹ 2300.00",
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        idProof: file,
      }));
    }
  };

  return (
    <div className="min-vh-100 text-white  rounded">
      <Container fluid className="bg-light  ">
        {/* Progress Steps */}
        <Row className="justify-content-center mb-4 ">
          <Col xs="auto" className="d-flex align-items-center mt-5">
            <div className="d-flex align-items-center">
              <div
                className="rounded-circle text-white d-flex align-items-center fs-3 justify-content-center"
                style={{
                  width: "60px",
                  height: "60px",
                  position: "absolute",
                  marginLeft: "-1.5%",
                  border: "2px solid #ffffff",
                  backgroundColor: "#F35500",
                }}
              >
                1
              </div>
              <div
                className=" text-white px-5 py-2 rounded"
                style={{
                  backgroundColor: "#F35500",
                }}
              >
                <div className="fs-4 font-weight-bold">
                  Choose Donation <br></br> Amount
                </div>
              </div>
            </div>
            <div
              className="mx-2"
              style={{
                height: "2px",
                width: "40px",
                backgroundColor: "#FB8241",
              }}
            ></div>
            <div className="d-flex align-items-center">
              <div
                className="rounded-circle text-white d-flex align-items-center fs-3 justify-content-center"
                style={{
                  width: "60px",
                  height: "60px",
                  position: "absolute",
                  marginLeft: "-1.5%",
                  border: "2px solid #ffffff",
                  backgroundColor: "#FB8241",
                }}
              >
                2
              </div>
              <div
                className=" text-white px-5 py-2 rounded"
                style={{
                  backgroundColor: "#FB8241",
                }}
              >
                <div className="fs-4 font-weight-bold">
                  OTP Authentication With <br></br> Mobile
                </div>
              </div>
            </div>
            <div
              className="mx-2"
              style={{
                height: "2px",
                width: "40px",
                backgroundColor: "#D1874E",
              }}
            ></div>
            <div className="d-flex align-items-center">
              <div
                className="rounded-circle text-white d-flex align-items-center fs-3 justify-content-center"
                style={{
                  width: "60px",
                  height: "60px",
                  position: "absolute",
                  marginLeft: "-1.5%",
                  border: "2px solid #ffffff",
                  backgroundColor: "#FB8241",
                }}
              >
                3
              </div>
              <div
                className=" text-white rounded px-5"
                style={{
                  backgroundColor: "#FB8241",
                  padding: "26px",
                }}
              >
                <div className="fs-4 font-weight-bold">Donation Submitted</div>
              </div>
            </div>
          </Col>
        </Row>
        <div className="border-bottom mt-5  mb-5"></div>
        {/* Main Content */}
        <Row className="g-4">
          {/* Left Side - Donation Selection */}
          <Col lg={6}>
            <Card className="mb-4 mt-5 border-card ">
              <Card.Header
                className="text-white p-3 rounded-3 "
                style={{ backgroundColor: "#FB8241" }}
              >
                <h5 className="mb-0 fs-4">Select Donation Type</h5>
              </Card.Header>
              <Card.Body className="mb-3 mt-4">
                <Form>
                  <div className="d-flex ">
                    <Form.Check
                      type="radio"
                      id="donateOnce"
                      name="donationType"
                      label="Donate Once"
                      value="once"
                      checked={selectedDonationType === "once"}
                      onChange={(e) => setSelectedDonationType(e.target.value)}
                      className="mr-3 fw-medium "
                      style={{ fontSize: "20px" }}
                    />
                    <Form.Check
                      type="radio"
                      id="donateMonthly"
                      name="donationType"
                      label="Donate Monthly"
                      value="monthly"
                      checked={selectedDonationType === "monthly"}
                      onChange={(e) => setSelectedDonationType(e.target.value)}
                      className="mx-5 fw-medium "
                      style={{ fontSize: "20px" }}
                    />
                  </div>
                </Form>
              </Card.Body>
              <hr className="mx-4" />
              <Card className="mt-5 border-card ">
                <Card.Header
                  className="text-white p-3 rounded-3 mb-5"
                  style={{ backgroundColor: "#FB8241" }}
                >
                  <h5 className="mb-0">Choose Donation Amount</h5>
                </Card.Header>
                <Card.Body className="mx-3">
                  <Row className="g-4 mb-3">
                    {predefinedAmounts.map((amount, index) => (
                      <Col xs={4} key={index}>
                        <Button
                          variant={
                            selectedAmount === amount
                              ? "primary"
                              : "outline-secondary"
                          }
                          onClick={() => setSelectedAmount(amount)}
                          className="w-100 p-3 rounded-0"
                          style={{
                            backgroundColor:
                              selectedAmount === amount ? "#007bff" : "#CACACA",
                            color: "#000000",
                            border: "none",
                          }}
                        >
                          {amount}
                        </Button>
                      </Col>
                    ))}
                  </Row>
                  <hr className="my-5 py-2" />
                  <Button
                    className="w-50 py-2  border border-2  fs-4 fw-bolder"
                    style={{
                      backgroundColor: "#F15700",
                      border: "none",
                      marginBottom: "10.2rem",
                    }}
                  >
                    Custom Amount
                  </Button>
                </Card.Body>
              </Card>
            </Card>
          </Col>

          {/* Right Side - Personal Details */}
          <Col lg={6}>
            <Card className="mb-4 mt-5 border-card ">
              <Card.Header
                className="text-white p-3 rounded-3 "
                style={{ backgroundColor: "#FB8241" }}
              >
                <h5 className="mb-0 fs-4">Select Your Citizenship</h5>
              </Card.Header>
              <Card.Body className="mb-5">
                <Form className="d-flex justify-content-between">
                  <Form.Check
                    type="radio"
                    id="indianCitizen"
                    name="citizenship"
                    label="Indian Citizen"
                    value="indian"
                    checked={selectedCitizenship === "indian"}
                    onChange={(e) => setSelectedCitizenship(e.target.value)}
                    className="mb-2 fs-5 fw-medium "
                  />
                  <Form.Check
                    type="radio"
                    id="nriCitizen"
                    name="citizenship"
                    label="Indian Citizen (Not Residing in India
                    - NRE, NRI, NRO)"
                    value="nri"
                    checked={selectedCitizenship === "nri"}
                    onChange={(e) => setSelectedCitizenship(e.target.value)}
                    className="mb-2 fs-5 fw-medium"
                  />
                </Form>
              </Card.Body>
              <Card
                style={{ backgroundColor: "#F69866", border: "none" }}
                className="p-4"
              >
                <Card.Header
                  className="text-dark"
                  style={{ backgroundColor: "#FB8241", border: "none" }}
                >
                  <h5 className="mb-0 fs-4 fw-medium">Personal Detail</h5>
                </Card.Header>
                <Card.Body>
                  <Form>
                    <Form.Group className="mb-3">
                      <Row>
                        <Col md={6}>
                          <Form.Label className="text-dark">
                            Full Name*
                          </Form.Label>
                          <Form.Control
                            className="p-3 ps-4 border border-2 rounded-3"
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleInputChange}
                            placeholder="Full Name"
                          />
                        </Col>
                        <Col md={6}>
                          <Form.Label className="text-dark">
                            Mobile Number*
                          </Form.Label>
                          <Form.Control
                            type="tel"
                            className="p-3 ps-4 border border-2 rounded-3"
                            name="mobile"
                            value={formData.mobile}
                            onChange={handleInputChange}
                            placeholder="Mobile Number"
                          />
                        </Col>
                      </Row>
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label className="text-dark">Email ID*</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        className="p-3 ps-4 border border-2 rounded-3"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Email ID*"
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label className="text-dark">
                        ID Proof Upload (Aadhar, PAN, Driving License, Voter ID)
                      </Form.Label>
                      <div className="d-flex align-items-center mb-5">
                        <div style={{ position: "relative", width: "100%" }}>
                          <Form.Control
                            type="text"
                            className="p-3 ps-4 border border-2 rounded-3"
                            placeholder="Upload ID"
                            value={
                              formData.idProof ? formData.idProof.name : ""
                            }
                            readOnly
                            style={{ paddingRight: "40px" }}
                          />
                          <Form.Control
                            type="file"
                            onChange={handleFileUpload}
                            style={{
                              position: "absolute",
                              right: 0,
                              top: 0,
                              opacity: 0,
                              width: "40px",
                              height: "100%",
                              cursor: "pointer",
                            }}
                            id="idProofUpload"
                            accept=".jpg,.jpeg,.png,.pdf"
                          />
                          <div
                            style={{
                              position: "absolute",
                              right: "10px",
                              top: "50%",
                              transform: "translateY(-50%)",
                            }}
                          >
                            <IoIosCloudUpload size={40} />
                          </div>
                        </div>
                      </div>
                    </Form.Group>
                    <p className="text-dark mb-4 fs-4">
                      Please Share Your WhatsApp Number For Donation Updates{" "}
                      <br></br>And Receipts.
                    </p>
                    <Form.Check
                      type="checkbox"
                      id="certificate"
                      name="certificate"
                      label="I Would Like To Receive 80(G) Certificate"
                      checked={formData.certificate}
                      onChange={handleInputChange}
                      className="text-dark mb-3 fs-5"
                    />
                    <Button
                      className="w-50 py-2  fs-4 fw-bolder border-0"
                      style={{
                        backgroundColor: "#F15700",
                        //  border: "0.7px solid #6CD9E8"
                      }}
                    >
                      Donate Now
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default DonationForm;
