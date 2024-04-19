import Navbar from "./components/Navbar/navbar";
import Home from "./components/Home/home";
import About from "./components/About/about";
import Project from "./components/project/project";
import Contact from "./components/Contact/contact";
import Footer from "./components/footer/footer";
import Toaster  from "react-hot-toast";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Project/>
      <Contact/>
      <Toaster/>
      <Footer/>
      <Toaster/>
    </div>
  );
}

export default App;
