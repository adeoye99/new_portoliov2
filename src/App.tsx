import React from 'react';
import './App.css';
import Header from './Layout/Header';
import Hero from './Layout/Hero';
import 'tailwindcss/tailwind.css';
import Skills from './Pages/Skills';
import MyProjects from './Pages/MyProjects';
import Contact from './Pages/Contact';
import Input from './Components/Input';


function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Skills/>
      <MyProjects/>
      <Contact/>
      {/* <Input/> */}
  
    </div>
  );
}

export default App;
