import { useEffect, useRef } from "react";

// import Newlogin from "../../pages/LoginLayout/NewLogin";
import styles from './Layout.module.scss'
import { navItems } from "@/constant";
import Link from "next/link";

export default function Menu({
  show = false,
  onHide = () => { },
}) {
  const sidebar = useRef();
  const handleShow = () => {
    sidebar.current.classList.toggle(styles.active, show);
  };
//   const handleLocation = () => {
//     onHide(false);
//   };
  useEffect(handleShow, [show]);
//   useEffect(handleLocation, [location.pathname]);
  return (
    <div
      ref={sidebar}
      className={`${styles.sidebar} flex  lg:hidden fixed top-0 right-0 w-full h-full overflow-hidden`}
    >

      <div className={`${styles.sidebarMenu} bg-red-500 bg-opacity-90 flex flex-col gap-3 h-full`}>
        {navItems.header.map((item, index) => (
          <Link
            key={index}
            href={item.path}
            className={({ isActive }) =>
              `text-${isActive ? "white" : "gray-white"} w-100 text-start py-3 px-2`
            }
          >
            {item.label}
          </Link>
        ))}

        
        

      </div>
      <button
        className="hide-btn flex-1 opacity-0"
        onClick={() => onHide(false)}
      ></button>
    </div>
  );
}
