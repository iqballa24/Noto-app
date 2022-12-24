import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Button, Input, InvalidText, Spinner } from '../components/UI';
import useInput from '../hooks/useInput';
import useFetch from '../hooks/useFetch';
import { pageMotion } from '../constant/animate';

const isNotEmpty = (value) => value.trim() !== '';
const emailValidity = (value) => value.includes('@');
const passwordValidity = (value) =>
  /^(?=.*[A-Z])(?=.*\d)[\w@$!%*?&]{1,}$/g.test(value);

const SignIn = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { register } = useFetch();
  const navigate = useNavigate();

  const {
    value: nameValue,
    isValid: nameIsValid,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
  } = useInput(isNotEmpty);

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

  const confirmPassword = (value) => value === passwordValue;

  const {
    value: passwordConfirmValue,
    isValid: passwordConfirmIsValid,
    hasError: passwordConfirmHasError,
    valueChangeHandler: passwordConfirmChangeHandler,
    inputBlurHandler: passwordConfirmBlurHandler,
  } = useInput(confirmPassword);

  const formIsValid =
    nameIsValid && passwordIsValid && emailIsValid && passwordConfirmIsValid;

  const submitHandler = async (e) => {
    e.preventDefault();

    if (!formIsValid) return;

    const signUpData = {
      name: nameValue,
      email: emailValue,
      password: passwordValue,
    };

    try {
      setIsLoading(true);
      const { data, error } = await register({ ...signUpData });

      if (error) throw Error(data);

      return navigate('/signin');
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageMotion}
        className="relative w-full h-[100vh] bg-light-secondary dark:bg-dark-secondary text-dark-gray dark:text-white"
      >
        <div className="fixed top-[50%] left-[50%] -translate-x-2/4 -translate-y-2/4 w-full max-w-3xl">
          <div className="flex flex-col rounded-md p-5">
            <h1 className="text-3xl md:text-5xl text-cyan font-bold py-4">
              ノート Noto
            </h1>
            <p className="text-lg md:text-2xl tracking-wide">
              <strong className="text-xl md:text-3xl">Holaa!</strong> let's
              create your new account and feel a new experience with noto.
            </p>
            <form
              className="flex flex-col w-full py-8"
              onSubmit={submitHandler}
            >
              <Input
                type="Ttext"
                id="name"
                value={nameValue}
                onChange={nameChangeHandler}
                onBlur={nameBlurHandler}
                placeholder="Name"
                hasError={nameHasError}
              />
              {nameHasError && (
                <InvalidText>Please enter your name.</InvalidText>
              )}
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
                <InvalidText>Please enter a valid email address.</InvalidText>
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
              <Input
                type="password"
                id="passwordConfirm"
                value={passwordConfirmValue}
                onChange={passwordConfirmChangeHandler}
                onBlur={passwordConfirmBlurHandler}
                placeholder="Password"
                hasError={passwordConfirmHasError}
              />
              {passwordConfirmHasError && (
                <InvalidText>
                  Your confirmation password must match with password.
                </InvalidText>
              )}
              <div className="mt-8 space-y-3 w-full">
                <Button
                  title="sign in"
                  type="submit"
                  isPrimary
                  isFull
                  onClick={submitHandler}
                  disabled={!formIsValid}
                >
                  <p className="text-base md:text-lg text-white">Sign Up</p>
                </Button>
                <p className="text-sm md:text-base text-dark dark:text-light-secondary tracking-wide">
                  Already have an account?{' '}
                  <Link to="/signin" className="text-blue-400 hover:underline">
                    Sign In
                  </Link>{' '}
                  here
                </p>
              </div>
            </form>
          </div>
        </div>
      </motion.div>
      {isLoading && <Spinner />}
    </>
  );
};

export default SignIn;
