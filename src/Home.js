import { Link } from "react-router-dom";
import './Home.css';

function Home() {
  const navLinks = [
    {
      display: "HOME",
      url: "/",
    },
    {
      display: "VIEW ALL SERVICE MEMBER",
      url: "/viewServiceMember",
    },
    {
      display: "ADD SERVICE MEMBER",
      url: "/addServiceMember",
    },
    // {
    //   display: "UPDATE SERVICE MEMBER",
    //   url: "/updateServiceMember",
    // },
    // {
    //   display: "DELETE SERVICE MEMBER",
    //   url: "/deleteServiceMember",
    // },
  ];

  return (
    <ul className="nav-links">
      {navLinks.map((item, index) => (
        <li key={index} className="nav-item">
          <Link to={item.url}>{item.display}</Link>
        </li>
      ))}
    </ul>
  );
}

export default Home;
