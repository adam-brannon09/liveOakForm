import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Acorn from "../assets/images/liveOakAcorn.png";

function Footer() {
  return (
    <footer className="footer items-center flex justify-between p-4 bg-white">
      <aside className=" grid-flow-col">
        {/* logo icon */}
        <a href="https://liveoakfiber.com/">
          <img src={Acorn} alt="Live Oak Acorn" className="acorn" />
        </a>
      </aside>
      <div>
        <p className="lof-blue-text">
          © 2024 LiveOak Fiber | All Rights Reserved.
        </p>
      </div>

      {/* links to social media */}
      <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end lof-blue-text">
        <a
          href="https://www.facebook.com/LiveOakFiber"
          className="btn btn-ghost text-xl"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://twitter.com/liveoakfiber"
          className="btn btn-ghost text-xl"
        >
          <FaXTwitter />
        </a>
        <a
          href="https://www.linkedin.com/company/liveoak-fiber/"
          className="btn btn-ghost text-xl"
        >
          <FaLinkedinIn />
        </a>
      </nav>
    </footer>
  );
}

export default Footer;

// return (
//   <footer className="footer items-center p-4 bg-white">
// <aside className=" grid-flow-col">
//   {/* logo icon */}
//   <a href="https://liveoakfiber.com/"><img src={Acorn} alt="Live Oak Acorn" className="acorn"/></a>

// </aside>
// <p className="lof-blue-text ml-48">© 2024 LiveOak Fiber | All Rights Reserved.</p>
// {/* links to social media */}
// <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end lof-blue-text">
//  <a href="https://www.facebook.com/LiveOakFiber" className="btn btn-ghost text-xl"><FaFacebookF/></a>
//  <a href="https://twitter.com/liveoakfiber" className="btn btn-ghost text-xl"><FaXTwitter/></a>
//  <a href="https://www.linkedin.com/company/liveoak-fiber/" className="btn btn-ghost text-xl"><FaLinkedinIn/></a>
// </nav>
// </footer>
// )
