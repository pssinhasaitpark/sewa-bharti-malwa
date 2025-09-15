// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchUserData } from '../../redux/slice/LoginSlice';
// import HeadImg from "../../../src/assets/icons/head-img.png";
// import boy from "../../../src/assets/icons/boy.png";
// import sign1 from "../../../src/assets/icons/sign1.png";
// import sign2 from "../../../src/assets/icons/sign2.png";
// import backgroundImage from "../../../src/assets/icons/receipt-bg.png";

// const DonationReceipt = () => {
//     const dispatch = useDispatch();
//     const { user, loading, error } = useSelector(state => state.auth);
//     const [formData, setFormData] = useState({
//         receiptNumber: 'SB/ONLINE/01',
//         date: '',
//         name: '',
//         address: '',
//         addressLine2: '',
//         mobile: '',
//         birthDate: '',
//         panAadhar: '',
//         donationAmount: '',
//         paymentMethod: '',
//         bank: '',
//         rupeeAmount: '',
//         groupLeader: '',
//         groupAddress: '',
//         groupPhone: ''
//     });

//     useEffect(() => {
//         dispatch(fetchUserData());
//         const today = new Date();
//         const formattedDate = today.toLocaleDateString('hi-IN');
//         setFormData(prev => ({ ...prev, date: formattedDate }));
//     }, [dispatch]);

