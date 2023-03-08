import Aboutexe from "../components/en/Aboutexe";
import Announcements from "../components/en/Announcements";
import Domesticprojects from "../components/en/Domesticprojects";
import Footer from "../components/en/Footer";
import Navbar from "../components/en/Navbar";
import Overseasprojects from "../components/en/Overseasprojects";
import Projects from "../components/en/Projects";
import Recruitment from "../components/en/Recruitment";
import Sharedhouse from "../components/en/Sharedhouse";
import Slider from "../components/en/Slider";


const MainLayout = ({children}) => {
  return (
    <>
    <Navbar/>
    {children}
    <Footer/>
    </>
  )
}

export default MainLayout