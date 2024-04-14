import Cards from "../Cards";
import img9 from "../../../public/images/img-9.jpg"
import img2 from "../../../public/images/img-2.jpg"
import img3 from "../../../public/images/img-3.jpg"
import img4 from "../../../public/images/img-4.jpg"
import img8 from "../../../public/images/img-8.jpg"

function Services(){
  const cardList = [
    {
      src: img3,
      text: "Hospede-se em um dos nossos hoteis 5 estrelas", 
      label: "Hospedagem", 
      path: "/services"
    },
    {
      src: img4,
      text: "Viage para os mais variádos lugares", 
      label: "Viagem", 
      path: "/services"
    },
    {
      src: img8,
      text: "Relache em nosso luxuoso spar nas ilhas vulcânicas", 
      label: "Spar", 
      path: "/services"
    }
  ]

  return <>
     <section className="services">
     <Cards title="Services" cardList={cardList}/>
    </section>
  </>
}

export default Services;