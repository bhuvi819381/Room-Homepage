import About from "@/components/About";
import HeroSlider from "@/components/HeroSlider";

const App = () => {
  return (
    <div className=" min-h-screen max-w-[90rem] mx-auto border border-red-500">
      <HeroSlider />
      <About />
    </div>
  );
};
export default App;
