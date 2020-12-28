import Image from "next/image";
import Container from "./Container";

function Header(): JSX.Element {
  return (
    <header>
      <Container>
        <nav className="nav">
          <ul className="nav-menu">
            <li className="nav-item">Home</li>
            <li className="nav-item">Skills</li>
            <li className="nav-item">Projects</li>
            <li className="nav-item">Technologies</li>
            <li className="nav-item">About me</li>
            <li className="nav-item">Contacts</li>
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
