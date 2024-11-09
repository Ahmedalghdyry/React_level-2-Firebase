import Header from "../comp/header";
import { Link } from "react-router-dom";
import Footer from "../comp/Footer";
import { Helmet } from "react-helmet-async";

const Signin = () => {
  return (
    <>
      <Helmet>
        <title>Signin</title>
      </Helmet>
      <Header />
      <main>
        <form>
          
          <input required placeholder="E-mail" type="email" />
          <input required placeholder="password" type="password" />
          <button>Sign in</button>
          <p className="account">
            Don't hava an account <Link to="/signup">Sign-up</Link>
          </p>
        </form>
      </main>
      <Footer />
    </>
  );
};

export default Signin;
