import "../Header/index.scss";
import { Link } from 'react-router-dom'
import { FaPhoneVolume } from "react-icons/fa6";

const Header = () => {
  return (
    <>
      <header>
        <div className="container">
          <div className="header">
            <img src="https://preview.colorlib.com/theme/course/images/logo.png" />
            <h1>COURSE</h1>
            <nav>
              <ul>
                <li><Link>Home</Link></li>
                <li><Link>About Us</Link></li>
                <li><Link>Courses</Link></li>
                <li><Link>Elements</Link></li>
                <li><Link>News</Link></li>
                <li><Link>Contact</Link></li>
            
              </ul>
            </nav>
            <div className="phone">
            <FaPhoneVolume /> <span>+43 4566 7788 2457</span>
            </div>
          </div>
          <section id="home">
          <h1>Get Your Education Today!</h1>
          </section>
            
        </div>
      </header>
    </>
  );
};

export default Header;
