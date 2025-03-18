import main from "../../styles/main.module.css";
import Image from "next/image";
import facebook from "../../public/facebook.png";
import instagram from "../../public/instagram.png";
import youtube from "../../public/youtube.png";
import email from "../../public/email.png";

const Footer = () => {
  const recipientEmail = "reynoso.123132@gmail.com";
  return (
    <div className={main.footerContainer}>
      <div className={main.footerCenter}>
        <div className={main.footerUpper}>
          <a
            className={main.linkStyle}
            href="https://www.facebook.com/Deybid.0000"
          >
            <Image
              className={main.socials}
              src={facebook}
              alt="facebook"
            ></Image>
          </a>
          <a
            className={main.linkStyle}
            href="https://www.instagram.com/_dabibid/"
          >
            <Image
              className={main.socials}
              src={instagram}
              alt="instagram"
            ></Image>
          </a>
          <a
            className={main.linkStyle}
            href="https://www.youtube.com/channel/UCDOPfj1LGSb8L_b9FsQO3bg"
          >
            <Image
              className={main.socials}
              src={youtube}
              alt="instagram"
            ></Image>
          </a>
          <a
            className={main.linkStyle}
            href={`gmailto:${recipientEmail}`}
            rel="noopener noreferrer"
          >
            <Image className={main.socials} src={email} alt="email"></Image>
          </a>
        </div>
        <div className={main.footerLower}>
          <p>©Copyright 2023. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