//     useEffect(() => {
//         if (user) {
//             setFormData(prev => ({
//                 ...prev,
//                 name: user.full_name || '',
//                 mobile: user.phone || '',
//                 ...(user.donations && user.donations.length > 0 && {
//                     donationAmount: user.donations[0].amount?.toString() || '',
//                     rupeeAmount: user.donations[0].amount?.toString() || '',
//                     panAadhar: user.donations[0].panNumber || user.donations[0].aadharNumber || '',
//                     paymentMethod: user.donations[0].paymentId ? 'UPI' : ''
//                 })
//             }));
//         }
//     }, [user]);

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setFormData(prev => ({
//             ...prev,
//             [name]: value
//         }));
//     };

//     const handlePrint = () => {
//         window.print();
//     };

//     if (loading) {
//         return (
//             <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
//                 <div className="spinner-border text-primary" role="status">
//                     <span className="visually-hidden">Loading...</span>
//                 </div>
//             </div>
//         );
//     }

//     return (
//         <div
//             className="receipt-wrapper"
//             style={{
//                 backgroundImage: `url(${backgroundImage})`,
//                 backgroundSize: 'contain ',
//                 backgroundPosition: 'center',
//                 // backgroundRepeat: 'no-repeat',
//                 minHeight: '100vh',
//                 padding: '20px 0',
//                 fontFamily: '"Noto Sans Devanagari", "Mangal", sans-serif'
//             }}
//         >
//             <div className="container">
//                 <div className="row justify-content-center">
//                     <div className="col-12" style={{ maxWidth: '1500px' }}>
//                         <div
//                             className="card  border-0"
//                             style={{
//                                 backgroundColor: 'rgba(255, 255, 255, 0.85)',
//                                 backgroundImage: `url(${backgroundImage})`,
//                                 backgroundSize: 'cover',
//                                 backgroundRepeat: 'no-repeat',
//                                 backgroundPosition: 'center',
//                             }}
//                         >
//                             <div className="card-body p-4">
//                                 <div className="row">
//                                     {/* Left Section */}
//                                     <div className="col-lg-4 col-md-12 mb-4">
//                                         <div className="text-center">
//                                             <div style={{
//                                                 color: '#7d0604',
//                                                 fontSize: '3.2rem',
//                                                 fontWeight: '600',
//                                                 textDecoration: 'underline',
//                                                 marginBottom: '1rem'
//                                             }}>
//                                                 सहयोग निधि
//                                             </div>
//                                             <div style={{
//                                                 color: '#264473',
//                                                 fontSize: '2.8rem',
//                                                 fontWeight: '600',
//                                                 marginBottom: '2rem',
//                                                 lineHeight: '1.6'
//                                             }}>
//                                                 हम अवसर दे तो यह स्वाभिमानी बालक शिक्षित और स्वस्थ होकर सम्मान से जी सकेगा।
//                                             </div>
//                                             <img
//                                                 src={boy}
//                                                 alt="Child"
//                                                 className="img-fluid rounded"
//                                                 style={{ maxHeight: '250px' }}
//                                             />
//                                         </div>
//                                     </div>
//                                     {/* Right Section */}
//                                     <div className="col-lg-8 col-md-12">
//                                         {/* Header Image */}
//                                         <div className="text-center mb-4">
//                                             <img
//                                                 src={HeadImg}
//                                                 alt="Header"
//                                                 className="img-fluid rounded"
//                                             />
//                                         </div>
//                                         {/* Form Section */}
//                                         <div className="receipt-form">
//                                             <div className="row mb-3">
//                                                 <div className="col-md-6">
//                                                     <label className="fs-6">पावती क्र. </label>
//                                                     <span className="fw-bold  fs-4"> SB/ONLINE/ {formData.receiptNumber.split('/').pop()}</span>
//                                                 </div>
//                                                 <div className="col-md-6 text-start">
//                                                     <label className="form-label">दिनाक</label>
//                                                     <input
//                                                         type="text"
//                                                         name="date"
//                                                         value={formData.date}
//                                                         onChange={handleInputChange}
//                                                         className="form-control d-inline-block"
//                                                         style={{ width: '310px', borderBottom: '2px solid #dcb783', borderTop: 'none', borderLeft: 'none', borderRight: 'none', background: 'transparent' }}
//                                                     />
//                                                 </div>
//                                             </div>
//                                             <div className="row mb-3">
//                                                 <div className="col-12 d-flex">
//                                                     <label className="form-label">श्रीमान</label>
//                                                     <input
//                                                         type="text"
//                                                         name="name"
//                                                         value={formData.name}
//                                                         onChange={handleInputChange}
//                                                         className="form-control mx-2 fw-bold"
//                                                         style={{
//                                                             borderBottom: '2px solid #dcb783', borderTop: 'none', borderLeft: 'none',
//                                                             padding: '0px',
//                                                             borderRight: 'none', background: 'transparent'
//                                                         }}
//                                                     />
//                                                 </div>
//                                             </div>
//                                             <div className="row mb-3">
//                                                 <div className="col-12 d-flex">
//                                                     <label className="form-label ">पता</label>
//                                                     <input
//                                                         type="text"
//                                                         name="address"
//                                                         value={formData.address}
//                                                         onChange={handleInputChange}
//                                                         className="form-control mx-2 fw-bold"
//                                                         style={{
//                                                             borderBottom: '2px solid #dcb783', borderTop: 'none', borderLeft: 'none', borderRight: 'none',
//                                                             padding: '0px', background: 'transparent'
//                                                         }}
//                                                     />
//                                                 </div>
//                                             </div>
//                                             <div className="row mb-3">

//                                                 <div className="col-md-6 d-flex ">
//                                                     <label className="form-label">मोबाइल</label>
//                                                     <input
//                                                         type="text"
//                                                         name="mobile"
//                                                         value={formData.mobile}
//                                                         onChange={handleInputChange}
//                                                         className="form-control mx-2 fw-bold"
//                                                         style={{
//                                                             borderBottom: '2px solid #dcb783', borderTop: 'none', borderLeft: 'none', borderRight: 'none',
//                                                             padding: '0px', background: 'transparent'
//                                                         }}
//                                                     />
//                                                 </div>
//                                             </div>
//                                             <div className="row mb-3 align-items-center">
//                                                 <div className="col-md-6 d-flex align-items-center">
//                                                     <label className="form-label mb-0 me-2" style={{ whiteSpace: 'nowrap' }}>जन्म दिनाक</label>
//                                                     <input
//                                                         type="text"
//                                                         name="birthDate"
//                                                         value={formData.birthDate}
//                                                         onChange={handleInputChange}
//                                                         className="form-control flex-grow-1"
//                                                         style={{
//                                                             borderBottom: '2px solid #dcb783',
//                                                             borderTop: 'none',
//                                                             borderLeft: 'none',
//                                                             borderRight: 'none',
//                                                             background: 'transparent',
//                                                         }}
//                                                     />
//                                                 </div>
//                                                 <div className="col-md-6 d-flex align-items-center">
//                                                     <label className="form-label mb-0 me-2" style={{ whiteSpace: 'nowrap' }}>PAN No./ आधार क्रमांक</label>
//                                                     <input
//                                                         type="text"
//                                                         name="panAadhar"
//                                                         value={formData.panAadhar}
//                                                         onChange={handleInputChange}
//                                                         className="form-control flex-grow-1"
//                                                         style={{
//                                                             borderBottom: '2px solid #dcb783',
//                                                             borderTop: 'none',
//                                                             borderLeft: 'none',
//                                                             borderRight: 'none',
//                                                             background: 'transparent',
//                                                         }}
//                                                     />
//                                                 </div>
//                                             </div>

//                                             <div className="row mb-3">
//                                                 <div className="col-12 d-flex align-items-center">
//                                                     <label className="form-label mb-0 me-2" style={{ whiteSpace: 'nowrap' }}>
//                                                         से समर्पण निधि अक्षरी रु.
//                                                     </label>
//                                                     <input
//                                                         type="text"
//                                                         name="donationAmount"
//                                                         value={formData.donationAmount}
//                                                         onChange={handleInputChange}
//                                                         className="form-control flex-grow-1"
//                                                         style={{
//                                                             borderBottom: '2px solid #dcb783',
//                                                             borderTop: 'none',
//                                                             borderLeft: 'none',
//                                                             borderRight: 'none',
//                                                             background: 'transparent'
//                                                         }}
//                                                     />
//                                                 </div>
//                                             </div>

//                                             <div className="row mb-4">
//                                                 <div className="col-md-6 d-flex align-items-center">
//                                                     <label className="form-label mb-0 me-2" style={{ whiteSpace: 'nowrap' }}>
//                                                         नगद / चेक / UPI No.
//                                                     </label>
//                                                     <input
//                                                         type="text"
//                                                         name="paymentMethod"
//                                                         value={formData.paymentMethod}
//                                                         onChange={handleInputChange}
//                                                         className="form-control flex-grow-1"
//                                                         style={{
//                                                             borderBottom: '2px solid #dcb783',
//                                                             borderTop: 'none',
//                                                             borderLeft: 'none',
//                                                             borderRight: 'none',
//                                                             background: 'transparent'
//                                                         }}
//                                                     />
//                                                 </div>
//                                                 <div className="col-md-6 d-flex align-items-center">
//                                                     <label className="form-label mb-0 me-2" style={{ whiteSpace: 'nowrap' }}>
//                                                         बैंक
//                                                     </label>
//                                                     <div className="d-flex align-items-center" style={{ width: 'auto' }}>
//                                                         <input
//                                                             type="text"
//                                                             name="bank"
//                                                             value={formData.bank}
//                                                             onChange={handleInputChange}
//                                                             style={{
//                                                                 borderBottom: '2px solid #dcb783',
//                                                                 borderTop: 'none',
//                                                                 borderLeft: 'none',
//                                                                 borderRight: 'none',
//                                                                 background: 'transparent',
//                                                                 width: 'auto',
//                                                                 minWidth: '100px'
//                                                             }}
//                                                         />
//                                                         <span className="ms-2" style={{ whiteSpace: 'nowrap' }}>
//                                                             सधन्यवाद प्राप्त हुए |
//                                                         </span>
//                                                     </div>
//                                                 </div>

//                                             </div>

//                                             {/* Signatures Section */}
//                                             <div className="row mb-4">
//                                                 <div className="col-md-4">
//                                                     <div className="p-3 bg-white rounded border-2" style={{ borderColor: '#4f725a' }}>
//                                                         <label className="form-label fw-bold" style={{ color: '#380616' }}>रु.</label>
//                                                         <input
//                                                             type="text"
//                                                             name="rupeeAmount"
//                                                             value={formData.rupeeAmount}
//                                                             onChange={handleInputChange}
//                                                             className="form-control border-0 fs-4 fw-bold"
//                                                             style={{ background: 'transparent' }}
//                                                         />
//                                                     </div>
//                                                 </div>
//                                                 <div className="col-md-4 text-center">
//                                                     <img
//                                                         src={sign1}
//                                                         alt="Signature 1"
//                                                         className="img-fluid mb-2"
//                                                     />
//                                                     <div>
//                                                         <span style={{ color: '#7D0A0F', fontWeight: '600' }}>अध्यक्ष:</span> रवि भाटिया
//                                                     </div>
//                                                 </div>
//                                                 <div className="col-md-4 text-center">
//                                                     <img
//                                                         src={sign2}
//                                                         alt="Signature 2"
//                                                         className="img-fluid mb-2"
//                                                     />
//                                                     <div>
//                                                         <span style={{ color: '#7D0A0F', fontWeight: '600' }}>कोषाध्यक्ष:</span> राजेश खंडेलवाल
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                             {/* Group Information */}
//                                             <div className="d-flex justify-content-between mb-4">
//                                                 <div
//                                                     className="d-flex align-items-center p-2 rounded"
//                                                     style={{
//                                                         border: '2px solid black',
//                                                         backgroundColor: 'white',
//                                                         width: '30%'
//                                                     }}
//                                                 >
//                                                     <label className="mb-0 me-2" style={{ color: '#30156a', whiteSpace: 'nowrap', width: 'auto' }}>
//                                                         गट प्रमुख:
//                                                     </label>
//                                                     <input
//                                                         type="text"
//                                                         name="groupLeader"
//                                                         value={formData.groupLeader}
//                                                         onChange={handleInputChange}
//                                                         className="flex-grow-1"
//                                                         style={{
//                                                             border: 'none',
//                                                             background: 'transparent',
//                                                             outline: 'none',
//                                                             boxShadow: 'none',
//                                                             padding: '0.25rem'
//                                                         }}
//                                                     />
//                                                 </div>
//                                                 <div
//                                                     className="d-flex align-items-center p-2 rounded"
//                                                     style={{
//                                                         border: '2px solid black',
//                                                         backgroundColor: 'white',
//                                                         width: '30%'
//                                                     }}
//                                                 >
//                                                     <label className="mb-0 me-2" style={{ color: '#30156a', whiteSpace: 'nowrap', width: 'auto' }}>
//                                                         पता:
//                                                     </label>
//                                                     <input
//                                                         type="text"
//                                                         name="groupAddress"
//                                                         value={formData.groupAddress}
//                                                         onChange={handleInputChange}
//                                                         className="flex-grow-1"
//                                                         style={{
//                                                             border: 'none',
//                                                             background: 'transparent',
//                                                             outline: 'none',
//                                                             boxShadow: 'none',
//                                                             padding: '0.25rem'
//                                                         }}
//                                                     />
//                                                 </div>
//                                                 <div
//                                                     className="d-flex align-items-center p-2 rounded"
//                                                     style={{
//                                                         border: '2px solid black',
//                                                         backgroundColor: 'white',
//                                                         width: '30%'
//                                                     }}
//                                                 >
//                                                     <label className="mb-0 me-2" style={{ color: '#30156a', whiteSpace: 'nowrap', width: 'auto' }}>
//                                                         दूरभाष:
//                                                     </label>
//                                                     <input
//                                                         type="text"
//                                                         name="groupPhone"
//                                                         value={formData.groupPhone}
//                                                         onChange={handleInputChange}
//                                                         className="flex-grow-1"
//                                                         style={{
//                                                             border: 'none',
//                                                             background: 'transparent',
//                                                             outline: 'none',
//                                                             boxShadow: 'none',
//                                                             padding: '0.25rem'
//                                                         }}
//                                                     />
//                                                 </div>
//                                             </div>

//                                         </div>
//                                     </div>
//                                 </div>
//                                 {/* Footer */}
//                                 <div className="row mt-4">
//                                     <div className="col-12">
//                                         <div className="p-3 text-center" style={{ backgroundColor: '#f7b815' }}>
//                                             <div className="row">
//                                                 <div className="col-md-4">
//                                                     <div className="d-flex align-items-center justify-content-center">
//                                                         <img
//                                                             src="https://via.placeholder.com/20x20/000000/ffffff?text=@"
//                                                             alt="Mail"
//                                                             className="me-2"
//                                                         />
//                                                         <a href="mailto:sewabhartiindore@gmail.com" className="text-dark fw-bold">
//                                                             sewabhartiindore@gmail.com
//                                                         </a>
//                                                     </div>
//                                                 </div>
//                                                 <div className="col-md-4">
//                                                     <strong>PAN:</strong> AACTS5054L Old : F.No CIT-I/lndrTech/B0G/45/2011-12
//                                                 </div>
//                                                 <div className="col-md-4">
//                                                     1-4-2011 to till further order. CIT-I-INDORE
//                                                 </div>
//                                             </div>
//                                             <div className="row mt-2">
//                                                 <div className="col-12">
//                                                     <small>
//                                                         New : AACTS5054LF19960, 11-Clause (i) of First Provision to Sub-Section (5) of Section
//                                                         BOG, 24-09-2021 from AY 2022-23 to AY 2026-27
//                                                     </small>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 {/* Print Button */}
//                                 <div className="row mt-3">
//                                     <div className="col-12 text-center">
//                                         <button
//                                             onClick={handlePrint}
//                                             className="btn btn-primary btn-lg px-5"
//                                             style={{ backgroundColor: '#4f725a', borderColor: '#4f725a' }}
//                                         >
//                                             प्रिंट करें
//                                         </button>
//                                     </div>
//                                 </div>
//                                 {/* User Data Display (for debugging) */}
//                                 {user && user.donations && user.donations.length > 0 && (
//                                     <div className="row mt-4">
//                                         <div className="col-12">
//                                             <div className="alert alert-info">
//                                                 <h6>पिछला दान विवरण:</h6>
//                                                 <small>
//                                                     राशि: ₹{user.donations[0].amount} |
//                                                     भुगतान ID: {user.donations[0].paymentId} |
//                                                     स्थिति: {user.donations[0].paymentStatus} |
//                                                     दिनांक: {new Date(user.donations[0].createdAt).toLocaleDateString('hi-IN')}
//                                                 </small>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 )}
//                                 {error && (
//                                     <div className="row mt-3">
//                                         <div className="col-12">
//                                             <div className="alert alert-danger">
//                                                 त्रुटि: {error}
//                                             </div>
//                                         </div>
//                                     </div>
//                                 )}
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <style>{`
//                 @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Devanagari:wght@400;600;700&display=swap');
//                 .receipt-wrapper {
//                     font-family: "Noto Sans Devanagari", "Mangal", sans-serif !important;
//                 }
//                 .form-control:focus {
//                     box-shadow: none;
//                     border-color: #dcb783;
//                 }
//                 @media print {
//                     .btn, .alert {
//                         display: none !important;
//                     }
//                     .card {
//                         border: none !important;
//                         box-shadow: none !important;
//                         background: white !important;
//                     }
//                     body {
//                         background: white !important;
//                     }
//                     .receipt-wrapper {
//                         background: white !important;
//                         padding: 0 !important;
//                     }
//                 }
//                 @media (max-width: 767px) {
//                     .receipt-wrapper {
//                         padding: 10px;
//                     }
//                     .form-control {
//                         margin-bottom: 0.5rem;
//                     }
//                 }
//             `}</style>
//         </div>
//     );
// };

// export default DonationReceipt;

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserData } from "../../redux/slice/LoginSlice";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import HeadImg from "../../../src/assets/icons/head-img.png";
import boy from "../../../src/assets/icons/boy.png";
import sign1 from "../../../src/assets/icons/sign1.png";
import sign2 from "../../../src/assets/icons/sign2.png";
import Mail from "../../../src/assets/icons/mail-icon.png";
import backgroundImage from "../../../src/assets/icons/receipt-bg.png";

const DonationReceipt = () => {
  const dispatch = useDispatch();
  const { user, loading, error } = useSelector((state) => state.auth);
  const [formData, setFormData] = useState({
    receiptNumber: "SB/ONLINE/01",
    date: "",
    name: "",
    address: "",
    addressLine2: "",
    mobile: "",
    birthDate: "",
    panAadhar: "",
    donationAmount: "",
    paymentMethod: "",
    bank: "",
    rupeeAmount: "",
    groupLeader: "",
    groupAddress: "",
    groupPhone: "",
  });

  useEffect(() => {
    dispatch(fetchUserData());
    const today = new Date();
    const formattedDate = today.toLocaleDateString("hi-IN");
    setFormData((prev) => ({ ...prev, date: formattedDate }));
  }, [dispatch]);

  useEffect(() => {
    if (user) {
      const latestDonation =
        user.donations && user.donations.length > 0
          ? user.donations[user.donations.length - 1]
          : null;

      setFormData((prev) => ({
        ...prev,
        name: user.full_name || "",
        receiptNumber: latestDonation
          ? latestDonation.receiptNo || "SB/ONLINE/01"
          : "SB/ONLINE/01",
        mobile: user.phone || "",
        address: latestDonation ? latestDonation.city || "" : "",
        ...(latestDonation && {
          donationAmount: latestDonation.amount?.toString() || "",
          rupeeAmount: latestDonation.amount?.toString() || "",
          panAadhar:
            latestDonation.panNumber || latestDonation.aadharNumber || "",
          paymentMethod: latestDonation.paymentId ? "UPI" : "",
        }),
      }));
    }
  }, [user]);

  const handleDownloadPDF = async () => {
    const element = document.querySelector(".receipt-card");
    if (!element) return;

    const canvas = await html2canvas(element, {
      scale: 2,
      logging: false,
      useCORS: true,
      allowTaint: true,
    });

    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");
    const imgWidth = 210;
    const pageHeight = 295;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    let heightLeft = imgHeight;
    let position = 0;

    pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;

    while (heightLeft >= 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
    }

    pdf.save("donation-receipt.pdf");
  };

  if (loading) {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div
      className="receipt-wrapper"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "contain",
        backgroundPosition: "center",
        minHeight: "100vh",
        padding: "20px 0",
        fontFamily: '"Noto Sans Devanagari", "Mangal", sans-serif',
      }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12" style={{ maxWidth: "1500px" }}>
            {/* Only this card will be included in the PDF */}
            <div
              className="card border-0 receipt-card"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.85)",
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              <div className="card-body p-4">
                <div className="row">
                  {/* Left Section */}
                  <div className="col-lg-4 col-md-12 mb-4">
                    <div className="text-center">
                      <div
                        style={{
                          color: "#7d0604",
                          fontSize: "3.2rem",
                          fontWeight: "600",
                          textDecoration: "underline",
                          marginBottom: "1rem",
                        }}
                      >
                        सहयोग निधि
                      </div>
                      <div
                        style={{
                          color: "#264473",
                          fontSize: "2.8rem",
                          fontWeight: "600",
                          marginBottom: "2rem",
                          lineHeight: "1.6",
                        }}
                      >
                        हम अवसर दे तो यह स्वाभिमानी बालक शिक्षित और स्वस्थ होकर
                        सम्मान से जी सकेगा।
                      </div>
                      <img
                        src={boy}
                        alt="Child"
                        className="img-fluid rounded"
                        style={{ maxHeight: "300px" }}
                      />
                    </div>
                  </div>
                  {/* Right Section */}
                  <div className="col-lg-8 col-md-12">
                    {/* Header Image */}
                    <div className="text-center mb-4">
                      <img
                        src={HeadImg}
                        alt="Header"
                        className="img-fluid rounded"
                      />
                    </div>
                    {/* Form Section */}
                    <div className="receipt-form">
                      <div className="row mb-3">
                        <div className="col-md-6">
                          <label className="fs-6">पावती क्र. </label>
                          <span className="fw-bold fs-4">
                            {formData.receiptNumber}
                          </span>
                        </div>
                        <div className="col-md-6 text-start">
                          <label className="form-label">दिनाक</label>
                          <input
                            type="text"
                            name="date"
                            value={formData.date}
                            readOnly
                            className="form-control d-inline-block"
                            style={{
                              width: "310px",
                              borderBottom: "2px solid #dcb783",
                              borderTop: "none",
                              borderLeft: "none",
                              borderRight: "none",
                              background: "transparent",
                            }}
                          />
                        </div>
                      </div>
                      <div className="row mb-3">
                        <div className="col-12 d-flex">
                          <label className="form-label">श्रीमान</label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            readOnly
                            className="form-control mx-2 fw-bold"
                            style={{
                              borderBottom: "2px solid #dcb783",
                              borderTop: "none",
                              borderLeft: "none",
                              padding: "0px",
                              borderRight: "none",
                              background: "transparent",
                            }}
                          />
                        </div>
                      </div>
                      <div className="row mb-3">
                        <div className="col-12 d-flex">
                          <label className="form-label ">पता</label>
                          <input
                            type="text"
                            name="address"
                            value={formData.address}
                            readOnly
                            className="form-control mx-2 fw-bold"
                            style={{
                              borderBottom: "2px solid #dcb783",
                              borderTop: "none",
                              borderLeft: "none",
                              borderRight: "none",
                              padding: "0px",
                              background: "transparent",
                            }}
                          />
                        </div>
                      </div>
                      <div className="row mb-3">
                        <div className="col-md-6 d-flex ">
                          <label className="form-label">मोबाइल</label>
                          <input
                            type="text"
                            name="mobile"
                            value={formData.mobile}
                            readOnly
                            className="form-control mx-2 fw-bold"
                            style={{
                              borderBottom: "2px solid #dcb783",
                              borderTop: "none",
                              borderLeft: "none",
                              borderRight: "none",
                              padding: "0px",
                              background: "transparent",
                            }}
                          />
                        </div>
                      </div>
                      <div className="row mb-3 align-items-center">
                        <div className="col-md-6 d-flex align-items-center">
                          <label
                            className="form-label mb-0 me-2"
                            style={{ whiteSpace: "nowrap" }}
                          >
                            जन्म दिनाक
                          </label>
                          <input
                            type="text"
                            name="birthDate"
                            value={formData.birthDate}
                            readOnly
                            className="form-control flex-grow-1"
                            style={{
                              borderBottom: "2px solid #dcb783",
                              borderTop: "none",
                              borderLeft: "none",
                              borderRight: "none",
                              background: "transparent",
                            }}
                          />
                        </div>
                        <div className="col-md-6 d-flex align-items-center">
                          <label
                            className="form-label mb-0 me-2"
                            style={{ whiteSpace: "nowrap" }}
                          >
                            PAN No./ आधार क्रमांक
                          </label>
                          <input
                            type="text"
                            name="panAadhar"
                            value={formData.panAadhar}
                            readOnly
                            className="form-control flex-grow-1"
                            style={{
                              borderBottom: "2px solid #dcb783",
                              borderTop: "none",
                              borderLeft: "none",
                              borderRight: "none",
                              background: "transparent",
                            }}
                          />
                        </div>
                      </div>
                      <div className="row mb-3">
                        <div className="col-12 d-flex align-items-center">
                          <label
                            className="form-label mb-0 me-2"
                            style={{ whiteSpace: "nowrap" }}
                          >
                            से समर्पण निधि अक्षरी रु.
                          </label>
                          <input
                            type="text"
                            name="donationAmount"
                            value={formData.donationAmount}
                            readOnly
                            className="form-control flex-grow-1"
                            style={{
                              borderBottom: "2px solid #dcb783",
                              borderTop: "none",
                              borderLeft: "none",
                              borderRight: "none",
                              background: "transparent",
                            }}
                          />
                        </div>
                      </div>
                      <div className="row mb-4">
                        <div className="col-md-6 d-flex align-items-center">
                          <label
                            className="form-label mb-0 me-2"
                            style={{ whiteSpace: "nowrap" }}
                          >
                            नगद / चेक / UPI No.
                          </label>
                          <input
                            type="text"
                            name="paymentMethod"
                            value={formData.paymentMethod}
                            readOnly
                            className="form-control flex-grow-1"
                            style={{
                              borderBottom: "2px solid #dcb783",
                              borderTop: "none",
                              borderLeft: "none",
                              borderRight: "none",
                              background: "transparent",
                            }}
                          />
                        </div>
                        <div className="col-md-6 d-flex align-items-center">
                          <label
                            className="form-label mb-0 me-2"
                            style={{ whiteSpace: "nowrap" }}
                          >
                            बैंक
                          </label>
                          <div
                            className="d-flex align-items-center"
                            style={{ width: "auto" }}
                          >
                            <input
                              type="text"
                              name="bank"
                              value={formData.bank}
                              readOnly
                              style={{
                                borderBottom: "2px solid #dcb783",
                                borderTop: "none",
                                borderLeft: "none",
                                borderRight: "none",
                                background: "transparent",
                                width: "auto",
                                minWidth: "100px",
                              }}
                            />
                            <span
                              className="ms-2"
                              style={{ whiteSpace: "nowrap" }}
                            >
                              सधन्यवाद प्राप्त हुए |
                            </span>
                          </div>
                        </div>
                      </div>
                      {/* Signatures Section */}
                      <div className="row mb-4">
                        <div className="col-md-4">
                          <div
                            className="p-3 bg-white rounded border-2"
                            style={{ borderColor: "#4f725a" }}
                          >
                            <label
                              className="form-label fw-bold"
                              style={{ color: "#380616" }}
                            >
                              रु.
                            </label>
                            <input
                              type="text"
                              name="rupeeAmount"
                              value={formData.rupeeAmount}
                              readOnly
                              className="form-control border-0 fs-4 fw-bold"
                              style={{ background: "transparent" }}
                            />
                          </div>
                        </div>
                        <div className="col-md-4 text-center">
                          <img
                            src={sign1}
                            alt="Signature 1"
                            className="img-fluid mb-2"
                          />
                          <div>
                            <span
                              style={{ color: "#7D0A0F", fontWeight: "600" }}
                            >
                              अध्यक्ष:
                            </span>{" "}
                            रवि भाटिया
                          </div>
                        </div>
                        <div className="col-md-4 text-center">
                          <img
                            src={sign2}
                            alt="Signature 2"
                            className="img-fluid mb-2"
                          />
                          <div>
                            <span
                              style={{ color: "#7D0A0F", fontWeight: "600" }}
                            >
                              कोषाध्यक्ष:
                            </span>{" "}
                            राजेश खंडेलवाल
                          </div>
                        </div>
                      </div>
                      {/* Group Information */}
                      <div className="d-flex justify-content-between mb-4">
                        <div
                          className="d-flex align-items-center p-2 rounded"
                          style={{
                            border: "2px solid black",
                            backgroundColor: "white",
                            width: "30%",
                          }}
                        >
                          <label
                            className="mb-0 me-2"
                            style={{
                              color: "#30156a",
                              whiteSpace: "nowrap",
                              width: "auto",
                            }}
                          >
                            गट प्रमुख:
                          </label>
                          <input
                            type="text"
                            name="groupLeader"
                            value={formData.groupLeader}
                            readOnly
                            className="flex-grow-1"
                            style={{
                              border: "none",
                              background: "transparent",
                              outline: "none",
                              boxShadow: "none",
                              padding: "0.25rem",
                            }}
                          />
                        </div>
                        <div
                          className="d-flex align-items-center p-2 rounded"
                          style={{
                            border: "2px solid black",
                            backgroundColor: "white",
                            width: "30%",
                          }}
                        >
                          <label
                            className="mb-0 me-2"
                            style={{
                              color: "#30156a",
                              whiteSpace: "nowrap",
                              width: "auto",
                            }}
                          >
                            पता:
                          </label>
                          <input
                            type="text"
                            name="groupAddress"
                            value={formData.groupAddress}
                            readOnly
                            className="flex-grow-1"
                            style={{
                              border: "none",
                              background: "transparent",
                              outline: "none",
                              boxShadow: "none",
                              padding: "0.25rem",
                            }}
                          />
                        </div>
                        <div
                          className="d-flex align-items-center p-2 rounded"
                          style={{
                            border: "2px solid black",
                            backgroundColor: "white",
                            width: "30%",
                          }}
                        >
                          <label
                            className="mb-0 me-2"
                            style={{
                              color: "#30156a",
                              whiteSpace: "nowrap",
                              width: "auto",
                            }}
                          >
                            दूरभाष:
                          </label>
                          <input
                            type="text"
                            name="groupPhone"
                            value={formData.groupPhone}
                            readOnly
                            className="flex-grow-1"
                            style={{
                              border: "none",
                              background: "transparent",
                              outline: "none",
                              boxShadow: "none",
                              padding: "0.25rem",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Footer */}
                <div className="row mt-4">
                  <div className="col-12">
                    <div
                      className="p-3 text-center"
                      style={{ backgroundColor: "#f7b815" }}
                    >
                      <div className="row">
                        <div className="col-md-4">
                          <div className="d-flex align-items-center justify-content-start w-25 ">
                            <img src={Mail} alt="Mail" className="me-2 w-25" />
                            <a
                              href="mailto:sewabhartiindore@gmail.com"
                              className="text-dark fw-bold"
                            >
                              sewabhartiindore@gmail.com
                            </a>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <strong>PAN:</strong> AACTS5054L Old : F.No
                          CIT-I/lndrTech/B0G/45/2011-12
                        </div>
                        <div className="col-md-4">
                          1-4-2011 to till further order. CIT-I-INDORE
                        </div>
                      </div>
                      <div className="row mt-2">
                        <div className="col-12">
                          <small>
                            New : AACTS5054LF19960, 11-Clause (i) of First
                            Provision to Sub-Section (5) of Section BOG,
                            24-09-2021 from AY 2022-23 to AY 2026-27
                          </small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Print and PDF Buttons (not included in PDF) */}
            <div className="row mt-3 no-print">
              <div className="col-12 text-center">
                <button
                  onClick={handleDownloadPDF}
                  className="btn btn-success btn-lg px-5"
                  style={{ backgroundColor: "#28a745", borderColor: "#28a745" }}
                >
                  PDF डाउनलोड करें
                </button>
              </div>
            </div>
            {/* User Data Display (for debugging, not included in PDF) */}
            {user && user.donations && user.donations.length > 0 && (
              <div className="row mt-4 no-print">
                <div className="col-12">
                  <div className="alert alert-info">
                    <h6>पिछला दान विवरण:</h6>
                    <small>
                      राशि: ₹{user.donations[user.donations.length - 1].amount}{" "}
                      | भुगतान ID:{" "}
                      {user.donations[user.donations.length - 1].paymentId} |
                      स्थिति:{" "}
                      {user.donations[user.donations.length - 1].paymentStatus}{" "}
                      | दिनांक:{" "}
                      {new Date(
                        user.donations[user.donations.length - 1].createdAt
                      ).toLocaleDateString("hi-IN")}
                    </small>
                  </div>
                </div>
              </div>
            )}
            {error && (
              <div className="row mt-3 no-print">
                <div className="col-12">
                  <div className="alert alert-danger">त्रुटि: {error}</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Devanagari:wght@400;600;700&display=swap');
                .receipt-wrapper {
                    font-family: "Noto Sans Devanagari", "Mangal", sans-serif !important;
                }
                .form-control:focus {
                    box-shadow: none;
                    border-color: #dcb783;
                }
                @media print {
                    .no-print {
                        display: none !important;
                    }
                    .card {
                        border: none !important;
                        box-shadow: none !important;
                        background: white !important;
                    }
                    body {
                        background: white !important;
                    }
                    .receipt-wrapper {
                        background: white !important;
                        padding: 0 !important;
                    }
                    img {
                        max-width: 100% !important;
                        height: auto !important;
                    }
                }
                @media (max-width: 767px) {
                    .receipt-wrapper {
                        padding: 10px;
                    }
                    .form-control {
                        margin-bottom: 0.5rem;
                    }
                }
            `}</style>
    </div>
  );
};

export default DonationReceipt;
