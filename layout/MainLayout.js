import Aboutexe from "../components/Aboutexe";
import Announcements from "../components/Announcements";
import Domesticprojects from "../components/Domesticprojects";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Overseasprojects from "../components/Overseasprojects";
import Projects from "../components/Projects";
import Recruitment from "../components/Recruitment";
import Sharedhouse from "../components/Sharedhouse";
import Slider from "../components/Slider";
import Swiper from "../components/Swiper";


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