import AboutUs from "../../components/AboutUs/AboutUs";
import Client from "../../components/Clients/Client";
import ContactUs from "../../components/contactUs/ContactUs";
import Project from "../../components/projects/Project";
import Services from "../../components/services/Services";

const Home = () => {
  return (
    <>
      <AboutUs />
      <Services />
      <Project />
      <Client/>
      <ContactUs />
    </>
  );
};

export default Home;
