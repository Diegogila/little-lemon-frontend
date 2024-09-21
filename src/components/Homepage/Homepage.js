import Hero from './sections/Hero/Hero';
import Specials from './sections/Specials/Specials';
import CustomersSay from './sections/CustomersSay/CustomersSay';
import Chicago from './sections/Chicago/Chicago';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function Homepage(){
    return (
        <>
        <Header/>
        <main>
            <Hero/>
            <Specials/>
            <CustomersSay/>
            <Chicago/>
        </main>
        <Footer/>
        </>
    )
}

export default Homepage;