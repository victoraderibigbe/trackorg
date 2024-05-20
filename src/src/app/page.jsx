const page = () => {
  return (
    <div className="p-4 mt-10 text-center">
      <h1 className="my-2 text-3xl font-bold md:text-5xl text-light-text dark:text-dark-text">
        Hello world, welcome to{" "}
        <span className="text-light-accent dark:text-dark-accent">
          TrackOrg
        </span>
      </h1>
      <p className="text-sm md:text-lg">
        Automate your organization's register/attendance system with ease.
      </p>
    </div>
  );
};

export default page;
