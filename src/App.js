import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeContainer from './HomeContainer';
import Console from './Console';
import me from './mee.jpg';
import './App.css';
import Navbar from './Navbar';
import linkedin from './linkedin.svg'
import gmail from './gmail.svg';
import './App.css'; 
import { useEffect } from 'react';
import git from './git.svg';

import { NotionRenderer } from 'react-notion';

import 'react-notion/src/styles.css';
function App() {
  const [isHovered, setIsHovered] = useState(false);

  const toggleGrayscale = () => {
    setIsHovered(!isHovered);
  };
  const [data, setData] = useState({});

  useEffect(() => {
    // notion-api-worker
    fetch(
      'https://notion-api.splitbee.io/v1/page/dacbe05e600d4ad58b03ab2f4af5ee3e'
    )
      .then((res) => res.json())
      .then((data) => setData(data));
      console.log(data,"sdsdsd")
  }, []);

  const imageStyle = {
    filter: isHovered ? 'grayscale(100%)' : 'grayscale(0%)',
    transition: 'filter 0.3s ease',
  };

  return (
    <div className="App min-h-screen bg-cloud bg-cover ">
    <div className="overflow-x-hidden"> 
      <div className="flex justify-between">
        <div className="w-72 mt-4 justify-center items-center">
          <Navbar />
          {/* <NotionRenderer blockMap={data} /> */}
          </div>
          <div className='flex flex-row justify-center items-center w-80 mt-56'>
          <p className="mt-10 mr-20 font-baskerville text-[60px] font-semibold antialiased" style={{ fontFamily: 'Baskerville, Times New Roman, serif' }}>Hi there 👋 Shubhada here</p>
          <img
              src={me}
              alt="Image"
              onMouseEnter={toggleGrayscale}
              onMouseLeave={toggleGrayscale}
              style={imageStyle}
            />        
          </div>
   
        <div className="w-1/4 flex flex-col  border-l border-gray-300"> 
            <Console />
        </div>
      </div>
        <Routes>
           <Route path="/" element={<HomeContainer activeLink="home" />} />
           <Route path="/blog" element={<HomeContainer activeLink="blog" />} />
          <Route path="/work" element={<HomeContainer activeLink="work" />} />
          <Route path="/about" element={<HomeContainer activeLink="about" />} />

        </Routes>
      </div>
      <div className="fixed bottom-5 left-5 flex items-center">
        <div className="flex items-center">
          <p className='text-sm'>&copy; 2023 by Shubhada Mohite</p>
        </div>
        
        <div className="fixed bottom-5 right-5 flex mr-85">
        <a href="https://www.linkedin.com/in/shubhadamohite/">
          <img src={linkedin} className="ml-3 w-6" alt="linkedin"  />
          </a>
          <a href="mailto:shmohite@syr.edu">
          <img src={gmail} className="ml-3 w-6" alt="gmail" />
          </a>
          <a href="https://github.com/shubhadamohite">
          <img src={git} className="ml-3 w-6 h-6" alt="gmail" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
