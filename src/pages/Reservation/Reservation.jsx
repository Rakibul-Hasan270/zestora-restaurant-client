import Cover from "../../components/Cover/Cover";
import img from '../../assets/paralax/reservation_bg.jpg';
import CallToAction from "../Home/CallToAction/CallToAction";
import Marquee from "react-fast-marquee";
import useAxiosPublic from "../../hooks/useAxiosPublic";


const Reservation = () => {
    const axiosSecure = useAxiosPublic();
    
    return (
        <div className="space-y-28">
            <Cover img={img} title='Reserve Your Table' description='Make every moment special with a guaranteed seat at our restaurant. Whether it’s a family dinner, a romantic evening, or a casual outing with friends, reserving your table ensures a smooth and stress-free dining experience. Skip the wait and let us welcome you with comfort and care the moment you arrive.'></Cover>

            {/* <SectionHeading heading='Plan Ahead, Dine in Comfort' subHeading='Secure your spot and enjoy a hassle-free dining experience. Book your table online in just a few clicks!'></SectionHeading> */}

            <Marquee>

            </Marquee>

            <CallToAction></CallToAction>
        </div>
    );
};

export default Reservation;