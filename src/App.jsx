import Features from "./components/Features";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

export default function App() {
  return (
   <div className="min-h-screen bg-white">
      {/* Navbar */}
      <Navbar/>

      <div className="pt-16">
      {/* hero */}
      <Hero/>
      <Features/>
      {/* testimonials */}
      {/* pricing */}
      {/* contact */}
      {/* footer */}
      </div>
   </div>
  )
}