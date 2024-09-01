import React from 'react';
import Zohaib from './Images/zohaib3.png';
import Title from './Title';

const About = () => {
  const aboutDetails = (
    <p>
      I am currently a student at The NCBA&E pursuing my BSCS from here. I am a self-taught Frontend Web Developer, currently diving deeper into it. My goal is to learn something new every day. I believe that<br /><br />
      <q className="text-center">to be successful in life, one needs to be obsessive with their dreams and keep working towards them.</q>
    </p>
  );
  // const Image=(
   
  // )

  return (
    <main className="flex flex-col-reverse text-start h-screen md:h-full md:flex-row-reverse items-center justify-evenly min-h-96">
      <article className="w-fit md:w-1/2 items-center md:space-x-8 space-y-4 md:space-y-0 p-6">
        <Title
          className="text-2xl font-bold mx-10"
          text="About Me"
          direction="down"
        />

        <Title
          text={aboutDetails}
          direction="up"
          className="text-black m-0 mt-3 py-4"
        />
      </article>
      {/* <Title
      text={Image}
      direction='left'
      /> */}
       <div>
    <img src={Zohaib} alt="Zohaib Asif" className="rounded size-80 object-cover" />
  </div>
    </main>
  );
};

export default About;
