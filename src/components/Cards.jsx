import CardsItem from "./ CardsItem";
import "./Cards.css"

function Cards(){
  return <>
    <div className="cards">
      <h1>Check out these EPIC Destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardsItem 
            src="images/img-9.jpg"
            text="Explore the hidden waterfall deep inside the Amazon Jungle"
            label="Adventure"
            path="/services"
            />
            <CardsItem 
            src="images/img-2.jpg"
            text="Travel through the Islands of Bali in a private Cruise"
            label="Luxury"
            path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardsItem 
            src="images/img-3.jpg"
            text="Set Sail in the Atlantic Ocean Uncharted Waters"
            label="Mistery"
            path="/services"
            />
            <CardsItem 
            src="images/img-4.jpg"
            text="Experience Football on Top of Mountains"
            label="Adventure"
            path="/services"
            />
            <CardsItem 
            src="images/img-8.jpg"
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