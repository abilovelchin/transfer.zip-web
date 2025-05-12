import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { login, register } from "../Api";
import { sleep } from "../utils";
import Spinner from "../components/Spinner";

import logo from "../img/icon.png";
import SignInWithGoogleButton from "../components/SignInWithGoogleButton";

import SignUpDemo from "../img/SignUpDemo.mp4";

const features = [
  {
    title: "Size Does Not Matter",
    description:
      "Send 1TB files, and make the download link available for up to a year.",
  },
  {
    title: "Size Does Not Matter",
    description:
      "Send 1TB files, and make the download link available for up to a year.",
  },
];

export default function SignUpPage() {
  const { refreshUser } = useContext(AuthContext);
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const validateEmail = (email) => {
    return email.length > 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(null);

    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");

    setLoading(true);
    await sleep(200);

    try {
      if (!validateEmail(email)) return setMessage("Invalid email");
      if (password.length < 6)
        return setMessage("Password too short (minimum 8 characters)");

      if (window.sa_loaded) window.sa_event("signup");

      const res = await register(email, password);
      if (res.success) {
        await refreshUser();
        navigate("/app");
      }
    } catch (err) {
      setMessage(err.msg || err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="flex min-h-[100vh]">
        <div className="grow hidden md:flex flex-col bg-gray-600 relative">
          {/* <div className="grid grid-cols-2 gap-4 p-4 mt-auto">
            {features.map((entry, index) => (
              <div key={index} className="bg-white rounded-lg h-28 p-4 max-w-sm">
                <h3 className="text-xl font-bold">{entry.title}</h3>
                <p>
                  {entry.description}
                </p>
              </div>
            ))}
          </div> */}
          <div className="absolute left-0 top-0 w-full h-full overflow-hidden opacity-50">
            <video
              // autoPlay
              className="w-auto h-full object-cover"
              loop
              controls={false}
              autoPlay
              playsInline
            >
              <source src={SignUpDemo} type="video/mp4" />
            </video>
          </div>
        </div>
        <div className="relative flex flex-1 flex-col justify-center px-6 py-12 lg:px-8 z-10">
          <Link
            className="z-10 absolute top-6 text-xl me-1 text-primary hover:text-primary-light"
            onClick={() => window.history.back()}
          >
            &larr; Back
          </Link>

          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              alt="transfer.javascript.az logo"
              src={logo}
              className="mx-auto h-10 w-auto"
            />
            <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
              Create an account
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form
              onSubmit={handleSubmit}
              action="#"
              method="POST"
              className="space-y-6"
            >
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm/6"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    Password
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    autoComplete="current-password"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm/6"
                  />
                </div>
              </div>

              <div>
                {message && (
                  <div className="mb-2">
                    <span className="text-red-600 text-sm">{message}</span>
                  </div>
                )}
                <button
                  disabled={loading}
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-primary px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-primary-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  Sign up {loading && <Spinner className={"ms-2"} />}
                </button>
                <div className="mt-2 flex flex-row gap-2">
                  <SignInWithGoogleButton disabled={loading} />
                  {/* <button
                                  disabled={loading}
                                  type="submit"
                                  className="flex w-full justify-center rounded-md bg-white px-3 py-1.5 text-sm/6 font-semibold text-gray-700 hover:text-black shadow-sm border border-gray-500 hover:border-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                                >
                                  <BIcon name={"github"} className={"me-1"} /> GitHub
                                </button> */}
                </div>
              </div>
            </form>

            <p className="mt-10 text-center text-sm/6 text-gray-500">
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-semibold text-primary hover:text-primary-light"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
