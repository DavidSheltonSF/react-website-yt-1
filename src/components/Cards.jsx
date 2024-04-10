import CardsItem from "./ CardsItem";
import "./Cards.css"
import img9 from "../../public/images/img-9.jpg"
import img2 from "../../public/images/img-2.jpg"
import img3 from "../../public/images/img-3.jpg"
import img4 from "../../public/images/img-4.jpg"
import img8 from "../../public/images/img-8.jpg"

function Cards(){
  return <>
    <div className="cards">
      <h1>Check out these EPIC Destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardsItem 
            src={img9}
            text="Explore the hidden waterfall deep inside the Amazon Jungle"
            label="Adventure"
            path="/services"
            />
            <CardsItem 
            src={img2}
            text="Travel through the Islands of Bali in a private Cruise"
            label="Luxury"
            path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardsItem 
            src={img3}
            text="Set Sail in the Atlantic Ocean Uncharted Waters"
            label="Mistery"
            path="/services"
            />
            <CardsItem 
            src={img4}
            text="Experience Football on Top of Mountains"
            label="Adventure"
            path="/services"
            />
            <CardsItem 
            src={img8}
            text="Ride through the Sahara Desert camel tour"
            label="Adrenaline"
            path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  </>
}

export default Cards;