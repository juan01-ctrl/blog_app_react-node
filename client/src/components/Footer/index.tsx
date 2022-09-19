import { Link } from "react-router-dom";
import { BsInstagram} from 'react-icons/bs'
import { BsFacebook} from 'react-icons/bs'
import { BsLinkedin} from 'react-icons/bs'
import { FooterContainer, SocialLinksContainer } from "./FooterElements";
import logo from "../../assets/logo-wortise.png";

const Footer = () => {
  return (
    <FooterContainer>
      <Link to="/">
        <img
          src={logo}
          alt="Logo"
          style={{ cursor: "pointer", width:"8em" }}
          
        />
      </Link>
      <p>© 2022 Wortise. | Política de privacidad</p>
      <SocialLinksContainer >
      <BsInstagram size="2em" cursor="pointer"/>
      <BsFacebook size="2em" cursor="pointer"/>
      <BsLinkedin size="2em" cursor="pointer"/>
      </SocialLinksContainer>
    </FooterContainer>
  );
};

export default Footer;
