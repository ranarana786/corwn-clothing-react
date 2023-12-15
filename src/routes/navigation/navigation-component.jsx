import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import "./navigation.style.scss";
const Navigation = () => {
  return (
    // Fragement tag used to render nothing on page
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <div>
            <CrwnLogo />
          </div>
        </Link>

        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
          <Link className="nav-link" to="/auth">
            SignIn
          </Link>
        </div>
      </div>
      <Outlet></Outlet>
    </Fragment>
  );
};

export default Navigation;
