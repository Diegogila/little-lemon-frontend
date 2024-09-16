import { PrimaryButton } from "../PrimaryButton/PrimaryButton";

function Specials(){
    return (
        <section className="Specials-section">
            <div className="specials__title">
                <h2>This week specials!</h2>
                <PrimaryButton text="Online Menu"/>
            </div>
            <CardContainer>
                <SepecialCard/>
                <SepecialCard/>
                <SepecialCard/>
            </CardContainer>
        </section>
    )
}

export default Specials;