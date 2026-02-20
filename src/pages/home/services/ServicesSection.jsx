

import  servicesData  from "../../../data/services.json";
import ServiceCard from "./ServiceCard";

const ServicesSection = () => {

   
    
    return (
        <section className="py-16 bg-[#03373D] px-6 md:px-12 lg:px-20 rounded-2xl mt-20  ">

            <div className="text-center max-w-2xl mx-auto mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Our Services
                </h2>
                <p className="text-gray-300 text-base md:text-lg">
                    Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.
                </p>
            </div>
            {/* Responsive Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-y-4  ">
                {servicesData.map((service, index) => (
                    <ServiceCard
                        key={index}
                        title={service.title}
                        description={service.description}
                    />
                ))}
            </div>
        </section>
    );
};

export default ServicesSection;