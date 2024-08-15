import Header from '../components/Header';
import AboutSection from '../components/About';
import Footer from '../components/Footer';
import Intro from '../components/Intro';
import Services from '../components/Services';
import MyProjects from '../components/MyProjects';
import TestimonialSection from '../components/Testimonial';
import Contact from "../components/Contact"

export default function Home() {
  return (
    <>
      <div className="min-w-[1920px] min-h-[960px] w-full flex flex-col bg-white">
        <Header />
        <main className="flex flex-col items-center justify-between flex-grow">
          <Intro />
          <AboutSection />
          <Services />
          <MyProjects/>
          <TestimonialSection/>
          <Contact/>
        </main>
        <Footer />
      </div>
    </>
  );
}
