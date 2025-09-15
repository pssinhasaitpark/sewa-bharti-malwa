import { Divide } from "lucide-react";
import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { IoIosCloudUpload } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { createOrder } from '../../redux/slice/CreateOrderSlice'
import axiosInstance from '../../redux/axios/axios'
import "./DonationForm.css";

function DonationForm() {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.createOrder);

  const [customAmount, setCustomAmount] = useState("");
  const [selectedDonationType, setSelectedDonationType] = useState("once");
  const [selectedAmount, setSelectedAmount] = useState("");
  const [selectedCitizenship, setSelectedCitizenship] = useState("indian");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    aadharNumber: "",
    panNumber: "",
    city: "",
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

  // Load Razorpay script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    script.onload = () => {
      console.log('Razorpay script loaded successfully');
    };
    script.onerror = () => {
      console.error('Error loading Razorpay script');
    };
    document.body.appendChild(script);
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  // Function to extract numeric value from amount string
  const getNumericAmount = (amountString) => {
    if (selectedAmount === "custom") {
      return parseFloat(customAmount) || 0;
    }
    // Extract number from "₹ 4500.00" format
    return parseFloat(amountString.replace(/[₹\s,]/g, '')) || 0;
  };

  // Handle form submission and payment
  const handleDonateNow = async () => {
    try {
      // Validate form
      if (!selectedAmount || !formData.fullName || !formData.email || !formData.mobile) {
        alert("Please fill all required fields and select an amount");
        return;
      }

      const amount = getNumericAmount(selectedAmount);
      if (amount <= 0) {
        alert("Please enter a valid amount");
        return;
      }

      // Step 1: Create order
      console.log("Creating order with amount:", amount);
      const orderResult = await dispatch(createOrder(amount)).unwrap();

      if (!orderResult || !orderResult.id) {
        throw new Error("Failed to create order");
      }

      const razorpayOrderId = orderResult.id;
      console.log("Order created successfully:", razorpayOrderId);

      // Step 2: Open Razorpay payment gateway
      const options = {
        // key: 'rzp_test_b0PSRa7kNhbHj3',
         key: 'rzp_live_U2V9elOCyZBjic', 
        amount: amount * 100, // Amount in paise
        currency: 'INR',
        name: 'Sewa Bharti Malwa',
        description: 'Donation Transaction',
        order_id: razorpayOrderId,
        image: 'https://example.com/your_logo',
        handler: async function (response) {
          const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = response;
          console.log("Payment successful:", response);

          try {
            // Step 3: Verify payment with all user details
            const verificationData = {
              razorpay_order_id,
              razorpay_payment_id,
              razorpay_signature,
              email: formData.email,
              full_name: formData.fullName,
              phone: formData.mobile,
              amount: amount,
              aadharNumber: formData.aadharNumber,
              panNumber: formData.panNumber,
              city: formData.city,
              citizenship: selectedCitizenship === "indian",
              certificate: formData.certificate
            };

            console.log("Verifying payment with data:", verificationData);

            const verificationResponse = await axiosInstance.post(
              '/donations/verify-payment',
              verificationData
            );

            if (verificationResponse.data.success) {
              console.log('Payment verified successfully!');
              alert('Donation successful! Check your email for login credentials and receipt.');

              // Reset form after successful donation
              setFormData({
                fullName: "",
                email: "",
                mobile: "",
                aadharNumber: "",
                panNumber: "",
                city: "",
                certificate: false,
              });
              setSelectedAmount("");
              setCustomAmount("");
            } else {
              console.error('Payment verification failed:', verificationResponse.data);
              alert('Payment verification failed. Please contact support.');
            }
          } catch (error) {
            console.error('Error verifying payment:', error);
            alert('Error verifying payment. Please contact support.');
          }
        },
        prefill: {
          name: formData.fullName,
          email: formData.email,
          contact: formData.mobile,
        },
        theme: {
          color: '#3399cc',
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();

      razorpay.on('payment.failed', (paymentError) => {
        console.error('Payment Failed:', paymentError);
        alert('Payment failed. Please try again.');
      });

    } catch (error) {
      console.error("Error in donation process:", error);
      alert('Error processing donation. Please try again.');
    }
  };

  return (
    <div className="min-vh-100 text-white rounded">
      <Container fluid className="bg-light">
        {/* Progress Steps */}
        <Row className="justify-content-center mb-4">
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
                className="text-white px-5 py-2 rounded"
                style={{
                  backgroundColor: "#F35500",
                }}
              >
                <div className="fs-4 font-weight-bold">
                  Choose Donation <br /> Amount
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
                className="text-white px-5 py-2 rounded"
                style={{
                  backgroundColor: "#FB8241",
                }}
              >
                <div className="fs-4 font-weight-bold">
                  Fill your personal <br /> details
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
                className="text-white rounded px-5"
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
        <div className="border-bottom mt-5 mb-5"></div>

        {/* Main Content */}
        <Row className="g-4">
          {/* Left Side - Donation Selection */}
          <Col lg={6}>
            <Card className="mb-4 mt-5 border-card">
              <Card.Header
                className="text-white p-3 rounded-3"
                style={{ backgroundColor: "#FB8241" }}
              >
                <h5 className="mb-0 fs-4">Select Donation Type</h5>
              </Card.Header>
              <Card.Body className="mb-3 mt-4">
                <Form>
                  <div className="d-flex">
                    <Form.Check
                      type="radio"
                      id="donateOnce"
                      name="donationType"
                      label="Donate Once"
                      value="once"
                      checked={selectedDonationType === "once"}
                      onChange={(e) => setSelectedDonationType(e.target.value)}
                      className="mr-3 fw-medium"
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
                      className="mx-5 fw-medium"
                      style={{ fontSize: "20px" }}
                    />
                  </div>
                </Form>
              </Card.Body>
              <hr className="mx-4" />
              <Card className="mt-5 border-card">
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
                    className="w-50 py-2 border border-2 fs-4 fw-bolder"
                    style={{
                      backgroundColor: "#F15700",
                      border: "none",
                    }}
                    onClick={() => {
                      setSelectedAmount("custom");
                    }}
                  >
                    Custom Amount
                  </Button>

                  {selectedAmount === "custom" && (
                    <Form.Control
                      type="number"
                      placeholder="Enter custom amount"
                      className="mt-3 p-3"
                      style={{
                        marginBottom: "10.2rem",
                      }}
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
            <Card className="mb-4 mt-5 border-card">
              <Card.Header
                className="text-white p-3 rounded-3"
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
                    className="mb-2 fs-5 fw-medium"
                  />
                  <Form.Check
                    type="radio"
                    id="nriCitizen"
                    name="citizenship"
                    label="Indian Citizen (Not Residing in India - NRE, NRI, NRO)"
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
                          <Form.Label className="text-dark">Full Name*</Form.Label>
                          <Form.Control
                            className="p-3 ps-4 border border-2 rounded-3"
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleInputChange}
                            placeholder="Full Name"
                            required
                          />
                        </Col>
                        <Col md={6}>
                          <Form.Label className="text-dark">Mobile Number*</Form.Label>
                          <Form.Control
                            type="tel"
                            className="p-3 ps-4 border border-2 rounded-3"
                            name="mobile"
                            value={formData.mobile}
                            onChange={handleInputChange}
                            placeholder="Mobile Number"
                            required
                          />
                        </Col>
                      </Row>
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Row>
                        <Col md={6}>
                          <Form.Label className="text-dark">Email ID*</Form.Label>
                          <Form.Control
                            type="email"
                            name="email"
                            className="p-3 ps-4 border border-2 rounded-3"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="Email ID"
                            required
                          />
                        </Col>
                        <Col md={6}>
                          <Form.Label className="text-dark">Aadhar Card no.*</Form.Label>
                          <Form.Control
                            type="text"
                            name="aadharNumber"
                            className="p-3 ps-4 border border-2 rounded-3"
                            value={formData.aadharNumber}
                            onChange={handleInputChange}
                            placeholder="Aadhar Number"
                            required
                          />
                        </Col>
                      </Row>
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Row>
                        <Col md={6}>
                          <Form.Label className="text-dark">Pan card no*</Form.Label>
                          <Form.Control
                            type="text"
                            name="panNumber"
                            className="p-3 ps-4 border border-2 rounded-3"
                            value={formData.panNumber}
                            onChange={handleInputChange}
                            placeholder="Pan card no."
                            required
                          />
                        </Col>
                        <Col md={6}>
                          <Form.Label className="text-dark">City*</Form.Label>
                          <Form.Control
                            type="text"
                            name="city"
                            className="p-3 ps-4 border border-2 rounded-3"
                            value={formData.city}
                            onChange={handleInputChange}
                            placeholder="City"
                            required
                          />
                        </Col>
                      </Row>
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Row>
                        <Col md={12}>
                          <Form.Label className="text-dark">Selected Donation Amount</Form.Label>
                          <Form.Control
                            type="text"
                            className="p-3 ps-4 border border-2 rounded-3"
                            value={selectedAmount === "custom" ? `₹ ${customAmount}` : selectedAmount}
                            readOnly
                          />
                        </Col>
                      </Row>
                    </Form.Group>

                    <p className="text-dark mb-4 fs-4">
                      Please CHECK YOUR EMAIL FOR THE LOGIN CREDENTIALS AND LOGIN
                      DONATION RECEIPTS <br /> And Receipts.
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
                      className="w-50 py-2 fs-4 fw-bolder border-0"
                      style={{
                        backgroundColor: "#F15700",
                      }}
                      onClick={handleDonateNow}
                      disabled={loading}
                    >
                      {loading ? "Processing..." : "Donate Now"}
                    </Button>

                    {error && (
                      <div className="alert alert-danger mt-3" role="alert">
                        {error}
                      </div>
                    )}
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