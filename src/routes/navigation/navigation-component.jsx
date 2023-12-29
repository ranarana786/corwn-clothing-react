import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { UserContext } from "../../contexts/user-context/user.context";
import { SignOutUser } from "../../utils/firebase/firebase.utils";
import "./navigation.style";
import { CartIcon } from "../../components/cart-icon/cart-icon.component";
import { CartDropdown } from "../../components/cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../contexts/cart.context";
import {
  NavigationConatiner,
  LogoContainer,
  NavLinks,
  NavLink,
} from "./navigation.style";
const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  console.log("sign in current user", currentUser);

  const { iscartopen } = useContext(CartContext);
  console.log(iscartopen);

  const signOutHandler = async () => {
    await SignOutUser();
    setCurrentUser(null);
  };
  return (
    // Fragement tag used to render nothing on page
    <Fragment>
      <NavigationConatiner>
        <LogoContainer to="/">
          <div>
            <CrwnLogo />
          </div>
        </LogoContainer>

        <NavLinks>
          <NavLink to="/shop">Shop</NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={signOutHandler}>
              Sign Out
            </NavLink>
          ) : (
            <NavLink to="/auth">SignIn</NavLink>
          )}
          <CartIcon />
        </NavLinks>
      </NavigationConatiner>
      {iscartopen && <CartDropdown />}
      <Outlet></Outlet>
    </Fragment>
  );
};

export default Navigation;
