import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function SetOfStar({ piece, color }) {
  return (
    <div className="flex">
      {[...Array(piece)].map((_, index) => (
        <FontAwesomeIcon key={index} icon={faStar} className={`w-4 ${color}`} />
      ))}
    </div>
  );
}
