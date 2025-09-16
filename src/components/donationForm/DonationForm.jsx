import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Form as BootstrapForm,
  Button,
  Card,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { createOrder } from "../../redux/slice/CreateOrderSlice";
import axiosInstance from "../../redux/axios/axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { donationFormValidationSchema } from "../../utils/validationSchema/ValidationSchema";
import "./DonationForm.css";
import toast, { Toaster } from "react-hot-toast";

function DonationForm() {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.createOrder);
  const [selectedDonationType, setSelectedDonationType] = useState("once");
  const [selectedAmount, setSelectedAmount] = useState("");
  const [selectedCitizenship, setSelectedCitizenship] = useState("indian");
  const [customAmount, setCustomAmount] = useState("");

  const predefinedAmountsOnce = [
    "₹ 7,500.00",
    "₹ 10,000.00",
    "₹ 15,000.00",
    "₹ 20,000.00",
    "₹ 30,000.00",
    "₹ 35,000.00",
    "₹ 50,000.00",
    "₹ 1,00,000.00",
    "₹ 1,50,000.00",
  ];
  const predefinedAmountsMonthly = [
    "₹ 750.00",
    "₹ 1000.00",
    "₹ 1500.00",
    "₹ 2000.00",
    "₹ 3000.00",
    "₹ 3500.00",
    "₹ 5000.00",
    "₹ 10,000.00",
    "₹ 15,000.00",
  ];
  const predefinedAmounts =
    selectedDonationType === "once"
      ? predefinedAmountsOnce
      : predefinedAmountsMonthly;

  const getNumericAmount = (amountString) => {
    if (selectedAmount === "custom") {
      return parseFloat(customAmount) || 0;
    }
    return parseFloat(amountString.replace(/[₹\s,]/g, "")) || 0;
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    script.onload = () => {
      console.log("Razorpay script loaded successfully");
    };
    script.onerror = () => {
      console.error("Error loading Razorpay script");
    };
    document.body.appendChild(script);
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  useEffect(() => {
    setSelectedAmount("");
    setCustomAmount("");
  }, [selectedDonationType]);

  const handleDonateNow = async (values, { setSubmitting }) => {
    try {
      if (!selectedAmount) {
        alert("Please select an amount");
        return;
      }
      const amount = getNumericAmount(selectedAmount);
      if (amount <= 0) {
        alert("Please enter a valid amount");
        return;
      }
      const orderResult = await dispatch(createOrder(amount)).unwrap();
      if (!orderResult || !orderResult.id) {
        throw new Error("Failed to create order");
      }
      const razorpayOrderId = orderResult.id;
      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY,
        amount: amount * 100,
        currency: "INR",
        name: "Sewa Bharti Malwa",
        description: "Donation Transaction",
        order_id: razorpayOrderId,
        image: "https://example.com/your_logo",
        handler: async function (response) {
          const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
            response;
          try {
            const verificationData = {
              razorpay_order_id,
              razorpay_payment_id,
              razorpay_signature,
              email: values.email,
              full_name: values.fullName,
              phone: values.mobile,
              amount: amount,
              aadharNumber: values.aadharNumber,
              panNumber: values.panNumber,
              city: values.city,
              citizenship: selectedCitizenship === "indian",
              certificate: values.certificate,
            };
            const verificationResponse = await axiosInstance.post(
              "/donations/verify-payment",
              verificationData
            );
            if (verificationResponse.data.success) {
              toast.success(verificationResponse?.data.message);
            } else {
              alert("Payment verification failed. Please contact support.");
            }
          } catch (error) {
            console.error("Error verifying payment:", error);
            alert("Error verifying payment. Please contact support.");
          }
        },
        prefill: {
          name: values.fullName,
          email: values.email,
          contact: values.mobile,
        },
        theme: {
          color: "#3399cc",
        },
      };
      const razorpay = new window.Razorpay(options);
      razorpay.open();
      razorpay.on("payment.failed", (paymentError) => {
        console.error("Payment Failed:", paymentError);
        alert("Payment failed. Please try again.");
      });
    } catch (error) {
      console.error("Error in donation process:", error);
      alert("Error processing donation. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-vh-100 text-white rounded">
      <Toaster />
      <Container fluid className="bg-light">
        {/* Progress Steps */}
        <Row className="justify-content-center mb-2">
          <Col xs="auto" className="d-flex align-items-center mt-3">
            <div className="d-flex align-items-center">
              <div
                className="rounded-circle text-white d-flex align-items-center justify-content-center"
                style={{
                  width: "40px",
                  height: "40px",
                  position: "absolute",
                  marginLeft: "-1%",
                  border: "2px solid #ffffff",
                  backgroundColor: "#F35500",
                  fontSize: "16px",
                }}
              >
                1
              </div>
              <div
                className="text-white pe-4 py-1 rounded"
                style={{
                  backgroundColor: "#F35500",
                  fontSize: "16px",
                  paddingLeft: "2rem",
                }}
              >
                Choose Donation <br /> Amount
              </div>
            </div>
            <div
              className="mx-2"
              style={{
                height: "2px",
                width: "30px",
                backgroundColor: "#FB8241",
              }}
            ></div>
            <div className="d-flex align-items-center">
              <div
                className="rounded-circle text-white d-flex align-items-center justify-content-center"
                style={{
                  width: "40px",
                  height: "40px",
                  position: "absolute",
                  marginLeft: "-1%",
                  border: "2px solid #ffffff",
                  backgroundColor: "#FB8241",
                  fontSize: "18px",
                }}
              >
                2
              </div>
              <div
                className="text-white pe-3 py-1 rounded"
                style={{
                  backgroundColor: "#FB8241",
                  fontSize: "16px",
                  paddingLeft: "2rem",
                }}
              >
                Fill your personal <br /> details
              </div>
            </div>
            <div
              className="mx-2"
              style={{
                height: "2px",
                width: "30px",
                backgroundColor: "#D1874E",
              }}
            ></div>
            <div className="d-flex align-items-center">
              <div
                className="rounded-circle text-white d-flex align-items-center justify-content-center"
                style={{
                  width: "40px",
                  height: "40px",
                  position: "absolute",
                  marginLeft: "-1%",
                  border: "2px solid #ffffff",
                  backgroundColor: "#FB8241",
                  fontSize: "18px",
                }}
              >
                3
              </div>
              <div
                className="text-white rounded pe-3 py-3"
                style={{
                  backgroundColor: "#FB8241",
                  fontSize: "16px",
                  paddingLeft: "2rem",
                }}
              >
                Donation Submitted
              </div>
            </div>
          </Col>
        </Row>
        <hr className="mt-3 mb-3" />
        {/* Main Content */}
        <Row className="g-3">
          {/* Left Side - Donation Selection */}
          <Col lg={6}>
            <Card className="mb-3 border-card">
              <Card.Header
                className="text-white p-2"
                style={{ backgroundColor: "#FB8241", fontSize: "18px" }}
              >
                <h6 className="mb-0">Select Donation Type</h6>
              </Card.Header>
              <Card.Body className="p-3 py-4">
                <BootstrapForm>
                  <div className="d-flex">
                    <BootstrapForm.Check
                      type="radio"
                      id="donateOnce"
                      name="donationType"
                      label="Donate Once"
                      value="once"
                      checked={selectedDonationType === "once"}
                      onChange={(e) => setSelectedDonationType(e.target.value)}
                      className="mr-3"
                      style={{ fontSize: "16px" }}
                    />
                    <BootstrapForm.Check
                      type="radio"
                      id="donateMonthly"
                      name="donationType"
                      label="Donate Monthly"
                      value="monthly"
                      checked={selectedDonationType === "monthly"}
                      onChange={(e) => setSelectedDonationType(e.target.value)}
                      className="mx-4"
                      style={{ fontSize: "16px" }}
                    />
                  </div>
                </BootstrapForm>
              </Card.Body>
              <Card className="border-card">
                <Card.Header
                  className="text-white p-2 my-3"
                  style={{ backgroundColor: "#FB8241", fontSize: "18px" }}
                >
                  <h6 className="mb-0 ">Choose Donation Amount</h6>
                </Card.Header>
                <Card.Body className="p-3">
                  <Row className="g-4 mb-5">
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
                            fontSize: "16px",
                          }}
                        >
                          {amount}
                        </Button>
                      </Col>
                    ))}
                  </Row>
                  <hr className="my-3" />
                  <Button
                    className="w-50 py-2 border border-2"
                    style={{
                      backgroundColor: "#F15700",
                      border: "none",
                      fontSize: "16px",
                      fontWeight: "bold",
                    }}
                    onClick={() => {
                      setSelectedAmount("custom");
                    }}
                  >
                    Custom Amount
                  </Button>
                  {selectedAmount === "custom" && (
                    <BootstrapForm.Control
                      type="number"
                      placeholder="Enter custom amount"
                      className="mt-2 p-2"
                      style={{ fontSize: "16px" }}
                      value={customAmount}
                      onChange={(e) => setCustomAmount(e.target.value)}
                    />
                  )}
                </Card.Body>
              </Card>
            </Card>
          </Col>
          {/* Right Side - Personal Details */}
          <Col lg={6}>
            <Card className="mb-3 border-card">
              <Card.Header
                className="text-white p-2"
                style={{ backgroundColor: "#FB8241", fontSize: "18px" }}
              >
                <h6 className="mb-0">Select Your Citizenship</h6>
              </Card.Header>
              <Card.Body className="p-3">
                <BootstrapForm>
                  <BootstrapForm.Check
                    type="radio"
                    id="indianCitizen"
                    name="citizenship"
                    label="Indian Citizen"
                    value="indian"
                    checked={selectedCitizenship === "indian"}
                    onChange={(e) => setSelectedCitizenship(e.target.value)}
                    className="mb-2"
                    style={{ fontSize: "16px" }}
                  />
                  <BootstrapForm.Check
                    type="radio"
                    id="nriCitizen"
                    name="citizenship"
                    label="Indian Citizen (Not Residing in India - NRE, NRI, NRO)"
                    value="nri"
                    checked={selectedCitizenship === "nri"}
                    onChange={(e) => setSelectedCitizenship(e.target.value)}
                    className="mb-2"
                    style={{ fontSize: "16px" }}
                  />
                </BootstrapForm>
              </Card.Body>
              <Card
                style={{ backgroundColor: "#F69866", border: "none" }}
                className="p-2"
              >
                <Card.Header
                  className="text-dark p-2"
                  style={{
                    backgroundColor: "#FB8241",
                    border: "none",
                    fontSize: "18px",
                  }}
                >
                  <h6 className="mb-0">Personal Detail</h6>
                </Card.Header>
                <Card.Body className="p-3">
                  <Formik
                    initialValues={{
                      fullName: "",
                      email: "",
                      mobile: "",
                      aadharNumber: "",
                      panNumber: "",
                      city: "",
                      certificate: false,
                    }}
                    validationSchema={donationFormValidationSchema}
                    onSubmit={handleDonateNow}
                  >
                    {({ values, isSubmitting, setFieldValue }) => (
                      <Form>
                        <BootstrapForm.Group className="mb-2">
                          <Row>
                            <Col md={6}>
                              <BootstrapForm.Label
                                className="text-dark mb-1"
                                style={{ fontSize: "15px" }}
                              >
                                Full Name*
                              </BootstrapForm.Label>
                              <Field
                                as={BootstrapForm.Control}
                                type="text"
                                name="fullName"
                                placeholder="Full Name"
                                className="p-2 border border-2 rounded-3"
                                style={{ fontSize: "16px" }}
                              />
                              <ErrorMessage
                                name="fullName"
                                component="div"
                                className="text-danger"
                              />
                            </Col>
                            <Col md={6}>
                              <BootstrapForm.Label
                                className="text-dark mb-1"
                                style={{ fontSize: "15px" }}
                              >
                                Mobile Number*
                              </BootstrapForm.Label>
                              <Field
                                as={BootstrapForm.Control}
                                type="tel"
                                name="mobile"
                                placeholder="Mobile Number"
                                className="p-2 border border-2 rounded-3"
                                style={{ fontSize: "16px" }}
                              />
                              <ErrorMessage
                                name="mobile"
                                component="div"
                                className="text-danger"
                              />
                            </Col>
                          </Row>
                        </BootstrapForm.Group>
                        <BootstrapForm.Group className="mb-2">
                          <Row>
                            <Col md={6}>
                              <BootstrapForm.Label
                                className="text-dark mb-1"
                                style={{ fontSize: "15px" }}
                              >
                                Email ID*
                              </BootstrapForm.Label>
                              <Field
                                as={BootstrapForm.Control}
                                type="email"
                                name="email"
                                placeholder="Email ID"
                                className="p-2 border border-2 rounded-3"
                                style={{ fontSize: "16px" }}
                              />
                              <ErrorMessage
                                name="email"
                                component="div"
                                className="text-danger"
                              />
                            </Col>
                            <Col md={6}>
                              <BootstrapForm.Label
                                className="text-dark mb-1"
                                style={{ fontSize: "15px" }}
                              >
                                Aadhar Card no.*
                              </BootstrapForm.Label>
                              <Field
                                as={BootstrapForm.Control}
                                type="text"
                                name="aadharNumber"
                                placeholder="Aadhar Number"
                                className="p-2 border border-2 rounded-3"
                                style={{ fontSize: "16px" }}
                              />
                              <ErrorMessage
                                name="aadharNumber"
                                component="div"
                                className="text-danger"
                              />
                            </Col>
                          </Row>
                        </BootstrapForm.Group>
                        <BootstrapForm.Group className="mb-2">
                          <Row>
                            <Col md={6}>
                              <BootstrapForm.Label
                                className="text-dark mb-1"
                                style={{ fontSize: "15px" }}
                              >
                                Pan card no*
                              </BootstrapForm.Label>
                              <Field
                                as={BootstrapForm.Control}
                                type="text"
                                name="panNumber"
                                placeholder="Pan card no."
                                className="p-2 border border-2 rounded-3"
                                style={{ fontSize: "16px" }}
                                onChange={(e) => {
                                  const upperCaseValue = e.target.value.toUpperCase();
                                  setFieldValue("panNumber", upperCaseValue);
                                }}
                              />
                              <ErrorMessage
                                name="panNumber"
                                component="div"
                                className="text-danger"
                              />
                            </Col>
                            <Col md={6}>
                              <BootstrapForm.Label
                                className="text-dark mb-1"
                                style={{ fontSize: "15px" }}
                              >
                                City*
                              </BootstrapForm.Label>
                              <Field
                                as={BootstrapForm.Control}
                                type="text"
                                name="city"
                                placeholder="City"
                                className="p-2 border border-2 rounded-3"
                                style={{ fontSize: "16px" }}
                              />
                              <ErrorMessage
                                name="city"
                                component="div"
                                className="text-danger"
                              />
                            </Col>
                          </Row>
                        </BootstrapForm.Group>
                        <BootstrapForm.Group className="mb-2">
                          <Row>
                            <Col md={12}>
                              <BootstrapForm.Label
                                className="text-dark mb-1"
                                style={{ fontSize: "15px" }}
                              >
                                Selected Donation Amount
                              </BootstrapForm.Label>
                              <BootstrapForm.Control
                                type="text"
                                className="p-2 border border-2 rounded-3"
                                value={
                                  selectedAmount === "custom"
                                    ? `₹ ${customAmount}`
                                    : selectedAmount
                                }
                                readOnly
                                style={{ fontSize: "16px" }}
                              />
                            </Col>
                          </Row>
                        </BootstrapForm.Group>
                        <p
                          className="text-dark mb-3"
                          style={{ fontSize: "14px" }}
                        >
                          Please CHECK YOUR EMAIL FOR THE LOGIN CREDENTIALS AND
                          LOGIN DONATION RECEIPTS And Receipts.
                        </p>
                        <Field
                          as={BootstrapForm.Check}
                          type="checkbox"
                          id="certificate"
                          name="certificate"
                          label="I Would Like To Receive 80(G) Certificate"
                          className="text-dark mb-3"
                          style={{ fontSize: "16px" }}
                        />
                        <Button
                          className="w-50 py-2 border-0"
                          style={{
                            backgroundColor: "#F15700",
                            fontSize: "16px",
                            fontWeight: "bold",
                          }}
                          type="submit"
                          disabled={loading || isSubmitting}
                        >
                          {loading || isSubmitting
                            ? "Processing..."
                            : "Donate Now"}
                        </Button>
                        {error && (
                          <div
                            className="alert alert-danger mt-2 p-2"
                            role="alert"
                            style={{ fontSize: "13px" }}
                          >
                            {error}
                          </div>
                        )}
                      </Form>
                    )}
                  </Formik>
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
