import Navbar from "../navbar/Navbar";
import Header from "../header/Header";
import UpcomingEvents from "../upcomingevents/UpcomingEvents";
import PastEvents from "../pastevents/PastEvents";

const Layout = () => {
  return (
    <div>
    <Navbar></Navbar>
      <Header></Header>
      <UpcomingEvents></UpcomingEvents>
      <PastEvents></PastEvents>
    </div>

  );
};

export default Layout;