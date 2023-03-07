// import { Link, useMatch, useResolvedPath } from "react-router-dom";
// import logo from "./aqlogo.png";
// import { useState, useEffect } from "react";
// import { GiShoonerSailboat } from "react-icons/gi";
// import axios from "axios";

// export default function Navbar() {
//   const [isSignedIn, setIsSignedIn] = useState(false);
//   const [isSignedInAdmin, setIsSignedInAdmin] = useState(false);

//   // const handleLogout = () => {
//   //   axios
//   //     .post("http://localhost:8080/logout", null, {
//   //       headers: {
//   //         Authorization: `Bearer ${localStorage.getItem("token")}`,
//   //       },
//   //     })
//   //     .then((res) => {
//   //       console.log(res.data);
//   //       localStorage.removeItem("token");
//   //       localStorage.removeItem("user_ID");
//   //       window.location = "/";
//   //       setIsSignedInAdmin(false);
//   //       setIsSignedIn(false);
//   //     })
//   //     .catch((err) => {
//   //       console.log(err);
//   //       console.log("there was an error");
//   //     });
//   // };

//   useEffect(() => {
//     if (localStorage.getItem("accountType") === "Admin") {
//       setIsSignedInAdmin(true);
//       setIsSignedIn(true);
//     } else if (localStorage.getItem("accountType") === "User") {
//       setIsSignedIn(true);
//     }
//   }, []);
//   let iconStyles = { color: "white", fontSize: "1.3em" };
//   return (
//     <div className="nav-container">
//       <div className="navbar">
//         <nav className="nav">
//           <Link to="/" className="site-title">
//             <img src={logo} alt="logo" width="151" height="43" />
//           </Link>
//           <div className="nav-right">
//             <ul>
//               <CustomLink to="/map">Map</CustomLink>
//               <CustomLink to="/testkit">Test Kit</CustomLink>
//               <CustomLink to="/game">Game</CustomLink>
//               <CustomLink to="/donations">Donations</CustomLink>
//               <CustomLink to="/shop">Shop</CustomLink>
//               {isSignedIn && (
//                 <CustomLink to="/cart">
//                   <GiShoonerSailboat style={iconStyles} />
//                 </CustomLink>
//               )}
//               {isSignedIn && (
//                 <CustomLink
//                   to="/accounts"
//                   id="account-btn"
//                   className="account-btn"
//                 >
//                   Account
//                 </CustomLink>
//               )}
//               {isSignedInAdmin && (
//                 <CustomLink
//                   to="/admin"
//                   id="account-btn"
//                   className="account-btn"
//                 >
//                   Admin Interface
//                 </CustomLink>
//               )}
//             </ul>
//             {!(isSignedIn || isSignedInAdmin) && (
//               <CustomLink
//                 to="/accounts/login"
//                 id="signin-btn"
//                 className="signin-btn button"
//               >
//                 Sign In
//               </CustomLink>
//             )}
//           </div>
//         </nav>
//       </div>
//     </div>
//   );
// }
// function CustomLink({ to, children, ...props }) {
//   const resolvedPath = useResolvedPath(to);
//   const isActive = useMatch({ path: resolvedPath.pathname, end: true });
//   return (
//     <li className={isActive ? "active" : ""}>
//       <Link to={to} {...props}>
//         {children}
//       </Link>
//     </li>
//   );
// }

import { Link, useMatch, useResolvedPath } from "react-router-dom";
import logo from "./aqlogo.png";
import { useState, useEffect } from "react";
import { GiShoonerSailboat } from "react-icons/gi";

export default function Navbar() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [isSignedInAdmin, setIsSignedInAdmin] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("token")) {
      if (localStorage.getItem("accountType") === "Admin") {
        setIsSignedInAdmin(true);
        setIsSignedIn(true);
      } else if (localStorage.getItem("accountType") === "User") {
        setIsSignedIn(true);
      }
    }
  }, []);
  let iconStyles = { color: "white", fontSize: "1.3em" };
  return (
    <div className="nav-container">
      <div className="navbar">
        <nav className="nav">
          <Link to="/" className="site-title">
            <img src={logo} alt="logo" width="151" height="43" />
          </Link>
          <div className="nav-right">
            <ul>
              <CustomLink to="/map">Map</CustomLink>
              <CustomLink to="/testkit">Test Kit</CustomLink>
              <CustomLink to="/game">Game</CustomLink>
              <CustomLink to="/donations">Donations</CustomLink>
              <CustomLink to="/shop">Shop</CustomLink>
              {isSignedIn && (
                <CustomLink to="/cart">
                  <GiShoonerSailboat style={iconStyles} />
                </CustomLink>
              )}
              {isSignedIn && (
                <CustomLink
                  to="/accounts"
                  id="account-btn"
                  className="account-btn"
                >
                  Account
                </CustomLink>
              )}
              {isSignedInAdmin && (
                <CustomLink
                  to="/admin"
                  id="account-btn"
                  className="account-btn"
                >
                  Admin Panel
                </CustomLink>
              )}
            </ul>
            {!isSignedIn && (
              <CustomLink
                to="/accounts/login"
                id="signin-btn"
                className="signin-btn button"
              >
                Sign In
              </CustomLink>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
}
function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
