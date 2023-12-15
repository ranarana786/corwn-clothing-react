import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { UserContext } from "../../contexts/user-context/user.context";
import { SignOutUser } from "../../utils/firebase/firebase.utils";
import "./navigation.style.scss";
const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  console.log("sign in current user", currentUser);

  const signOutHandler = async () => {
    await SignOutUser();
    setCurrentUser(null);
  };
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
          {currentUser ? (
            <span className="nav-link" onClick={signOutHandler}>
              Sign Out
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SignIn
            </Link>
          )}
        </div>
      </div>
      <Outlet></Outlet>
    </Fragment>
  );
};

export default Navigation;
