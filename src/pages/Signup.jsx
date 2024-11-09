import Header from "../comp/header";
import Footer from "../comp/Footer";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useState } from "react";

import { auth } from "../firebase/config";
import { createUserWithEmailAndPassword } from "firebase/auth";

const Signup = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  return (
    <>
      <Helmet>
        <title>Signup</title>
      </Helmet>
      <Header />
      <main>
        <form>
          <p style={{ fontSize: "22px", marginBottom: "22px" }}>
            creat a new account <span>🧡</span>
          </p>
          <input onChange={(eo) => {
              setemail(eo.target.value);
            }}
            required
            placeholder="E-mail"
            type="email"/>
          <input onChange={(eo) => {
              setpassword(eo.target.value);
            }}
            required
            placeholder="password"
            type="password"/>
          <button
            onClick={(eo) => {
              // eo.preventDefault منع الافتراضي
              eo.preventDefault();
              
              createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                  // Signed in
                  const user = userCredential.user;
                  console.log("تم التسجيل");
                  // ...
                })
                .catch((error) => {
                  const errorCode = error.code;
                  const errorMessage = error.message;
                  console.log("لم يتم هناك خطا")

                  // ...
                });
            }}>Sign up </button>
          <p className="account">
            Already hava an account <Link to="/signin">Sign-in</Link>
          </p>
        </form>
      </main>
      <Footer />
    </>
  );
};

export default Signup;
