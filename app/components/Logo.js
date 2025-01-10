import Image from "next/image";
import logo from "../../public/images/logo.png";

import { Coiny } from "next/font/google";
const coiny = Coiny({
  subsets: ["latin"], // Or other subsets as needed
  weight: "400", // Or other weights like '700', 'regular', etc.
  display: "swap", // Important for performance
});

export default function Logo() {
  return (
    <div className="logo flex gap-3 items-center">
      <Image src={logo} alt="My Image" width={35} height={35} />
      <h1 className={`${coiny.className} text-lg tracking-wider`}>
        CourseMatch
      </h1>
    </div>
  );
}
