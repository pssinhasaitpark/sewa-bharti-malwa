// DonationDashboard.js
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUserData } from "../../redux/slice/LoginSlice";
import { useNavigate } from "react-router-dom";
import { Table, Container, Button } from "react-bootstrap";
import "./DonationDashboard.css";

const DonationDashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, token } = useSelector((state) => state.auth);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (!user && token) {
      dispatch(fetchUserData());
    }
  }, [dispatch, user, token]);

  if (!user) {
    return <div>Loading...</div>;
  }

  const handleDownloadReceipt = (donation) => {
    navigate("/donation-receipt", { state: { donation } });
  };
  return (
    <Container className="donation-dashboard-container">
      <div className="welcome-text">
        Welcome, <strong>{user.full_name}</strong>
      </div>
      <div className="dashboard-header">
        <h2>MY TRANSACTION</h2>
        <div className="action-buttons">
          <Button
            variant="danger"
            className="action-button"
            onClick={() => navigate("/donation")}
          >
            DONATION
          </Button>
          <Button variant="warning" className="action-button">
            CARE A CHILD
          </Button>
        </div>
      </div>
      <div className="donation-table-wrapper">
        <Table striped bordered hover className="donation-table">
          <thead>
            <tr>
              <th>Serial No.</th>
              <th>Name</th>
              <th>Amount</th>
              <th>City</th>
              <th>Yojana</th>
              <th>Download Receipt</th>
            </tr>
          </thead>
          <tbody>
            {user.donations?.map((donation, index) => (
              <tr key={donation._id}>
                <td>{index + 1}</td>
                <td>{user.full_name}</td>
                <td>{donation.amount}</td>
                <td>{donation.city}</td>
                <td>Online+Donation</td>
                <td>
                  <Button
                    variant="link"
                    onClick={() => handleDownloadReceipt(donation)}
                    className="download-receipt p-0"
                  >
                    📥
                  </Button>
                </td>
              </tr>
            ))}
            <tr>
              <td colSpan="2">
                <strong>Total amount till date</strong>
              </td>
              <td colSpan="4">
                <strong>
                  {user.donations?.reduce(
                    (sum, donation) => sum + donation.amount,
                    0
                  )}
                </strong>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </Container>
  );
};

export default DonationDashboard;
