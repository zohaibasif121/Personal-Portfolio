import React, { useState } from 'react';
// import Zohaib from './Images/zohaibimg.png';
import LinkedIn from './Images/Linkedin-Logo.png';
import Instagram from './Images/Instagram.png';
import Facebook from './Images/Facebook (2).png';
import Inputfield from './Inputfield';
import WhatsApp from './Images/Whatsapp.svg'
function ContactUs() {
    const [Form, SetForm] = useState({
        Name: '',
        email: '',
        message: ''
    });

    const [status, setStatus] = useState('');
    const socialLinks = [
        {
            name: "WhatsApp",
            url: "https://wa.me/923224506633",
            className: "fa fa-whatsapp",
            logo:WhatsApp
          },
          {
          name: "Instagram",
          url: "https://www.instagram.com/zohaib_asif_18?igsh=NXZsazJpbW8wdDQ5",
          className: "fa fa-linkedin",
          logo:Instagram,
          
        },
        {
          name: "Facebook",
          url: "https://www.facebook.com/share/9NEXGWk7mcsbhb96/?mibextid=qi2Omg",
          className: "fa fa-github",
          logo:Facebook,
        },
        {
          name: "Linked In",
          url: "https://www.linkedin.com/in/zohaib-asif-9002422b8/",
          className: "fa fa-twitter",
          logo:LinkedIn
        },
      ];

    function handleName(e) {
        SetForm({ ...Form, Name: e.target.value });
    }

    function handlemail(e) {
        SetForm({ ...Form, email: e.target.value });
    }

    function handleMessage(e) {
        SetForm({ ...Form, message: e.target.value });
    }

    async function handleSubmit(e) {
        e.preventDefault(); 
    
        const formData = new FormData();
        formData.append('Name', Form.Name);
        formData.append('email', Form.email);
        formData.append('message', Form.message);
    
        try {
            const response = await fetch('https://formspree.io/f/xeojvonz', {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });
    
            if (response.ok) {
                setStatus('SUCCESS');
                SetForm({
                    Name: '',
                    email: '',
                    message: ''
                });
            } else {
                setStatus('ERROR');
            }
        } catch (error) {
            setStatus('ERROR');
        }
    }
    

    return (
        <div className="flex flex-col text-start h-full md:flex-row items-center mx-14 gap-10 min-h-96 backdrop-blur-lg bg[#F5F7F8] shadow-lg rounded-lg ">
            <div className="w-fit md:w-1/2 items-center  space-y-4 md:space-y-0 p-6  rounded-lg">
                <form onSubmit={handleSubmit}>
                    <h1 className='font-bold text-2xl'>Contact</h1>
                    {/* <label className='mx-2 my-2'>Name</label>
                    <input 
                        type='text' 
                        name='Name'
                        placeholder='Name' 
                        value={Form.Name} 
                        onChange={handleName}
                        className='text-black my-2 p-2 w-full h-8 rounded' 
                        required
                    /> */}
                    <Inputfield
                    label='Name'
                    value={Form.Name}
                    onChange={handleName}
                    className='text-black m-14 p-4  h-8 rounded' 
                    />

                    {/* <label className='mx-2 my-2'>Your E-mail</label> */}
                    <Inputfield 
                        type='email' 
                        label='E-mail'
                        value={Form.email} 
                        onChange={handlemail}
                        className='text-black my-2 p-2 w-full h-8 rounded' 
                        
                    />
                    {/* <label className='mx-2 my-2'>Enter your message</label> */}
                    
                    <Inputfield
                        label="Message"
                        value={Form.message} 
                        onChange={handleMessage}
                        className='text-black p-2 my-2 w-full h-24 rounded' 
                        
                    />
                    <div className=' flex justify-end'>
                        <button 
                            type='submit' 
                            className='rounded my-2 h-8 w-24 px-2 bg-cyan-400 hover:bg-cyan-500 hover:text-black focus:text-black'
                        >
                            Send
                        </button>
                    </div>
                </form>
                {status === 'SUCCESS' && <p className="text-green-500">Thanks! Your message has been sent.</p>}
                {status === 'ERROR' && <p className="text-red-500">Oops! There was an error sending your message.</p>}
            </div>

            <div  className="w-fit md:w-fit items-center  space-y-4 md:space-y-0 p-6 ">
            <h1 className='text-2xl font-bold'> Details</h1>
            <p>Motivated university student with a track Record of acadamic excellence.
                Intends to develop a work experience utilizing Skills.
            </p>
            <h2 className='py-5 text-2xl font-bold'> Feel free to contact me</h2>
            <ul>
            {socialLinks.map((obj)=>(
            <li className='my-4 hover:text-blue-400  focus:text-blue-400 focus:text-lg' key={obj.name}>
                <a href={obj.url}  className='flex gap-3'  target='-blank'>
                <img src={obj.logo} alt='social' className='h-5 w-5'/>
                <p>{obj.name}</p>
                </a>
            </li>
            ))}
            </ul>
            </div>
        </div>
    );
}

export default ContactUs;
