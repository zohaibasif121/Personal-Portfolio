import React from 'react';
import HTML from './Images/Html.svg';
import CSS from './Images/Css.svg';
import JS from './Images/Javascript.svg';
import REACT from './Images/React.svg';
import TAILWIND from './Images/Tailwind.svg';
import Title from './Title';
import Skillscircle from './Skillscircle';

function Skills() {
    const Skills = [
        {
            name: "HTML",
            className: "html",
            logo: HTML


        },
        {
            name: "CSS",
            className: "css",
            logo: CSS
        },
        {
            name: "JAVASCRIPT",
            className: "js",
            logo:JS
        },
        {
            name: "REACT",
            className: "react",
            logo:REACT
        },
        {
            name: "TAILWIND",
            className: "tailwind",
            logo: TAILWIND
        },
    ];
    const iconSlugs = [
        "react",
        "javascript",
        "html5",
        "css3",
        "github",
        "tailwindcss"
        // Add more slugs as needed
      ];
    const con=(
        <div >
                <div className="text-left  flex flex-wrap md:text-left">

                    <h1 className="text-2xl font-bold w-full">My Skills</h1>
                   
                    {Skills.map((obj)=>(
                        <div key={obj.className} className='flex w-1/2 gap-2 my-4'>
                            <img src={obj.logo} alt='logo' className='w-8 h-8'/>
                            <p>{obj.name}</p>
                        </div>
                    ))}
                </div>
            </div>
    )
    return (
        <div className="  flex flex-col text-start h-screen md:h-full gap-12 md:flex-row items-center justify-evenly min-h-96 ">
            
            <Title
            text={con}
className="w-full  md:w-1/2  items-center md:space-x-8 space-y-4 md:space-y-0 p-6 backdrop-blur-lg bg-white/10 shadow-lg rounded-lg"            
            direction='left'
          />

            <div>
            <Skillscircle iconSlugs={iconSlugs} />
            </div>


        </div>
    );
}

export default Skills;
