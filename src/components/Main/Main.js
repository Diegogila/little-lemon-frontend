import AboutUs from '../AboutUs/AboutUs';
import Hero from '../Hero/Hero';
import Specials from '../Specials/Specials';
import Testimonials from '../Testimonials/Testimonials';
import './Main.module.css'

function Main(){
    return (
        <main>
            <Hero/>
            <Specials/>
            <Testimonials/>
            <AboutUs/>
        </main>
    )
}

export default Main;