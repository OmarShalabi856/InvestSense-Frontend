import Logo from "./Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCircleUser, faSearch } from "@fortawesome/free-solid-svg-icons";
import "../index.css";
import { Link } from "react-router-dom";
import { useAuth } from "../Services/useAuth";
type Props = {};
const Navbar = (props: Props) => {
  const { isLoggedIn, user, logout } = useAuth();
  return (
    <div className="bg-white h-20 flex justify-start w-full items-center fixed top-0">
      <div className="flex justify-start items-center w-3/4">
        <Link to="/" className="max-w-44">
          <Logo />
        </Link>
        <div className="flex justify-between w-1/6 ml-4 ">
          <div>
            <Link
              to="/search"
              className="flex justify-start items-center w-1/6 space-x-2"
            >
              <FontAwesomeIcon icon={faSearch} />
              <div className="font-bold mt-1 font-sans text-sm sm:hidden md:block">
                Search
              </div>
            </Link>
          </div>
          <div >
            <Link
              to="/dashboard"
              className="flex justify-start items-center w-1/6 space-x-2"
            >
              <FontAwesomeIcon icon={faCaretDown} />
              <div className="font-bold mt-1 font-sans text-sm sm:hidden md:block ">
                Dashboard
              </div>
            </Link>
          </div>
        </div>
      </div>  
      {isLoggedIn() ? (
        <div className="mx-3 flex justify-between w-44">
          <div className="mx-3 flex flex-row justify-center items-center bg-red-button text-white font-semibold p-2 rounded"><FontAwesomeIcon className="mx-2" icon={faCircleUser} style={{color: "#ffffff",}} />{user?.username}</div>
          <div onClick={logout} className="blue-button p-2">
            Logout
          </div>
        </div>
      ) : (
        <div className="flex justify-evenly mx-4 w-52">
          <Link to="/login" className="red-button">
            Login
          </Link>
          <Link to="/register" className="blue-button">
            Sign Up
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
