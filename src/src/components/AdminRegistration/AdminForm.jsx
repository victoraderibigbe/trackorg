"use client";

import { Form, Formik } from "formik";
import { useState } from "react";
import OrgInfo from "./OrgInfo";
import PersonalInfo from "./PersonalInfo";
import { adminFormValidation } from "@/utils/validations/validationSchema";

const initialValues = {
  organizationName: "",
  subdomain: "",
  firstName: "",
  lastName: "",
  phoneNumber: "",
  role: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const AdminForm = () => {
  const [step, setStep] = useState(0);

  const steps = [<OrgInfo />, <PersonalInfo />];

  const isLastStep = step === steps.length - 1;

  const handleNext = (values) => {
    if (isLastStep) {
      console.log("Form submitted", values);
      return;
    }
    setStep(step + 1);
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={adminFormValidation[step]}
      onSubmit={handleNext}
    >
      {({ values }) => (
        <Form className="w-full">
          {steps[step]}
          <div
            className={`${
              step > 0 && "flex items-center justify-between gap-3"
            }`}
          >
            {step > 0 && (
              <button
                type="button"
                className="form-prev-btn"
                onClick={handlePrevious}
              >
                Previous
              </button>
            )}
            <button type="submit" className="form-btn">
              {isLastStep ? "Submit" : "Next"}
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default AdminForm;
