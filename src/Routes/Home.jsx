//import React from "react";
import Navbar from "../Components/Navbar";
import Header from "../Sections/Header";
//import images from "../../public/images/Header.png";
import images1 from "../../public/images/1.png";
import images2 from "../../public/images/2.png";
import images3 from "../../public/images/3.png";
import Promotion from "../Components/Promotion";
import Midsection from "../Sections/Midsection";
import Testimonial from "../Sections/Testimonial";
import Subscrive from "../Sections/Subscrive";
import Footer from "../Sections/Footer";
import Cardbox from "../Sections/Cardbox";
import About from "../Sections/About";
import Language from "../Sections/Language";
import Gujrati from "../Pages/Gujrati";
const data = [
  {
    title: "Master the elegance of Malayalam",
    para: "Hone your conversation skills, explore French literature, and open doors to international opportunities.",
    link: "kkk",
    img: images1,
    leftImage: true,
  },
  {
    title: "Connect With Your Roots in Hindi",
    para: "Rekindle your heritage, enhance your fluency, and gain a deeper understanding of Indian culture.",
    link: "kkk",
    img: images2,
    leftImage: false,
  },
  {
    title: "Command the Language of Gujrati",
    para: "Improve your grammar, vocabulary, and communication skills for professional success and academic pursuits..",
    link: Gujrati,
    img: images3,
    leftImage: true,
  },
  {
    title: "Master the Nobel Language of German",
    para: "Rekindle your heritage, enhance your fluency, and gain a deeper understanding of Indian culture.",
    link: "kkk",
    img: images2,
    leftImage: false,
  },
  {
    title: "Command the Global Language of Spanish",
    para: "Improve your grammar, vocabulary, and communication skills for professional success and academic pursuits..",
    link: "kkk",
    img: images3,
    leftImage: true,
  },
];

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Promotion />
      <Midsection data={data[0]} />
      <Midsection data={data[1]} />
      <Midsection data={data[2]} />
      <Cardbox />
      <Language />
      <Testimonial />
      <Subscrive />
      <Footer />
    </>
  );
};

export default Home;
