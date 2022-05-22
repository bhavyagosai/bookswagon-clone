import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";

import toast, { Toaster } from "react-hot-toast";
// import { motion } from "framer-motion";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import { register, login } from "../actions/userActions";
import FormError from "./FormError";

export default function RegisterComponent({ containerVariants }) {
  // for pushing to different route
  const router = useRouter();

  // Yup validation for login info
  const signupValidationSchema = Yup.object().shape({
    name: Yup.string().required().label("Name"),
    username: Yup.string().required().label("Username"),
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(8).label("Password"),
    confirmPassword: Yup.string()
      .required()
      .oneOf([Yup.ref("password"), null], "Passwords do not match")
      .label("Password"),
  });

  // isSubmitting for disabling the form submit until a response has been recieved by clicking submit once
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Declaring dispatch for redux
  const dispatch = useDispatch();
  // Making Register State in redux
  const userRegister = useSelector((state) => state.userRegister);

  // Error and userinfo if returned by the userRegister state
  const { error, userInfo } = userRegister;

  // after successful signup wait for 2 secs then redirect to home screen
  useEffect(() => {
    if (userInfo) {
      // setTimeout(() => {
        router.push("/");
      // }, 2000);
    }
  }, [userInfo]);

  // The function when form is submitted
  const formSubmitHandler = ({ name, username, email, password }) => {
    // console.log(name, username, email, password);
    setIsSubmitting(true); // Disables the form submit btn
    toast
      .promise(
        dispatch(register(name, username, email, password)), // Dispatches the userinfo
        {
          loading: "Signing you up...", //when signing up
          success: "Sign Up Success! Redirecting...", //if signup is success
          error: error || "User Already Exist", //if signup fails
        },
        {
          style: {
            fontFamily: "Monospace",
            marginTop: "15px",
          },
        }
      )
      .then(() => {
        toast.promise(
          dispatch(login(email, password)), // Dispatches the email and username
          {
            loading: "Checking your credentials", //when logging in
            success: "Login Success! Redirecting...", //if login is success
            error: `${error || "Invalid Email or Password!"}`, //when login is failed
          },
          {
            style: {
              fontFamily: "Monospace",
              marginTop: "15px",
            },
          }
        );
      });

    setIsSubmitting(false); //enable the form submit btn again
  };

  return (
    <>
      {/* //   <motion.div
    //     className="main-container"
    //     variants={containerVariants}
    //     initial="hidden"
    //     animate="visible"
    //     exit="exit"
    //   >
    //     <div className="container">
    //       <div className="form-container">
    //         <div className="form-title">Sign up</div> */}

      <Formik
        initialValues={{
          name: "",
          username: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        onSubmit={formSubmitHandler}
        validationSchema={signupValidationSchema}
      >
        {({ handleChange, errors, setFieldTouched, touched, handleSubmit }) => {
          return (
            <Form className="pt-2 form">
              <div class="form-control w-full max-w-xs">
                <label class="label">
                  <span class="label-text">Name</span>
                </label>
                <input
                  type="text"
                  required
                  name="name"
                  placeholder="Type here"
                  class="input input-sm input-bordered w-full max-w-xs"
                  onBlur={() => setFieldTouched("name")}
                  onChange={handleChange("name")}
                />
              </div>
              {/* <br /> */}
              {/* <input
              type="text"
              name="name"
              required
              onBlur={() => setFieldTouched("name")}
              onChange={handleChange("name")}
            /> */}
              <FormError error={errors.name} visible={touched.name} />
              {/* <br /> */}

              <div class="form-control w-full max-w-xs">
                <label class="label">
                  <span class="label-text">Username</span>
                </label>
                <input
                  type="text"
                  required
                  name="username"
                  placeholder="Type here"
                  class="input input-sm input-bordered w-full max-w-xs"
                  onBlur={() => setFieldTouched("username")}
                  onChange={handleChange("username")}
                />
              </div>
              {/* <label htmlFor="username">username</label> */}
              {/* <br />
            <input
              type="text"
              name="username"
              onBlur={() => setFieldTouched("username")}
              required
              onChange={handleChange("username")}
            /> */}
              <FormError error={errors.username} visible={touched.username} />
              {/* <br /> */}

              <div class="form-control w-full max-w-xs">
                <label class="label">
                  <span class="label-text">Email</span>
                </label>
                <input
                  type="email"
                  required
                  name="email"
                  placeholder="Type here"
                  class="input input-sm input-bordered w-full max-w-xs"
                  onBlur={() => setFieldTouched("email")}
                  onChange={handleChange("email")}
                />
              </div>
              {/* <label htmlFor="email">email</label> */}
              {/* <br /> */}
              {/* <input
              type="text"
              name="email"
              onBlur={() => setFieldTouched("email")}
              required
              onChange={handleChange("email")}
            /> */}
              <FormError error={errors.email} visible={touched.email} />
              {/* <br /> */}

              <div class="form-control w-full max-w-xs">
                <label class="label">
                  <span class="label-text">Password</span>
                </label>
                <input
                  type="password"
                  required
                  name="password"
                  placeholder="Type here"
                  class="input input-sm input-bordered w-full max-w-xs"
                  onBlur={() => setFieldTouched("password")}
                  onChange={handleChange("password")}
                />
              </div>
              {/* <label htmlFor="password">password</label>
            <br />
            <input
              type="password"
              name="password"
              onBlur={() => setFieldTouched("password")}
              required
              onChange={handleChange("password")}
            /> */}
              <FormError error={errors.password} visible={touched.password} />
              {/* <br /> */}

              <div class="form-control w-full max-w-xs">
                <label class="label">
                  <span class="label-text">Confirm Password</span>
                </label>
                <input
                  type="password"
                  required
                  name="confirmPassword"
                  placeholder="Type here"
                  class="input input-sm input-bordered w-full max-w-xs"
                  onBlur={() => setFieldTouched("confirmPassword")}
                  onChange={handleChange("confirmPassword")}
                />
              </div>
              {/* <label htmlFor="confirmPassword">confirm password</label>
            <br />
            <input
              type="password"
              name="confirmPassword"
              onBlur={() => setFieldTouched("confirmPassword")}
              required
              onChange={handleChange("confirmPassword")}
            /> */}
              <FormError
                error={errors.confirmPassword}
                visible={touched.confirmPassword}
              />
              {/* <br /> */}

              <div
                className={
                  "mt-4 btn btn-primary btn-sm" +
                  " " +
                  (isSubmitting ? "loading" : "")
                }
                disabled={isSubmitting}
                onClick={handleSubmit}
              >
                Register
              </div>

              {/* <div id="form-button">
              <button
                className="submit-btn"
                type="submit"
                disabled={isSubmitting}
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div> */}
            </Form>
          );
        }}
      </Formik>
      {/* </div> */}
      {/* </div> */}
      {/* </motion.div> */}
    </>
  );
}
