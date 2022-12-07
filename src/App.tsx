import React, {useState} from 'react';
import BottomNavBar from './components/others/BottomNavBar';
import NavBar from './components/others/NavBar';
import About from './components/sections/About';
import NavBarOptions from './components/sections/NavBarOptions';
import Outro from './components/sections/Outro';
import Projects from './components/sections/Projects';
import Reporting from './components/sections/Reporting';
import Security from './components/sections/Security';
import Teams from './components/sections/Teams';
import UnderTheHood from './components/sections/UnderTheHood';
import Workflows from './components/sections/Workflows';


function App() {

  const [showNav, setShowNav] = useState(false);

  return (
    <div className='bg-[#000212] min-w-full min-h-[100vh] flex flex-col justify-start items-center font-casual'
    >
      <NavBar setNavFun={() => setShowNav(previousState => !previousState)} navState={showNav}/>
      {showNav ? 
      (<NavBarOptions />)
      : (<div className='flex flex-col justify-start items-center'>
      <About />
      <Projects />
      <Reporting />
      <Teams />
      <UnderTheHood />
      <Workflows />
      <Security />
      <Outro />
      <BottomNavBar />
      </div>)}
    </div>
  );
}

export default App;
