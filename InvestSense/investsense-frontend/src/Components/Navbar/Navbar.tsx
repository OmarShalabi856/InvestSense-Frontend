import Logo from "../Logo/Logo";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import "../../index.css";
import { Link } from "react-router-dom";
type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="bg-white h-20 flex justify-between  w-full items-center">
      <div className="flex justify-start items-center w-50 space-x-10">
        <Link to="/">
          <Logo />
        </Link>
        <Link to="/search" className="flex justify-center items-center space-x-3">
        <FontAwesomeIcon icon={faCaretDown} />
          <div className="font-bold mt-2 font-sans text-lg">Search</div>
        </Link>
        <Link to="/dashboard" className="flex justify-center items-center space-x-3">
        <FontAwesomeIcon icon={faCaretDown} />
          <div className="font-bold mt-2 font-sans text-lg">Dashboard</div>
        </Link>
      </div>

      <div className="flex justify-evenly mx-4 w-52">
        <div className="red-button">
          Login
        </div>
        <div className="blue-button">Sign Up</div>
      </div>
    </div>
  );
};

export default Navbar;
