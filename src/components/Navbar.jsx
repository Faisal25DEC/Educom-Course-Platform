import Logo from "../assets/logo.png";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const path = useLocation().pathname;
  const links = [
    {
      id: 1,
      title: "Courses",
      href: "/",
    },
    {
      id: 2,
      title: "About us",
    },
    {
      id: 3,
      title: "Contact",
    },
  ];
  return (
    <div className="flex justify-between items-center w-[80%] m-auto py-6">
      <div className="w-12 h-4 flex items-center gap-2">
        <img src={Logo} alt="Logo" />
        <span className="font-bold text-neutral-800">Educom</span>
      </div>
      {path !== "/login" && path !== "/register" && (
        <ul className="flex items-center gap-4 font-semibold cursor-pointer">
          {links.map((item) => (
            <Link to={item.href}>{item.title}</Link>
          ))}
          <Link to="/register">
            <button className="p-2 text-neutral-800 text-center border-[1px] border-[#3981ed] rounded-md">
              Register
            </button>
          </Link>

          <Link to="/login">
            {" "}
            <button className="px-3 py-2 text-white text-center bg-[#3981ed] rounded-md  ">
              Login
            </button>
          </Link>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
