// Console.js
import React, { useState } from 'react';
import inspect from './inspect.svg';
import toggle from './toggledevice.svg';
import sidebar from './sidebar.svg';
import stop from './stop-sign.svg';
import downArr from './down-arrow.svg';
import eye from './eye.svg';
import settings from './settings.svg';

const Console = () => {
  const [activeTab, setActiveTab] = useState('Console');
  const [consoleInput, setConsoleInput] = useState('');
  const [consoleOutput, setConsoleOutput] = useState([]);

  const handleConsoleInput = (e) => {
    setConsoleInput(e.target.value);
  };

  const handleConsoleSubmit = () => {
    // Process the consoleInput (e.g., execute a command)
    // For this example, let's just echo the input
    setConsoleOutput([...consoleOutput, `> ${consoleInput}`]);
    setConsoleInput('');
  };
  const a = "dsdsd"

  const tabs = ['Elements','Console',  'Network', 'Sources', 'Performance'];

  return (
    <div className="flex flex-col" >
      <div className="p-2 bg-gray-400">
        <div className="flex">
        <img src={inspect} className="w-6 mr-6 hover:bg-gray-300" alt="inspect-icon" />
      <img src={toggle} className="w-6 hover:bg-gray-300" alt="toggle-device" />
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`px-4 py-2 ${
                activeTab === tab
                  ? 'bg-gray-300'
                  : ' hover:bg-gray-300'
              }`}
              
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
      <div className=" ">
        {activeTab === 'Console' && (
          <>
          <div >
            <div className='flex flex-row bg-gray-400 p-2'>
          <img src={sidebar} className="w-5 mr-6  hover:bg-gray-300" alt="sidebar" />
          <img src={stop} className="w-5 mr-6 hover:bg-gray-300" alt="stop-icon" />
          <p>top&nbsp;</p>
          <img src={downArr} className="w-2 mr-6 hover:bg-gray-300" alt="down-arr" />
          <img src={eye} className="w-5 mr-6 hover:bg-gray-300" alt="eye-icon" />
          <input type="text" defaultValue="Filter" readOnly className='w-15 text-gray-500 bg-gray-300'/>
          <img src={settings} className="w-5 ml-2 mr-96 hover:bg-gray-300" alt="settings-icon" />
          </div>
          <div className='ml-2 pt-6'>
          <span >{'>'} Shubhada.origin</span>
          </div>
          <span className='text-gray-600 ml-2'> {'->'} "Pune, India"</span>
          <br/>
          <div className='ml-2 pt-2'>
          <span>{'>'} Shubhada.education</span>
          </div>
          <span className='text-gray-600 ml-2'> {'->'} "Syracuse University"</span>
          <div className='ml-2 pt-2'>
          <span>{'>'} Shubhada.major</span>
          </div>
          <span className='text-gray-600 ml-2'> {'->'} "Computer Science"</span>
          <div className='ml-2 pt-2'>
          <span>{'>'} Shubhada.workExperience.latest</span>
          </div>
          <span className='text-gray-600 ml-2'> {'->'} "Company: TruWeather Solutions Inc." <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; "Position: Software Engineer" </p></span>
          <div className='ml-2 pt-2'>
          <span>{'>'} Shubhada.interests</span>
          </div>
          <span className='text-gray-600 ml-2'> {'->'} "Drawing, Cooking, Yoga, Podcasts, Music" </span>
          </div>
          </>
        )}
        {/* Render other tab content here */}
      </div>
    </div>
  );
};

export default Console;
