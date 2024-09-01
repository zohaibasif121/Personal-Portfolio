import React from 'react';
import LinkedIn from './Images/Linkedin-Logo.png';
import twitter from './Images/Twitter-Logo.png';
import Github from './Images/Github-logo.png';
import Zohaib from './Images/zohaib3.png';
import Title from './Title';
function Home() {
  const socialLinks = [
    {
      name: "linkedin",
      url: "https://www.linkedin.com/in/zohaib-asif-9002422b8/",
      className: "fa fa-linkedin",
      logo:LinkedIn,
      
    },
    {
      name: "github",
      url: "http://github.com/zohaibasif121",
      className: "fa fa-github",
      logo:Github,
    },
    {
      name: "twitter",
      url: "https://x.com/zohaibA93511795?s=09",
      className: "fa fa-twitter",
      logo:twitter
    },
  ];
  const Image=(
    <div>
    <img src={Zohaib} alt="Zohaib Asif" className="rounded size-80 object-cover drop-shadow-2xl" />
  </div>
  )

  return (
    <div className="  flex flex-col-reverse text-start h-screen md:h-full  gap-10  md:flex-row items-center justify-evenly min-h-96 ">
      <div className="w-fit md:w-1/2  items-center md:space-x-8 space-y-4 md:space-y-0 p-6 ">
          
        <div >
          <Title
          className="text-2xl font-bold" 
          text="I am Zohaib Asif"   
          />
                    
          <Title 
          text="I am a Frontend Developer. 
          I like dabbling in various parts of frontend development and 
          enjoy learning about new technologies or simply listening to music in my free time."
          direction='up'
          className='mt-3'
        />
          <hr className="my-4 border-black" />
          
           
          <ul className="flex justify-center md:justify-start gap-x-8">
            {socialLinks.map((item) => (
              <li key={item.className}>
                <a href={item.url} target="_blank" rel="noopener noreferrer" 
                className=" ">
                <img src={item.logo} alt='logo' className='size-6 hover:size-8' ></img>
                </a>
              </li>
            ))}

          </ul>
        </div>
      </div>
            
      <Title
           
          text={Image}   
          direction='down'
          />

     
    </div>
  );
}

export default Home;
