import React from 'react'
import { Link } from 'react-router-dom'

import { arrow } from '../assets/icons'

const InfoBox = ({ text, link, btnText }) => (
    <div className="info-box">
        <p className='font-medium sm:text-xl text-center'>{text}</p>
        <Link to={link} className='neo-brutalism-white neo-btn'>
            {btnText}
            <img src={arrow} className='w-4 h-4 object-contain' />
        </Link>
    </div>
)

const renderContent = {
    1: (
        <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue  py-4 px-8 text-white mx-5'>
            Hi, I am <span className='font-semibold'>Lucas</span> 👋
            <br />
            A <span className='font-semibold'>Computer Scientist</span> from Brazil 🇧🇷
        </h1>
    ),
    2: (
        <InfoBox
            text="Experiences shaped who I became"
            link="/about"
            btnText="Learn more"
        />
    ),
    3: (
        <InfoBox
            text="Developed skills through projects, research, volunteering, and studies"
            link="/projects"
            btnText="Visit my portifolio"
        />
    ),
    4: (
        <InfoBox
            text="Want to get in contact? Feel free! You are just a few keystrokes away."
            link="/contact"
            btnText="Get in contact"
        />
    ),

}

const HomeInfo = ({ currentStage }) => {
    return renderContent[currentStage] || null
}

export default HomeInfo