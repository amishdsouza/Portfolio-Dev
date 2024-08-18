import Image from "next/image";
import Logo from "@/assets/logosaas.png";
import MenuIcon from "@/assets/menu.svg";

// export const Header = () => {
//   return (
//     <div className="flex justify-center items-center relative top-3 left-0 w-full">
//       <nav className="flex gap-1 p-0.5 border-white/15 rounded-full bg-black/80 backdrop-blur">
//         <a href="#" className="nav-item">
//           Home
//         </a>
//         <a href="#" className="nav-item">
//           About
//         </a>
//         <a href="#" className="nav-item">
//           Experience
//         </a>
//         <a href="#" className="nav-item">
//           Education
//         </a>
//         <a href="#" className="nav-item">
//           Projects
//         </a>
//         <a href="#" className="nav-item">
//           Certification
//         </a>
//         <a
//           href="#"
//           className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"
//         >
//           Projects
//         </a>
//       </nav>
//     </div>
//   );
// };

export const Header = () => {
  return (
    <header className="sticky top-0 backdrop-blur-sm z-20">
      <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-3">
        <div className="inline-flex gap-1 items-center">
          <p> Amish Dickson Dsouza</p>
        </div>
      </div>
      <div className="py-5">
        <div className="px-20">
          {/* <div className="container"> */}
          <div className="flex items-center justify-between">
            <Image src={Logo} alt="logo" height={40} width={40} />

            <MenuIcon className="h-5 w-5 md:hidden" />
            <nav className="hidden md:flex gap-6 text-black/60 items-center">
              <a href="#"> Home </a>
              <a href="#"> About </a>
              <a href="#"> Experience </a>
              <a href="#"> Education </a>
              <a href="#"> Certification </a>
              <a href="#"> Projects </a>
              <button className="btn btn-primary">Contact</button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
//Header complete
