import { FaTruck } from "react-icons/fa";

const ServiceCard = ({ title, description }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 group border border-gray-100 text-center w-75 mx-auto hover:bg-[#CAEB66] cursor-pointer">
      
      {/* Icon */}
      <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-green-100 text-green-600 mb-4 group-hover:bg-green-600 group-hover:text-white transition duration-300 mx-auto ">
        <FaTruck size={24} />
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-gray-800 mb-2">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default ServiceCard;