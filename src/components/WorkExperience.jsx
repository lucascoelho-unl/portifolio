import React from 'react'
import { experiences } from '../constants'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import "react-vertical-timeline-component/style.min.css";

const WorkExperience = () => {
    return (
        <div className='py-16'>
            <h3 className='subhead-text'>Work Experience</h3>
            <div className='mt-5 flex flex-col gap-3 text-slate-500'>
                <p>I've had experience with a variety of technologies, leveling up my skills and teaming up with smart people along the way. Here's the rundown:</p>
            </div>

            <div className='mt-12 flex'>
                <VerticalTimeline>
                    {experiences.map((experiences) => (
                        <VerticalTimelineElement
                            key={experiences.company_name}
                            date={experiences.date}
                            icon={
                                <div className="flex justify-center items-center w-full h-full">
                                    <img
                                        src={experiences.icon}
                                        alt={experiences.company_name}
                                        className="w-[60%] h-[60%] object-contain"
                                    />
                                </div>
                            }
                            iconStyle={{ background: experiences.iconBg }}
                            contentStyle={{
                                borderBottom: '8px',
                                borderStyle: 'solid',
                                borderBottomColor: experiences.iconBg,
                                boxShadow: 'none',
                            }}
                        >
                            <div>
                                <h3 className="text-black text-xl font-poppins font-semibold">
                                    {experiences.title}
                                </h3>
                                <p className="text-black-500 font-medium font-base" style={{ margin: 0 }}>
                                    {experiences.company_name}
                                </p>
                            </div>

                            <ul className="my-5 list-disc ml-5 space-y-2">
                                {experiences.points.map((point, index) => (
                                    <li key={`experience-point-${index}`} className="text-black-500/50 font-normal pl-1 text-small">
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </VerticalTimelineElement>
                    ))}
                </VerticalTimeline>
            </div>
        </div>
    )
}

export default WorkExperience