import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import NavigatorLink from "./NavigatorLink";

export default function Navigator() {
  return (
    <nav className=" bg-red-primary h-[12vh] flex justify-center items-center sticky top-0">
      <div className="flex justify-between items-center container xl:px-0 px-10">
        {/* logo */}
        <a href="/" className="flex items-center gap-3 ">
          <div className="w-10 h-10 border-1 rounded-lg hidden"></div>
          <img src="/images/logo.png" alt="" className="w-10 h-10" />
          <h2>CourseMatch</h2>
        </a>

        <div className="hidden md:block">
          <ul className="flex gap-5 uppercase lg:flex ">
            <NavigatorLink link_path="/" link_name="Home" />
            <NavigatorLink link_path="#Features" link_name="Features" />
            <NavigatorLink link_path="#Courses" link_name="Courses" />
            <NavigatorLink link_path="#About" link_name="About us" />
            <NavigatorLink
              link_path="Recommendation"
              link_name="Recommendation"
            />
          </ul>
        </div>

        {/* hamburger */}
        <div className="md:hidden">
          <FontAwesomeIcon icon={faBars} className=" text-3xl" />
        </div>
      </div>
    </nav>
  );
}
