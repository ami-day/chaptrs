import Navbar from "../navbar/Navbar"
import Header from "../header/Header"
import UpcomingEvents from "../upcomingevents/UpcomingEvents"

const Layout = () => {
  return (
    <div>
    <div>
    <Navbar></Navbar>
    </div>
    <div>
      <Header></Header>
    </div>
    <div>
      <UpcomingEvents></UpcomingEvents>
    </div>
    </div>

  );
};

export default Layout;