import Cover from "../../components/Cover/Cover";
import img from '../../assets/paralax/reservation_bg.jpg';
import CallToAction from "../Home/CallToAction/CallToAction";

const Reservation = () => {

    return (
        <div className="md:space-y-28">
            <Cover img={img} title='Reserve Your Table' description="Reserve your table for a smooth, stress-free dining experience."></Cover>

            <CallToAction></CallToAction>
        </div>
    );
};

export default Reservation;