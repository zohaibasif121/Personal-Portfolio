import React from 'react';

function Projects() {
  const projects = [
    {
      id: 6,
      img: `https://i.postimg.cc/05VLwzd9/Whats-App-Image-2025-01-18-at-9-50-39-AM-removebg-preview.png`,
      url: 'http://mkbeautyhub.com/',
      Title: 'Mk Beauty Hub',
      
    },
    {
      id: 4,
      img: `https://i.postimg.cc/T2WTfr1t/hitack.png`,
      url: 'https://hitackeng.netlify.app/',
      Title: 'Hi Tack Eng',
    },
    {
      id: 1,
      img: `https://d33wubrfki0l68.cloudfront.net/66d21a11d89cc90008d7d189/screenshot_2024-08-30-19-14-44-0000.webp`,
      url: 'https://currency-converter-by-zohaib-asif.netlify.app/',
      Title: 'Currency Exchange Rates',
    },
    {
      id: 2,
      img: `https://d33wubrfki0l68.cloudfront.net/66d38b92fa71907fb9628478/screenshot_2024-08-31-21-31-33-0000.webp`,
      url: 'https://ntflix-clone-by-zohaib-asif.netlify.app/',
      Title: 'Netflix Clone ',
    },
    {
      id: 3,
      img: `https://user-images.githubusercontent.com/91532881/166426445-3aeee29c-bca7-4d95-a082-70269bb192fd.png`,
      url: 'https://weather-app-by-zohaib-asif.netlify.app/',
      Title: 'Weather App',
    },
    
    {
      id: 5,
      img: `https://d33wubrfki0l68.cloudfront.net/66d0dea9a0b95d0008dd15a0/screenshot_2024-08-29-20-49-31-0000.webp`,
      url: 'https://tic-tac-toe-by-zohaib-asif.netlify.app/',
      Title: 'Tic Tac Toe Game',
    },
    
  ];

  return (
    <div className='flex flex-wrap gap-x-10 gap-y-10 items-center justify-center'>
      {projects.map((obj) => (
        <div
          key={obj.id}
          className='border-1 border-black rounded-lg w-80 h-48 p-4 shadow-2xl'
        >
          <a href={obj.url} target='_blank' rel='noopener noreferrer'>
            <div className='border-2 h-1/4 text-center text-lg font-bold'>
              {obj.Title}
            </div>
            <div className='flex justify-center'>
          <img src={obj.img} className=' h-32' alt={obj.Title}/>
          </div>
          </a>
        </div>
      ))}
    </div>
  );
}

export default Projects;
