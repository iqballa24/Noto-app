import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import useInput from "../hooks/useInput";
import { Button, Input, InvalidText } from "../components/UI";

import useFetch from "../hooks/useFetch";
import AuthContext from "../store/auth-context";

const emailValidity = (value) => value.includes("@");
const passwordValidity = (value) =>
  /^(?=.*[A-Z])(?=.*\d)[\w@$!%*?&]{1,}$/g.test(value);

const SignIn = () => {
  const { login } = useFetch();
  const navigate = useNavigate();
  const authCtx = useContext(AuthContext);

  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
  } = useInput(emailValidity);

  const {
    value: passwordValue,
    isValid: passwordIsValid,
    hasError: passwordHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
  } = useInput(passwordValidity);

  const formIsValid = emailIsValid && passwordIsValid;

  const submitHandler = async (e) => {
    e.preventDefault();

    if (!formIsValid) {
      return toast.warn(
        "Please fill out the form and fill with the valid data"
      );
    }

    const { data, error } = await login({
      email: emailValue,
      password: passwordValue,
    });

    if (!error) {
      authCtx.login(data.accessToken);
      navigate("/active-notes");
    }
  };

  return (
    <div className="relative w-full h-[100vh] bg-light-secondary dark:bg-dark-secondary text-dark-gray dark:text-white">
      <div className="fixed top-[50%] left-[50%] -translate-x-2/4 -translate-y-2/4 w-full max-w-3xl">
        <div className="flex flex-col rounded-md p-5">
          <h1 className="text-5xl text-cyan font-bold py-4">ノート Noto</h1>
          <p className="text-2xl tracking-wide">
            <strong className="text-3xl">Welcome back!</strong> let's sign in to
            see your notes
          </p>
          <form className="flex flex-col w-full py-8" onSubmit={submitHandler}>
            <Input
              type="email"
              id="email"
              value={emailValue}
              onChange={emailChangeHandler}
              onBlur={emailBlurHandler}
              placeholder="Email"
              hasError={emailHasError}
            />
            {emailHasError && (
              <InvalidText>Email format is incorrect.</InvalidText>
            )}
            <Input
              type="password"
              id="password"
              value={passwordValue}
              onChange={passwordChangeHandler}
              onBlur={passwordBlurHandler}
              placeholder="Password"
              hasError={passwordHasError}
            />
            {passwordHasError && (
              <InvalidText>
                Password must contain number and uppercase letters.
              </InvalidText>
            )}
            <div className="mt-8 space-y-3 w-full">
              <Button
                title="sign in"
                type="submit"
                isPrimary
                isFull
                onClick={submitHandler}
              >
                <p className="text-lg text-white">Sign In</p>
              </Button>
              <p className="text-dark dark:text-light-secondary tracking-wide">
                Don't have an account?{" "}
                <Link to="/signup" className="text-blue-400 hover:underline">
                  Sign Up
                </Link>{" "}
                here
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
