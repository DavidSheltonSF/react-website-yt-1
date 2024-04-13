import "./Cards.css"
import CardsItem from "./ CardsItem"
/*
import img9 from "../../public/images/img-9.jpg"
import img2 from "../../public/images/img-2.jpg"
import img3 from "../../public/images/img-3.jpg"
import img4 from "../../public/images/img-4.jpg"
import img8 from "../../public/images/img-8.jpg"
*/


function Cards({title, cardList}){
  return <>
    <div className="cards">
      {title ? <h1>{title}</h1> : ''}
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
           {cardList.map((element, index) => {
             return <>
               <CardsItem
                src={element.src}
                text={element.text}
                label={element.label}
                path={element.path}
               />
             </>
           })}
          </ul>
        </div>
      </div>
    </div>
  </>
}

export default Cards;