import { useFormikContext } from "formik";
import { useState } from "react";
import { VscEye, VscEyeClosed } from "react-icons/vsc";

const PersonalInfo = () => {
  const [passwordType, setPasswordType] = useState("password");
  const [confirmPasswordType, setConfirmPasswordType] = useState("password");
  const [passwordPlaceholder, setPasswordPlaceholder] = useState("••••••••••");
  const [confirmPasswordPlaceholder, setConfirmPasswordPlaceholder] =
    useState("••••••••••");
  const [passwordIcon, setPasswordIcon] = useState(
    <VscEyeClosed size={25} color="#6B7280" className="absolute mr-10" />
  );
  const [confirmPasswordIcon, setConfirmPasswordIcon] = useState(
    <VscEyeClosed size={25} color="#6B7280" className="absolute mr-10" />
  );

  const handlePasswordToggle = () => {
    setPasswordType((prevType) =>
      prevType === "password" ? "text" : "password"
    );
    setPasswordPlaceholder((prevPlaceholder) =>
      prevPlaceholder === "••••••••••" ? "Enter your password" : "••••••••••"
    );
    setPasswordIcon((prevIcon) =>
      prevIcon.type === VscEyeClosed ? (
        <VscEye size={25} color="#6B7280" className="absolute mr-10" />
      ) : (
        <VscEyeClosed size={25} color="#6B7280" className="absolute mr-10" />
      )
    );
  };

  const handleConfirmPasswordToggle = () => {
    setConfirmPasswordType((prevType) =>
      prevType === "password" ? "text" : "password"
    );
    setConfirmPasswordPlaceholder((prevPlaceholder) =>
      prevPlaceholder === "••••••••••" ? "Enter your password" : "••••••••••"
    );
    setConfirmPasswordIcon((prevIcon) =>
      prevIcon.type === VscEyeClosed ? (
        <VscEye size={25} color="#6B7280" className="absolute mr-10" />
      ) : (
        <VscEyeClosed size={25} color="#6B7280" className="absolute mr-10" />
      )
    );
  };

  const { values, handleChange, handleBlur, touched, errors } =
    useFormikContext();

  return (
    <div>
      <h3 className="text-light-text dark:text-dark-text">Personal</h3>
      <h4 className="mb-5 text-light-accent dark:text-dark-accent">
        Information
      </h4>

      <div class="mb-3 md:flex items-center justify-between gap-3">
        <div className="w-full mb-3 md:mb-0">
          <label htmlFor="firstName" class="form-label">
            First Name
          </label>
          <input
            type="text"
            placeholder="Enter your first name"
            className={`${
              touched.firstName && errors.firstName
                ? "invalid-input"
                : "valid-input"
            }`}
            name="firstName"
            value={values.firstName}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.firstName && errors.firstName ? (
            <small className="text-alert">{errors.firstName}</small>
          ) : null}
        </div>
        <div className="w-full">
          <label htmlFor="lastName" class="form-label">
            Last Name
          </label>
          <input
            type="text"
            placeholder="Enter your last name"
            className={`${
              touched.lastName && errors.lastName
                ? "invalid-input"
                : "valid-input"
            }`}
            name="lastName"
            value={values.lastName}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.lastName && errors.lastName ? (
            <small className="text-alert">{errors.lastName}</small>
          ) : null}
        </div>
      </div>

      <div class="mb-3 md:flex items-center justify-between gap-3">
        <div className="w-full mb-3 md:mb-0">
          <label htmlFor="phoneNumber" class="form-label">
            Phone Number
          </label>
          <input
            type="text"
            placeholder="Enter your phone number"
            className={`${
              touched.phoneNumber && errors.phoneNumber
                ? "invalid-input"
                : "valid-input"
            }`}
            name="phoneNumber"
            value={values.phoneNumber}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.phoneNumber && errors.phoneNumber ? (
            <small className="text-alert">{errors.phoneNumber}</small>
          ) : null}
        </div>
        <div className="w-full">
          <label htmlFor="role" class="form-label">
            Role
          </label>
          <input
            type="text"
            placeholder="Enter your role in the organization"
            className={`${
              touched.role && errors.role ? "invalid-input" : "valid-input"
            }`}
            name="role"
            value={values.role}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.role && errors.role ? (
            <small className="text-alert">{errors.role}</small>
          ) : null}
        </div>
      </div>

      <div class="mb-3 md:flex items-center justify-between gap-3">
        <div className="w-full mb-3 md:mb-0">
          <label htmlFor="username" class="form-label">
            Username
          </label>
          <input
            type="text"
            placeholder="Enter your username"
            className={`${
              touched.username && errors.username
                ? "invalid-input"
                : "valid-input"
            }`}
            name="username"
            value={values.username}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.username && errors.username ? (
            <small className="text-alert">{errors.username}</small>
          ) : null}
        </div>
        <div className="w-full">
          <label htmlFor="email" class="form-label">
            Email
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            className={`${
              touched.email && errors.email ? "invalid-input" : "valid-input"
            }`}
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.email && errors.email ? (
            <small className="text-alert">{errors.email}</small>
          ) : null}
        </div>
      </div>

      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <div className="flex">
          <input
            type={passwordType}
            placeholder={passwordPlaceholder}
            className={`${
              touched.password && errors.password
                ? "invalid-input"
                : "valid-input"
            }`}
            name="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            style={{ fontSize: "1rem" }}
          />
          <span
            className="flex items-center justify-around hover:cursor-pointer"
            onClick={handlePasswordToggle}
          >
            {passwordIcon}
          </span>
        </div>
        {touched.password && errors.password ? (
          <small className="text-red-600">{errors.password}</small>
        ) : null}
      </div>

      <div className="mb-3">
        <label htmlFor="confirmPassword" className="form-label">
          Confirm Password
        </label>
        <div className="flex">
          <input
            type={confirmPasswordType}
            placeholder={confirmPasswordPlaceholder}
            className={`${
              touched.confirmPassword && errors.confirmPassword
                ? "invalid-input"
                : "valid-input"
            }`}
            name="confirmPassword"
            value={values.confirmPassword}
            onChange={handleChange}
            onBlur={handleBlur}
            style={{ fontSize: "1rem" }}
          />
          <span
            className="flex items-center justify-around hover:cursor-pointer"
            onClick={handleConfirmPasswordToggle}
          >
            {confirmPasswordIcon}
          </span>
        </div>
        {touched.confirmPassword && errors.confirmPassword ? (
          <small className="text-red-600">{errors.confirmPassword}</small>
        ) : null}
      </div>
    </div>
  );
};

export default PersonalInfo;
