import React, { useRef, useState } from "react";
import Header from "./Header";
import { validateData } from "../utils/validate";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(false);
  const email = useRef(null);
  const password = useRef(null);
  const [errorMessege, setErrorMessege] = useState(null);
  const [user, setUser] = useState();
  const toggleSignUp = () => {
    setIsSignIn(!isSignIn);
  };

  const handleSubmit = () => {
    // Validate the form data
    const msg = validateData(email.current.value, password.current.value);
    console.log("validation:", msg, "isSignIn:", isSignIn);
    setErrorMessege(msg);
    if (msg) return;

    // Sign in / Sign up
    if (!isSignIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          // Signed up
          setUser(userCredential.user);
          console.log("user", userCredential.user);
        })
        .catch((error) => {
          setErrorMessege(error.message);
          // ..
        });
    } else {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          console.log("user", userCredential.user);
        })
        .catch((error) => {
          setErrorMessege(error.message);
        });
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
          onSubmit={(e) => e.preventDefault()}
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
                  placeholder="Full NAme"
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
                autoComplete="current-password"
                className="w-full rounded border border-gray-600 bg-white/10 px-4 py-3.5 text-white placeholder-gray-400 outline-none transition focus:border-white focus:bg-white/20"
              />
            </div>
          </div>
          <p className="text-red-500 mt-1">
            <em>{errorMessege}</em>
          </p>
          <button
            onClick={handleSubmit}
            type="submit"
            className="w-full rounded bg-red-600 py-3.5 font-semibold text-white transition hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-black"
          >
            {isSignIn ? "Log In" : "Sign Up"}
          </button>

          <p className="mt-2">
            {isSignIn ? (
              <button className="cursor-pointer" onClick={toggleSignUp}>
                {" "}
                New to Netflix? Sign up now
              </button>
            ) : (
              <button className="cursor-pointer" onClick={toggleSignUp}>
                {" "}
                Already have an Acout? Login now
              </button>
            )}
          </p>
        </form>
      </main>
    </div>
  );
};

export default Login;
