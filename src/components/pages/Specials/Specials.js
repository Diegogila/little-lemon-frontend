import CardContainer from "../../cards/CardContainer/CardContainer";
import HighlightCard from "../../cards/HighlightCard/HighlightCard";
import "./Specials.css";
import greekSaladImage from "../../../assets/images/greek-salad.jpg";
import bruchettaImage from "../../../assets/images/bruchetta.svg";
import lemonDessertImage from "../../../assets/images/lemon-dessert.jpg";
import { CallToAction } from "../../CallToAction/CallToAction";

const recipes = [
  {
    title: "Greek Salad",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis ",
    price: 10.50,
    image: greekSaladImage,
  },
  {
    title: "Bruchetta",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis ",
    price: 7.0,
    image: bruchettaImage,
  },
  {
    title: "Lemod Dessert",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis ",
    price: 12.20,
    image: lemonDessertImage,
  },
];

function Specials() {
  return (
    <section className="specials-section">
      <div className="specials__title">
        <h2 className="section-title">This week specials!</h2>
        <CallToAction text="Online Menu" />
      </div>
      <CardContainer>
        {recipes.map((hl,i) => {
            return <HighlightCard
            key={i}
            title={hl.title}
            price={hl.price.toFixed(2)}
            description={hl.description}
            image={hl.image}/>
        })}
      </CardContainer>
    </section>
  );
}

export default Specials;
