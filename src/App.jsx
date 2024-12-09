import Features from "./components/Features";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
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
      {/* testimonials */}
      {/* pricing */}
      {/* contact */}
      {/* footer */}
      </div>
   </div>
  )
}