import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function IconWithBg({ icon }) {
  return (
    <div className="w-12 h-12 rounded-md bg-gray-200 p-3 secondary-text-color">
      <FontAwesomeIcon icon={icon} />
    </div>
  );
}