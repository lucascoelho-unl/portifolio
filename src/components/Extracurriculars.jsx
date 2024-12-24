import React, { useState } from 'react';
import { extracurriculars } from '../constants';

const Extracurriculars = () => {
    const [activeItem, setActiveItem] = useState(null);

    const openModal = (item) => {
        setActiveItem(item);
    };

    const closeModal = () => {
        setActiveItem(null);
    };

    return (
        <section className="py-16 bg-gray-50">
            <h3 className="subhead-text">
                Extracurriculars & Curiosities
            </h3>
            <p className="mt-5 flex flex-col gap-3 text-slate-500">
                A glimpse into the unique activities and interests that have shaped my skills, passions, and character. Click in a picture for a more detailed description!
            </p>
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {extracurriculars.map((activity, index) => (
                    <div
                        key={index}
                        className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg bg-white hover:shadow-sm transition-shadow duration-100"
                        onClick={() => openModal(activity)}
                    >
                        {/* Image */}
                        <img
                            src={activity.imageUrl}
                            alt={activity.title}
                            className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105"
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black bg-opacity-100 opacity-0 group-hover:opacity-75 transition-opacity duration-300 flex justify-center items-center">
                            <h4 className="text-white text-lg font-semibold">{activity.title}</h4>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal */}
            {activeItem && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
                    <div className="bg-white rounded-lg shadow-xl w-11/12 sm:w-2/3 lg:w-1/3 p-6 relative">
                        <button
                            className="absolute top-3 right-3 text-gray-700 hover:text-black font-bold text-lg"
                            onClick={closeModal}
                        >
                            ✕
                        </button>
                        <img
                            src={activeItem.imageUrl}
                            alt={activeItem.title}
                            className="w-full h-60 object-cover rounded-md mb-4"
                        />
                        <h4 className="text-xl font-bold mb-2 text-gray-800">{activeItem.title}</h4>
                        <p className="text-gray-700 text-sm">{activeItem.description}</p>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Extracurriculars;
