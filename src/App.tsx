import About from "@/components/About";
import HeroSlider from "@/components/HeroSlider";

const App = () => {
  return (
    <div className=" max-w-[90rem] mx-auto min-h-screen overflow-hidden">
      <HeroSlider />
      <About />
    </div>
  );
};
export default App;
