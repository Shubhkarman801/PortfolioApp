// App.jsx
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { createBrowserRouter, RouterProvider, useNavigate } from 'react-router-dom';
import { Element, Link as ScrollLink } from 'react-scroll';
import './App.css';
import Hello from './components/Hello';
import AnimatedParagraph from './components/AnimatedParagraph';
import ContactCard from './components/ContactCard';
import video from './assets/video.mp4'
import photo from './assets/project.png'
import insta from './assets/insta.png'
import lin from './assets/lin.png'
import git from './assets/git.png'
import ExpandIconButton from './components/ExpandIconButton';
import { useState, useEffect } from 'react';
import Perloader from './components/Perloader';



const Home = (props) => {
  
  const navigator = useNavigate();


  
  if(props.loading) return <Perloader/>;

  return (
    <div className="relative min-h-screen text-white flex flex-col items-center font-poppins">
      {/* Background Video */}
      <video
        src={video}
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
      />

      {/* Navigation Bar */}
      <nav className="fixed top-4 w-120 flex justify-between gap-4 p-4 bg-black/60 z-50 items-center rounded-lg h-12">
        <div>
          <ScrollLink to="hero" smooth={true} duration={500} className="cursor-pointer hover:text-purple-400 p-2 transition-colors transition-1 ">Home</ScrollLink>
          <ScrollLink to="intro" smooth={true} duration={500} className="cursor-pointer hover:text-purple-400 p-2 transition-colors transition-1 ">About Me</ScrollLink>

          <ScrollLink to="projects" smooth={true} duration={500} className="cursor-pointer hover:text-purple-400 p-2 transition-colors transition-1 ">Projects</ScrollLink>
          <ScrollLink to="contact" smooth={true} duration={500} className="cursor-pointer hover:text-purple-400 p-2 transition-colors transition-1">Contact</ScrollLink>
        </div>

        <p onClick={() => navigator('/about')} className="cursor-pointer hover:text-purple-400 p-2 transition-colors transition-1">About</p>
      </nav>

      {/* Sections */}
      <div className='backdrop-blur-md w-full bg-black/60'>
        <Element name="hero" className="min-h-screen w-full flex items-center justify-center">
          <Hello />
        </Element>

        <Element name="intro" className="min-h-screen w-full flex flex-col items-center justify-center px-12 pt-24 pb-12">
          <div className="max-w-4xl font-poppins">
            <AnimatedParagraph>
              Hello! 👋 I’m Shubhkarman Singh — a Computer Engineering undergrad at Thapar University, hailing from the colorful city of Bathinda 🌆.
            </AnimatedParagraph>

            <AnimatedParagraph>
              I’m a frontend enthusiast who loves building for the web — from sleek landing pages to interactive dashboards. Whether it’s with HTML, CSS, JavaScript, React, Tailwind, or even trusty ol’ Bootstrap, I’m always crafting something clean, responsive, and just plain satisfying to look at. 🎨💻
            </AnimatedParagraph>

            <AnimatedParagraph>
              When I’m not coding away in my editor, you’ll probably catch me solving C++ problems, experimenting with quirky UI animations, or trying to recreate that cool effect I saw on some random Dribbble shot. I enjoy the challenge of turning ideas into interactive experiences and bringing pixels to life with code.
            </AnimatedParagraph>

            <AnimatedParagraph>
              I’m super passionate about learning new tools, collaborating with creative folks, and pushing my skills beyond the comfort zone. Whether it's a hackathon, a side project, or just geeking out over UI/UX with friends — I'm always down.
            </AnimatedParagraph>

            <AnimatedParagraph>
              Let’s build something amazing together. 🚀 Coffee, code, or collabs — hit me up!
            </AnimatedParagraph>
          </div>
        </Element>

        <Element name="projects" className="min-h-screen flex flex-col justify-center w-full ">
          <div className='mx-32'>
            <AnimatedParagraph>
              <h2 className="text-3xl text-center m-24">My most recent work:-</h2>
            </AnimatedParagraph>
            <AnimatedParagraph delay='0.2'>
              <div className='flex flex-row items-center justify-center '>
                <div className='max-w-100 mx-6'>
                  <h3 className='text-2xl'>Windows 7 Web Simulator</h3>
                  <p className='text-lg text-justify my-2 font-poppins'>A full-screen, interactive web application that mimics the classic Windows 7 desktop environment — built entirely with React and Tailwind CSS.
                    This project reimagines the nostalgic Windows experience directly in the browser, complete with draggable desktop icons, a functional taskbar, animated windows, and even a start menu clone.</p>
                </div>
                <div className='w-auto rounded-md mx-16'>
                  <img src={photo} className='rounded-md border-1 border-white w-100'></img>
                </div>
              </div>

            </AnimatedParagraph>
            <AnimatedParagraph delay='0.4'>
              <div className='flex flex-col items-center justify-center m-24'>
                <button className='bg-white text-black rounded-md px-2 border-1 border-black hover:scale-105 transition-all duration-300 text-lg' onClick={() => window.open('https://desktop-web-simul.vercel.app', '__blank')}>Check It Out </button>
              </div>
            </AnimatedParagraph>
          </div>
        </Element>



        <Element name="contact" className="min-h-screen flex items-center justify-center w-full">
          <ContactCard />
        </Element>


      </div>
    </div>
  );
};

const About = (props) => {
  
  const navigator = useNavigate();
  return(
  <div className="min-h-screen  text-white flex items-center justify-center">
    <nav className="fixed top-4 w-120 flex justify-between gap-4 p-4 bg-black/60 z-50 items-center rounded-lg h-12">
        <div>
          <p className="cursor-pointer hover:text-purple-400 p-2 transition-colors transition-1 font-poppins" onClick={()=> navigator('/')}>Home</p>
          
        </div>

        <p onClick={() => navigator('/about')} className="cursor-pointer hover:text-purple-400 p-2 transition-colors transition-1 font-poppins">About</p>
      </nav>
    <video
        src={video}
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
      />
    <div className='min-h-screen bg-black/60 backdrop-blur-md w-full flex flex-col items-center justify-center'>

      <div className='bg-[#FAF9F6] w-180  rounded-md text-black font-poppins'>
          <h1 className='text-center  text-2xl my-2'>Crafted With ❤️</h1>
          <div className='p-4 m-2 flex flex-col items-center justify-center'>
            <h2 className='text-lg'>Connect With Me:-</h2>
            <ExpandIconButton imgId={insta} App='Instagram' url='https://www.instagram.com/savvy_rp06?igsh=MXZtc2Y5d2U5YXluaw=='/>
            <ExpandIconButton imgId={lin} App='LinkedIn' url='https://www.linkedin.com/in/shubhkarman-singh-2712342b4'/>
            <ExpandIconButton imgId={git} App='GitHub' url='https://github.com/Shubhkarman801'/>
          </div>
      </div>

    </div>
  </div>)
};

function App() {

  const [loading,setLoading] = useState(true);

    useEffect(() => {
    const timer = setTimeout(()=>{
      setLoading(false)
    },6000)
  
    return () => {
      clearTimeout(timer)
    }
  },[])
  
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home loading = {loading} />,
    },
    {
      path: '/about',
      element: <About />,
    },
    
  ]);

  return <RouterProvider router={router} />;
}

export default App;
