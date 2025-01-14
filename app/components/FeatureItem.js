import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function FeatureItem({ headingText, descriptionText, icon }) {
  return (
    <div className="flex flex-col gap-3 p-5 m-auto ">
      <div className="bg-blue-100 w-12 h-12 rounded-full flex justify-center items-center">
        <FontAwesomeIcon
          icon={icon}
          className=" w-4 secondary-text-color"
        ></FontAwesomeIcon>
      </div>
      <h3 className="capitalize text-xl md:text-2xl font-medium">
        {headingText}
      </h3>
      <p className="font-light">{descriptionText}</p>
    </div>
  );
}
