import React from 'react';
import syr from './syr.jpeg'
import hh from './hh.png'
import tws from './tws.png'
function HomeContainer({ activeLink }) {
  let content;
  switch (activeLink) {
    case 'blog':
      content = <p className='ml-[520px] mt-20 text-lg font-baskerville font-medium'>Blog Coming Soon</p>;
      break;
    case 'work':
      content = (    <div className='ml-[520px] mt-10 text-lg font-baskerville font-medium'>
      </div>)
      break;
      case 'about':
      content = (     <div className='flex flex-col mt-20 ml-[520px] mt-10 mb-20po text-lg font-baskerville font-medium'>
      <div className='font-medium'>
        <p>Education</p>
      </div>
      <hr className='ml-[-18px] w-28'/>
      <div className='mt-10 flex items-center'>
        <img 
          className='w-28 h-26 rounded-full'
          src={syr}
          alt="Image"
        />   
        <div className='ml-4'>
          <p>M.S. Computer Science</p>
          <p className='mt-1 text-sm'>2021-2023</p>
        </div>
        <div>
          <p className='mt-[-25px] ml-20'>Syracuse, NY</p>
        </div>
      </div>
      <div>
        <p className='ml-[130px]'>Relevant Coursework:</p>
      </div>
      <div>
        <ul className='ml-[150px] list-disc'>
          <li>
            Design and Analysis of Algorithms
          </li>
          <li>
            Computer Architecture
          </li>
          <li>
            Introduction to Databse Management Systems
          </li>
          <li>
            Principles of Operating Systems
          </li>
          <li>
            Introduction to Machine Learning
          </li>
          <li>
            Social Media and Data Mining 
          </li>
          <li>
            Natural Language Processing
          </li>
        </ul>
      </div>
      <div className='mt-10 ml-[120px]'>
        <p className='font-medium'>Skills</p>
        <div className='flex'>
          <div className='w-16 h-12 border-2 border-blue-500 rounded-lg flex items-center justify-center mr-4'>
            Python
          </div>
          <div className='w-28 h-12 border-2 border-blue-500 rounded-lg flex items-center justify-center mr-4'>
            JavaScript
          </div>
          <div className='w-28 h-12 border-2 border-blue-500 rounded-lg flex items-center justify-center mr-4'>
            HTML
          </div>
          <div className='w-36 h-12 border-2 border-blue-500 rounded-lg no-wrap flex items-center justify-center mr-4'>
            Data Visualization
          </div>
        </div>
      </div>
      <div className='font-medium mt-20'>
        <p>Work Experience</p>
      </div>
      <hr className='ml-[-12px] w-36'/>
<div className='mt-20 flex items-center'>
        <img 
          className='w-20 h-26 ml-6 '
          src={tws}
          alt="Image"
        />   
           <div className='ml-4'>
          <p>Software Engineer</p>
          <p className='mt-1 text-sm'>2022-Present</p>
        </div>
        <div>
          <p className='mt-[-25px] ml-20'>Albany, NY</p>
        </div>
      </div>
      <div className='w-[800px]'>
        <p className='ml-[130px]'> I am a part of the software engineering team, developing and maintaining TruWeather's weather data application, 
        where I visualized real-time weather data on a global map. 
        </p> 
        <p className='ml-[130px]'>
        Additionally, I'm actively contributing to the transition of the application to the next generation, building on my experience with the previous version.
        </p> 
      </div>
      <div className='mt-10 ml-[120px] mb-10'>
        <p className='font-medium'>Skills</p>
        <div className='flex'>
          <div className='w-28 h-12 border-2 border-blue-500 rounded-lg flex items-center justify-center mr-4'>
            AngularJS
          </div>
          <div className='w-16 h-12 border-2 border-blue-500 rounded-lg flex items-center justify-center mr-4'>
            CSS
          </div>
          <div className='w-28 h-12 border-2 border-blue-500 rounded-lg flex items-center justify-center mr-4'>
            HTML
          </div>
          <div className='w-36 h-12 border-2 border-blue-500 rounded-lg no-wrap flex items-center justify-center mr-4'>
          React
          </div>
          <div className='w-36 h-12 border-2 border-blue-500 rounded-lg no-wrap flex items-center justify-center mr-4'>
          Python
          </div>
        </div>
        </div>
        <div className='mt-10 flex items-center'>
        <img 
          className='w-28 h-26 rounded-full'
          src={hh}
          alt="Image"
        />   
           <div className='ml-4'>
          <p>Software Engineer</p>
          <p className='mt-1 text-sm'>2020-2021</p>
        </div>
        <div>
          <p className='mt-[-25px] ml-20'>Pune, India</p>
        </div>
      </div>
      <div className='w-[800px]'>
        <p className='ml-[130px]'> As a part of the Honeywell Multisite Application Development Group I refactored legacy building 
        control software to help create the cutting-edge Opus Magnum software. 
        </p> 
        <p className='ml-[130px]'>
        Successfully engineered end-to-end automation of control system projects, deploying Tridium's Niagara Framework across 10,000 sites.
        </p> 
        <p className='ml-[130px]'>Contributed to the initial transformation of desktop app to web based application of Opus Magnum software for the Application Development Group
        </p>
      </div>
      <div className='mt-10 ml-[120px]'>
        <p className='font-medium'>Skills</p>
        <div className='flex'>
          <div className='w-16 h-12 border-2 border-blue-500 rounded-lg flex items-center justify-center mr-4'>
            Java
          </div>
          <div className='w-36 h-12 border-2 border-blue-500 rounded-lg flex items-center justify-center mr-4'>
            Tridium Niagara
          </div>
          <div className='w-28 h-12 border-2 border-blue-500 rounded-lg flex items-center justify-center mr-4'>
            React
          </div>
          <div className='w-36 h-12 border-2 border-blue-500 rounded-lg no-wrap flex items-center justify-center mr-4'>
            HVAC systems
          </div>
        </div>
</div>
    </div>)
      break;
    default:
      content = (<div className='ml-[520px] mt-10 text-lg font-baskerville font-medium antialiased font-semibold'>
        I make User Friendly interfaces and designs to deliver best user experiences
        <br/>

        
        </div>);
  }

  return (
    <div className="common-container">
      {content}
    </div>
  );
}

export default HomeContainer;
