import Contact from "./components/Contact";
import Features from "./components/Features";
import { Footer } from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";

export default function App() {
  return (
   <div className="min-h-screen bg-white">
      {/* Navbar */}
      <Navbar/>

      <div className="pt-16">
      {/* hero */}
      <Hero/>
      <Features/>
      <Testimonials/>
      <Pricing/>  
      <Contact/>
      <Footer/>
     
    
      </div>
   </div>
  )
}