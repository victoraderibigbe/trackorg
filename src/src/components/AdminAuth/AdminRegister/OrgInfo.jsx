import { useFormikContext } from "formik";

const OrgInfo = () => {
  const { values, handleChange, handleBlur, touched, errors } =
    useFormikContext();

  return (
    <div>
      <h3 className="text-light-text dark:text-dark-text">Organization</h3>
      <h4 className="mb-5 text-light-accent dark:text-dark-accent">
        Information
      </h4>

      <div className="mb-5">
        <label htmlFor="organizationName" className="form-label">
          Organization Name
        </label>
        <input
          type="text"
          placeholder="Enter the name of your organization"
          className={`${
            touched.organizationName && errors.organizationName
              ? "invalid-input"
              : "valid-input"
          }`}
          name="organizationName"
          value={values.organizationName}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.organizationName && errors.organizationName ? (
          <small className="text-alert">{errors.organizationName}</small>
        ) : null}
      </div>

      <div className="mb-5">
        <label htmlFor="subdomain" className="form-label">
          Preferred Subdomain
        </label>
        <input
          type="text"
          placeholder="zion.trackorg.org"
          className={`${
            touched.subdomain && errors.subdomain
              ? "invalid-input"
              : "valid-input"
          }`}
          name="subdomain"
          value={values.subdomain}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.subdomain && errors.subdomain ? (
          <small className="text-alert">{errors.subdomain}</small>
        ) : null}
      </div>
    </div>
  );
};

export default OrgInfo;
