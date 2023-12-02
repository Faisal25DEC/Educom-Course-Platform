import Logo from "../assets/logo.png";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
const Navbar = () => {
  const path = useLocation().pathname;
  const { auth, currentUser } = useSelector((state) => state.userReducer);
  const links = [
    {
      id: 1,
      title: "Courses",
      href: "/courses",
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
      <div className="flex items-center justify-between gap-4 w-[50%]">
        <div>
          <Link to="/">
            <div className=" flex items-center gap-2">
              <img src={Logo} alt="Logo" className="h-12 w-12" />
              <span className="font-bold text-neutral-800">Educom</span>
            </div>
          </Link>
        </div>

        <div>
          <input
            type="text"
            placeholder="Search For Courses"
            className="w-[27rem] h-[2.5rem] p-2 rounded-md border-[1px] border-neutral-400 outline-none"
          />
        </div>
      </div>
      {path !== "/login" && path !== "/register" && (
        <ul className="flex items-center gap-4 font-semibold cursor-pointer">
          {links.map((item) => (
            <Link to={item.href}>{item.title}</Link>
          ))}
          {!auth && (
            <Link to="/register">
              <button className="p-2 text-neutral-800 text-center border-[1px] border-[#3981ed] rounded-md">
                Register
              </button>
            </Link>
          )}

          {!auth && (
            <Link to="/login">
              {" "}
              <button className="px-3 py-2 text-white text-center bg-[#3981ed] rounded-md  ">
                Login
              </button>
            </Link>
          )}
          {auth && (
            <Link to={`/dashboard/${currentUser.id}`}>
              {currentUser.displayName}
            </Link>
          )}
          {auth && (
            <button className="px-3 py-2 text-white text-center bg-[#3981ed] rounded-md  ">
              Logout
            </button>
          )}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
