import './App.css';
import img from './Components/image/image.jpg'
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import Projects from './Components/Projects';
import Join from './Components/Join';
import AboutSec from './Components/AboutSec';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {

  return (
    <>
      <Navbar />
      <Header imgsrc={img}
              title='I am Siraj - A Frontend software engineer' 
              content="I am a front-end develper with 1-year experience in React js. I am familiar with responsive website design and a firm believer in the mobile-first approach. Throughout my career as a front-end developer, I've emphasized the importance of scalable and well-documented code."
      />

      <Projects sname='Projects' />
      
       <Join jointxt="Want to Talk ?" 
             joinbtntxt="let's talk"
             mailto ='mailto:sirajbhutta50@gmail.com'
      />
      <AboutSec sname='About Me' />
      <Contact main='Get in Touch'
               chead="What's Next?"
               ctxt='I’m looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!'
               btxt='Say hello'
               mailto ='mailto:sirajbhutta50@gmail.com'
               social='you can find me here sometime'
      />
      <Footer footer=' 2021 _____ @sirajofcl '/>
    </>
  )
}

export default App;
