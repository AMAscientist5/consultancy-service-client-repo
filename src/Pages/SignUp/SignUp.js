import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
      })
      .catch((e) => console.error(e));
  };

  return (
    <div className="sm:w-3/4 md:w-2/4 lg:w-1/4 mx-auto w-full max-w-md p-4 rounded-md shadow sm:p-8 dark:bg-gray-900 dark:text-gray-100">
      <div className="mb-2 text-center">
        <h1 className="my-3 text-4xl font-bold">Sign Up</h1>
        <p className="text-sm dark:text-gray-400">Create A new Account</p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="space-y-12 ng-untouched ng-pristine ng-valid"
      >
        <div className="space-y-4 text-start">
          <div>
            <label htmlFor="name" className="mb-2 text-sm">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Full Name"
              required
              className=" w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
            />
          </div>

          <div>
            <label htmlFor="email" className="mb-2 text-sm">
              Email address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="name@eamil.com"
              required
              className="text-white w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
            />
          </div>

          <div>
            <label htmlFor="password" className="mb-2 text-sm">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="password"
              required
              className="text-white w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
            />
          </div>
        </div>

        <div className="mt-2">
          <p className="px-6 mb-0 text-sm text-center dark:text-gray-400">
            Already have an account?
            <Link
              to="/login"
              rel="noopener noreferrer"
              className="ml-2 hover:underline dark:text-violet-400"
            >
              Please Login
            </Link>
          </p>
        </div>
        <button
          type="submit"
          className="mt-3 w-full px-8 py-1 font-bold rounded-md bg-cyan-600  text-black"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
