import Homepage from '../pages/Homepage/Homepage';
import Specials from '../pages/Specials/Specials';
import './Main.module.css'
import CustomersSay from '../pages/CustomersSay/CustomersSay';
import Chicago from '../pages/Chicago/Chicago';

function Main(){
    return (
        <main>
            <Homepage/>
            <Specials/>
            <CustomersSay/>
            <Chicago/>
        </main>
    )
}

export default Main;