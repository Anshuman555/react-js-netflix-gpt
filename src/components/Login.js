import React, { useRef, useState } from "react";
import Header from "./Header";
import { validateData } from "../utils/validate";
import { auth } from "../utils/firebase";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const authErrors = {
  "auth/invalid-credential": "Incorrect email or password",
  "auth/invalid-email": "Enter a valid email",
  "auth/user-not-found": "No account found with this email",
  "auth/wrong-password": "Incorrect email or password",
  "auth/email-already-in-use": "This email is already registered",
  "auth/weak-password": "Password is too weak",
  "auth/too-many-requests": "Too many attempts. Try again later",
  "auth/network-request-failed": "Network error. Check your connection",
};

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isSignIn, setIsSignIn] = useState(false);
  const userName = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const [errorMessege, setErrorMessege] = useState(null);

  const toggleSignUp = () => {
    setIsSignIn(!isSignIn);
    setErrorMessege(null);
  };

  const showError = (error) =>
    setErrorMessege(authErrors[error.code] || error.message);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the form data
    const name = isSignIn ? null : userName.current.value.trim();
    if (!isSignIn && !name) return setErrorMessege("Enter your full name");

    const msg = validateData(email.current.value, password.current.value);
    setErrorMessege(msg);
    if (msg) return;

    // Sign in / Sign up
    if (!isSignIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then(({ user }) =>
          // onAuthStateChanged already fired with displayName === null,
          // so push the name into the store ourselves once it is saved.
          updateProfile(user, { displayName: name }).then(() => {
            dispatch(
              addUser({
                uid: user.uid,
                email: user.email,
                displayName: name,
              }),
            );
            navigate("/browse");
          }),
        )
        .catch(showError);
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then(() => {
          navigate("/browse");
        })
        .catch(showError);
    }
  };

  return (
    <div className="relative min-h-screen w-full">
      {/* Background */}
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/80" />

      <Header />

      <main className="relative flex min-h-screen items-center justify-center px-4 py-28">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md rounded-lg bg-black/75 p-8 shadow-2xl sm:p-12"
        >
          <h1 className="mb-8 text-3xl font-bold text-white">
            {isSignIn ? "Log In" : "Sign Up"}
          </h1>

          <div className="space-y-4 mb-6">
            {!isSignIn && (
              <div>
                <label htmlFor="fullname">Full Name</label>
                <input
                  id="fullname"
                  type="text"
                  ref={userName}
                  placeholder="Full Name"
                  autoComplete="name"
                  className="w-full rounded border border-gray-600 bg-white/10 px-4 py-3.5 text-white placeholder-gray-400 outline-none transition focus:border-white focus:bg-white/20"
                />
              </div>
            )}
            <div>
              <label htmlFor="email">Email address</label>
              <input
                id="email"
                type="email"
                ref={email}
                placeholder="Email address"
                autoComplete="email"
                className="w-full rounded border border-gray-600 bg-white/10 px-4 py-3.5 text-white placeholder-gray-400 outline-none transition focus:border-white focus:bg-white/20"
              />
            </div>

            <div>
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                ref={password}
                placeholder="Password"
                autoComplete={isSignIn ? "current-password" : "new-password"}
                className="w-full rounded border border-gray-600 bg-white/10 px-4 py-3.5 text-white placeholder-gray-400 outline-none transition focus:border-white focus:bg-white/20"
              />
            </div>
          </div>
          <p className="text-red-500 mt-1">
            <em>{errorMessege}</em>
          </p>
          <button
            type="submit"
            className="w-full rounded bg-red-600 py-3.5 font-semibold text-white transition hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-black"
          >
            {isSignIn ? "Log In" : "Sign Up"}
          </button>

          <p className="mt-2">
            <button type="button" className="cursor-pointer" onClick={toggleSignUp}>
              {isSignIn
                ? "New to Netflix? Sign up now"
                : "Already have an Account? Login now"}
            </button>
          </p>
        </form>
      </main>
    </div>
  );
};

export default Login;
