import SectionHeading from "../../Components/SectionHeading";
import Banner from "./Banner";
import CallUs from "./CallUs";
import Category from "./Category";
import Menu from "./Menu";
import Reviews from "./Reviews";

const Home = () => {
  return (
    <div>
     <Banner></Banner>
     <SectionHeading 
     title="From 11:00am to 10pm"
     heading="ORDER ONLINE">
     </SectionHeading>
     <Category></Category>
     <SectionHeading 
     title="Check it out"
     heading="FROM OUR MENU">
     </SectionHeading>
     <Menu></Menu>
     <SectionHeading 
     title="What our clints say"
     heading="Testimonials">
     </SectionHeading>
     <Reviews></Reviews>
     <CallUs></CallUs>
    </div>
  );
};

export default Home;

