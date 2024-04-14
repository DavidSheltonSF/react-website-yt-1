import "./Cards.css"
import CardsItem from "./ CardsItem"


function Cards({title, cardList, sections}){

  title = (title) ? title : 'Cards Title'
  cardList = (cardList) ? cardList : [
    {src: "/", text: "This is a card", label: "label card", path: "/"},
    {src: "/", text: "This is a card", label: "label card", path: "/"}
  ]
  sections = (sections) ? sections : false


  if (sections) {
    return <>
      <div className="cards">
        {title ? <h1>{title}</h1> : ''}
        <div className="cards__container">
          {
            // Iter on each section
            cardList.map((section, sectionIndex) => {
              return <div key={`div${sectionIndex}`} className="cards__wrapper">
                  <ul key={`ul${sectionIndex}`} className="cards__items">
                    { 
                      // Render each card
                      section.map((element, index) => {
                        return <CardsItem
                            key={`caritem${index} - ${sectionIndex}`}
                            src={element.src}
                            text={element.text}
                            label={element.label}
                            path={element.path}
                          />
                      })
                    }
                  </ul>
                </div>
            })
          }
        </div>
      </div>
    </>
  }

  return <>
      <div className="cards">
        {title ? <h1>{title}</h1> : ''}
        <div className="cards__container">
          <div className="cards__wrapper">
            <ul className="cards__items">
              {
                // Render each card
                cardList.map((element, index) => {
                  return <CardsItem
                      key={`caritem${index}`}
                      src={element.src}
                      text={element.text}
                      label={element.label}
                      path={element.path}
                    />
                })
              }
            </ul>
          </div>
        </div>
      </div>
    </>
  
  
}

export default Cards;