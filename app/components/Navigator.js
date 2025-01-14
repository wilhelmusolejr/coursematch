import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import Logo from "./Logo";
import Button from "./Button";

export default function Navigator() {
  return (
    <nav className="w-full px-5 md:px-10 py-7 shadow-sm shadow-black ">
      {/* NAVIGATOR - CONTAINER */}
      <div className=" flex justify-between items-center">
        {/* LOGO */}
        <Logo />

        <div className="lg:flex gap-10 items-center hidden">
          <ul className="flex gap-5">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">Courses</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="/course-prediction">Recommendation</a>
            </li>
          </ul>

          <Button>Account</Button>
        </div>
        {/* BURGER */}
        <FontAwesomeIcon
          icon={faBars}
          className=" w-5 lg:hidden"
        ></FontAwesomeIcon>
      </div>
    </nav>
  );
}
