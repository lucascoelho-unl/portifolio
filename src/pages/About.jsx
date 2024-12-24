import CTA from "../components/CTA";
import Extracurriculars from "../components/Extracurriculars";
import Skills from "../components/Skills";
import Volunteering from "../components/Volunteering";
import WorkExperience from '../components/WorkExperience';

const About = () => {
    return (
        <section className='max-container'>
            <h1 className='head-text'>
                Hello, I'm <span className='blue-gradient_text font-semibold drop-shadow-sm'>Lucas</span>
            </h1>
            <div className='mt-5 flex flex-col gap-3 text-slate-500'>
                <p>Computer Scientist based in Nebraska, specializing in technical education through hands-on learning and teaching.</p>
            </div>

            <Skills />

            <WorkExperience />

            <Volunteering />

            <Extracurriculars />

            <hr className="border-slate-200" />

            <CTA />
        </section>
    )
}

export default About