  import React, { Component } from 'react';
  export default class Footer extends Component {
    socialLinks = [
      {
        name: "linkedin",
        url: "https://www.linkedin.com/in/zohaib-asif-9002422b8/",
        className: "fa fa-linkedin",
      },
      {
        name: "github",
        url: "http://github.com/zohaibasif121",
        className: "fa fa-github",
      },
      {
        name: "twitter",
        url: "https://x.com/zohaibA93511795?s=09",
        className: "fa fa-twitter",
      },
    ];
    render() {
      return (
        <footer className="h-max text-black">
          <div className=" ">
            <ul className="flex flex-row justify-start gap-10  p-8">
              {
                this.socialLinks.map((item)=>{
                  return(
                    <li key={item.className} >
                      <a href={item.url} target='_blank' rel='noreferrer' className=' hover:font-bold hover:text-blue-400 focus:text-blue-400'>
                      <i >{item.name}</i>
                      </a>
                    </li>
                  )
                })
              }
            </ul>
            
          </div>
      </footer>
      );
    }
  }