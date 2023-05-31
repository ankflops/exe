import Aboutexe from "../components/Aboutexe";
import Domesticprojects from "../components/Domesticprojects";
import Projects from "../components/Projects";
import Recruitment from "../components/Recruitment";
import Sharedhouse from "../components/Sharedhouse";
import Slider from "../components/Slider";
import MainLayout from "../layout/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <Slider />
      <Aboutexe />
      <Recruitment />
      <Domesticprojects />
      <Sharedhouse />
      <Projects />
    </MainLayout>
  );
}
