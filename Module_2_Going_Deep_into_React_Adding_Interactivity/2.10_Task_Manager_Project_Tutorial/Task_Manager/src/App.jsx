import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import HeroSec from "./components/Hero/HeroSec";
import TaskBoard from "./components/TaskList/TaskBoard";

function App() {
  return (
    <div>
      <Header />
      <div className="flex flex-col justify-center items-center">

      <HeroSec />
      <TaskBoard/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
