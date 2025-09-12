
import Navbar from "./components/navbar/Navbar";
import About from "./components/about/About";
import Partners from "./components/partners/Partners";
import Speakers from "./components/speakers/Speakers";
import Agenda from "./components/schedule/Schedule"
import Location from "./components/location/Location";
import './style.css'
import Footer from "./components/footer/Footer";
import Organizers from "./components/organizers/Organizers";
import Sponsors from "./components/sponsors/Sponsors";
import Link from "next/link";


export default function Home() {
  return (
    <div>
      <Navbar />
      <section id="welcome" className="flex justify-center">
        <div className="relative top-1/4 md:top-1/3 flex flex-col justify-center items-center font-bold h-[60%] w-[80%] md:h-[50%] md:w-[60%] bg-white/60 backdrop-blur-lg border border-white/20 shadow-lg rounded-lg p-6">
          <h1 className="text-3xl md:text-3xl lg:text-5xl 2xl:text-6xl text-[#353A3F] text-center">Second Edition</h1>
          <span className="md:text-lg lg:text-3xl 2xl:text-md text-[#9D5CFD] md:m-3 text-center">Catania joins the 55 Sponsored events worldwide!</span>
          <button className="bg-[#9D5CFD] hover:bg-[#924afc] text-white rounded text-center text-lg md:text-2xl font-bold mt-10 flex justify-center md:w-[60%] p-5"><Link target='blank' href={'https://cataniaqiskitfallfest25.eventbrite.com'}>Join the Fest, get the ticket!</Link></button>
        </div>
      </section>
      
      <About />
      <Partners />
      <Speakers />
      <Agenda/>
      <Location />
      <Sponsors />
      <Organizers/>
      <Footer/>

    </div>
  );
}
