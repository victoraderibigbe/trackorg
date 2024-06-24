"use client";

import { Form, Formik } from "formik";
import { useState } from "react";
import OrgInfo from "./OrgInfo";
import PersonalInfo from "./PersonalInfo";
import { adminFormValidation } from "@/utils/validations/validationSchema";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { Spinner } from "flowbite-react";

const initialValues = {
  organizationName: "",
  subdomain: "",
  firstName: "",
  lastName: "",
  phoneNumber: "",
  role: "",
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const AdminRegisterForm = () => {
  const [step, setStep] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const steps = [
    <OrgInfo key="orgInfo" />,
    <PersonalInfo key="personalInfo" />,
  ];

  const isLastStep = step === steps.length - 1;

  const router = useRouter();

  const handleNext = (values) => {
    delete values.confirmPassword;

    if (isLastStep) {
      setIsLoading(true);
      const register = async () => {
        try {
          const res = await axios.post("/api/admin/register", values);
          setIsLoading(false);

          if (res.data.status !== 200) {
            toast.error(res.data.message);
            return;
          }

          toast.success(res.data.message);

          setTimeout(() => {
            router.push("/admin/login");
          }, 2000);
        } catch (error) {
          setIsLoading(false);
          toast.error("Internal Server Error");
        }
      };

      register();

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
      {
        <Form>
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
            <button
              type="submit"
              className={`${isLoading ? "form-btn-disabled" : "form-btn"}`}
              disabled={isLoading}
            >
              {isLoading ? (
                <div>
                  <Spinner size="sm" />
                  <span className="ml-2">
                    {isLastStep ? "Submitting..." : "Saving..."}
                  </span>
                </div>
              ) : (
                <span>{isLastStep ? "Submit" : "Next"}</span>
              )}
            </button>
          </div>
        </Form>
      }
    </Formik>
  );
};

export default AdminRegisterForm;
