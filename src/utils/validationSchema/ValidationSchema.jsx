import * as Yup from "yup";

// Custom validation for mobile number (must start with 7, 8, or 9)
const mobileValidation = Yup.string()
  .required("Mobile number is required")
  .matches(
    /^[789][0-9]{9}$/,
    "Mobile number must start with 7, 8, or 9 and be 10 digits"
  );

// Custom validation for Aadhar number (must not start with 0 or 1)
const aadharValidation = Yup.string()
  .required("Aadhar number is required")
  .matches(
    /^[2-9][0-9]{11}$/,
    "Aadhar number must not start with 0 or 1 and must be 12 digits"
  );

// Yup validation schema for the donation form
export const donationFormValidationSchema = Yup.object().shape({
  fullName: Yup.string().required("Full Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  mobile: mobileValidation,
  aadharNumber: aadharValidation,
  panNumber: Yup.string()
    .matches(/^[A-Z]{3}[ABCFGHJPIL][A-Z][0-9]{4}[A-Z]$/, "Invalid PAN number")
    .required("PAN number is required"),
  city: Yup.string().required("City is required"),
});

// Yup validation schema for the contact form
export const contactFormValidationSchema = Yup.object().shape({
  name: Yup.string()
    .required("Full name is required")
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be less than 50 characters"),
  email: Yup.string()
    .required("Email is required")
    .email("Please enter a valid email"),
  phone: Yup.string()
    .matches(
      /^(\+?\d{1,3}[- ]?)?\d{10}$/,
      "Please enter a valid phone number (e.g., +91 9876543210 or 9876543210)"
    )
    .notRequired(),
  subject: Yup.string()
    .required("Subject is required")
    .oneOf(
      ["general", "membership", "events", "donations", "volunteer", "other"],
      "Please select a valid subject"
    ),
  message: Yup.string()
    .required("Message is required")
    .min(10, "Message must be at least 10 characters")
    .max(500, "Message must be less than 500 characters"),
});

// Yup validation schema for the join hands form
export const joinHandsValidationSchema = Yup.object().shape({
  name: Yup.string()
    .required("Full name is required")
    .min(4, "Name must be at least 4 characters")
    .max(50, "Name must be less than 50 characters")
    .matches(/^[a-zA-Z\s]+$/, "Name can only contain letters and spaces"),

  mobile: mobileValidation,

  email: Yup.string()
    .required("Email is required")
    .email("Please enter a valid email address"),

  address: Yup.string()
    .required("Address is required")
    .min(10, "Address must be at least 10 characters")
    .max(200, "Address must be less than 200 characters"),

  city: Yup.string()
    .required("City is required")
    .min(2, "City name must be at least 2 characters")
    .max(50, "City name must be less than 50 characters")
    .matches(/^[a-zA-Z\s]+$/, "City name can only contain letters and spaces"),

  services: Yup.object()
    .shape({
      donate: Yup.boolean(),
      volunteer: Yup.boolean(),
      csrActivity: Yup.boolean(),
      pledgeHours: Yup.boolean(),
      educate: Yup.boolean(),
      profession: Yup.boolean(),
      others: Yup.boolean(),
    })
    .test(
      "at-least-one-service",
      "Please select at least one service option",
      function (services) {
        return Object.values(services).some((value) => value === true);
      }
    ),

  othersText: Yup.string().when("services.others", {
    is: true,
    then: (schema) =>
      schema
        .required("Please specify your other service preference")
        .min(5, "Please provide more details (at least 5 characters)")
        .max(100, "Description must be less than 100 characters"),
    otherwise: (schema) => schema.notRequired(),
  }),
});
