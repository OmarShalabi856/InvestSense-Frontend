import Logo from "../Logo/Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import "../../index.css";
import { Link } from "react-router-dom";
type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="bg-white h-20 flex justify-start w-full items-center">
      <div className="flex justify-start items-center w-full ">
        <Link to="/" className="w-1/2 sm:w-1/4">
          <Logo />
        </Link>
        <div className="flex justify-between w-1/6">
          <div>
            <Link
              to="/search"
              className="flex justify-start items-center w-1/6"
            >
              <FontAwesomeIcon icon={faCaretDown} />
              <div className="font-bold mt-1 font-sans text-sm sm:hidden md:block">
                Search
              </div>
            </Link>
          </div>
          <div>
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

      <div className="flex justify-evenly mx-4 w-52">
        <div className="red-button">Login</div>
        <div className="blue-button">Sign Up</div>
      </div>
    </div>
  );
};

export default Navbar;
