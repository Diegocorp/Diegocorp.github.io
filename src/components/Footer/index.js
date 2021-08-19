import React from "react";
import FooterCol from "../FooterCol";
import PText from "../PText";
import { FooterStyle } from "./FooterElements";

export default function Footer() {
  return (
    <FooterStyle>
      <div className="container">
        <div className="footer__col1">
          <h1 className="footer__col1__title">Diego Sandoval</h1>
          <PText>
            I am a Full-Stack developer from Sonora, Mexico. I create
            professional web and desktop applications. I love to find solutions
            to current problems using the latest technological trends.
          </PText>
        </div>
        <div className="footer__col2">
          <FooterCol
            heading="Important Links"
            links={[
              {
                title: "Home",
                link: "/",
                type: "Link",
              },
              {
                type: "Link",
                title: "About",
                link: "/about",
              },
              {
                type: "Link",
                title: "Projects",
                link: "/projects",
              },
              {
                type: "Link",
                title: "Contact",
                link: "/contact",
              },
            ]}
          />
        </div>
        <div className="footer__col3">
          <FooterCol
            heading="Contact Info"
            links={[
              {
                title: "(+52) 638-384-1821",
                link: "tel:+526383841821",
              },
              {
                title: "diegosandovalr.corp@gmail.com",
                link: "mailto:diegosandovalr.corp@gmail.com",
              },
              {
                title: "Rocky Point, Sonora, Mexico",
                link: "https://www.google.com/maps/@31.3127374,-113.5373813,15z",
              },
            ]}
          />
        </div>
        <div className="footer__col4">
          <FooterCol
            heading="Social Links"
            links={[
              {
                title: "GitHub",
                link: "https://github.com/Diegocorp",
              },
              {
                title: "Linkedin",
                link: "https://www.linkedin.com/in/diego-sandoval-83856a212/",
              },
            ]}
          />
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <PText>© 2021 - Diego Sandoval</PText>
        </div>
      </div>
    </FooterStyle>
  );
}
