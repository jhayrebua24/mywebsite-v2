import Image from "next/image";
import { Link } from "react-scroll";
import Container from "./Container";

function Header(): JSX.Element {
  return (
    <header>
      <Container>
        <nav className="nav">
          <ul className="nav-menu">
            <li>
              <Link
                activeClass="active"
                className="nav-link"
                to="hero"
                spy
                smooth
                duration={500}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                className="nav-link"
                to="skills"
                spy
                smooth
                duration={500}
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                className="nav-link"
                to="projects"
                spy
                smooth
                duration={500}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                className="nav-link"
                to="technologies"
                spy
                smooth
                duration={500}
              >
                Technologies
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                className="nav-link"
                to="about"
                spy
                smooth
                duration={500}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                className="nav-link"
                to="contacts"
                spy
                smooth
                duration={500}
              >
                Contacts
              </Link>
            </li>
          </ul>
          <div className="nav-logo">
            <a href="#test">
              <Image
                src="/img/linkedinlogo.png"
                alt="linkedin"
                width="36"
                height="36"
                quality={100}
              />
            </a>
            <a href="#test">
              <Image
                src="/img/mail_logo.png"
                alt="mail"
                width="36"
                height="36"
                quality={100}
              />
            </a>
            <a href="#test">
              <Image
                src="/img/gitlogo.png"
                alt="git"
                width="36"
                height="36 "
                quality={100}
              />
            </a>
          </div>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
