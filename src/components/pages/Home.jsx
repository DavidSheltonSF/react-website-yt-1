import '../../App.css';
import HeroSection from '../HeroSection';
import Cards from '../Cards';
import Footer from '../Footer';
import img9 from "../../../public/images/img-9.jpg"
import img2 from "../../../public/images/img-2.jpg"
import img3 from "../../../public/images/img-3.jpg"
import img4 from "../../../public/images/img-4.jpg"
import img8 from "../../../public/images/img-8.jpg"

function Home() {

  const cardList1 = [
    {
      src: img9,
      text: "Explore the hidden waterfall deep inside the Amazon Jungle", 
      label: "Adventure", 
      path: "/services"
    },
    {
      src: img2,
      text: "Travel through the Islands of Bali in a private Cruise", 
      label: "Luxury", 
      path: "/services"
    },

  ]

  const cardList2 = [
    {
      src: img3,
      text: "Set Sail in the Atlantic Ocean Uncharted Waters", 
      label: "Mystery", 
      path: "/services"
    },
    {
      src: img4,
      text: "Experience Football on Top of Mountains", 
      label: "Adventure", 
      path: "/services"
    },
    {
      src: img8,
      text: "Ride through the Sahara Desert camel tour", 
      label: "Adrenaline", 
      path: "/services"
    }
  ]

  return <>
    <HeroSection/>
    <Cards title="Check out these EPIC Destinations!" cardList={cardList1}/>
    <Cards cardList={cardList2}/>
    <Footer/>
  </>
}

export default Home