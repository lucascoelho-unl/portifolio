import React from 'react';
import { volunteering } from '../constants';

const Volunteering = () => {
    return (
        <section className="py-16 bg-gray-50">
            <h3 className="subhead-text mb-8">Volunteering Experiences</h3>
            <div className="mt-5 flex flex-col gap-3 text-slate-500">
                <p>Here’s a collection of my impactful volunteering experiences, where I made a difference through teaching, mentorship, and community building.</p>
            </div>

            <div className="mt-12">
                <div className="max-w-4xl mx-auto grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {volunteering.map((vol, index) => (
                        <div
                            key={index}
                            className="p-6 bg-white rounded-lg shadow-lg transition-transform hover:scale-105 hover:shadow-xl"
                        >
                            {/* Title Section */}
                            <div className="mb-4">
                                <h4 className="text-black text-xl font-poppins font-semibold">
                                    {vol.title}
                                </h4>
                                <div className="h-1 bg-blue-500 rounded w-1/3 mt-1"></div> {/* Accent line */}
                            </div>

                            {/* Description Section */}
                            <p className="text-black-500 text-sm leading-relaxed">
                                {vol.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Volunteering;
