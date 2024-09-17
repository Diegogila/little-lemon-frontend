import CardContainer from "../CardContainer/CardContainer";
import { PrimaryButton } from "../PrimaryButton/PrimaryButton";
import HighlightCard from "../HighlightCard/HighlightCard";
import './Specials.css'

function Specials(){
    return (
        <section className="specials-section">
            <div className="specials__title">
                <h2 className="section-title">This week specials!</h2>
                <PrimaryButton text="Online Menu"/>
            </div>
            <CardContainer>
                <HighlightCard/>
                <HighlightCard/>
                <HighlightCard/>
            </CardContainer>
        </section>
    )
}

export default Specials;