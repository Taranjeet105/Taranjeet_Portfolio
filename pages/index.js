import AboutMe from '../components/AboutMe/AboutMe';
import Education from '../components/Education/Education';
import Experience from '../components/Experience/Experience';
import Header from '../components/Header/Header';
import Projects from '../components/Projects/Projects';
const App=()=>{
  return(
    <>
      {/* <Header/> */}
      <AboutMe/>
      <Projects/>
      <Education/>
      <Experience/>
    </>
  )
}
export default App