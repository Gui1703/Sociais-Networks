import React from "react";
import Profile from "../../img/profile.png";
import { Container, Header, Links, Section } from "./styles";

function Widget() {
  function navigateTo(url) {
    window.open(`${url}`, "_blank");
  }

  return (
    <Container>
      <Header>
        <img src={Profile} alt="foto de perfil" />
        <h2>Guilherme Raposo</h2>
        <span>@guirapososilva</span>
      </Header>

      <Section>
        <Links
          onClick={() => {
            navigateTo("https://www.instagram.com/guirapososilva/");
          }}
        >
          <i className="bx bxl-instagram"></i>
          <span>Instagram</span>
        </Links>

        <Links
          onClick={() => {
            navigateTo("https://wa.me/message/RG7W3NLJ22BXL1");
          }}
        >
          <i className="bx bxl-whatsapp"></i>
          <span>WhatsApp</span>
        </Links>

        <Links
          onClick={() => {
            navigateTo(
              "https://www.linkedin.com/in/guilherme-raposo-3a2130190/"
            );
          }}
        >
          <i className="bx bxl-linkedin"></i>
          <span>Linkedin</span>
        </Links>

        <Links
          onClick={() => {
            navigateTo("https://github.com/Gui1703");
          }}
        >
          <i className="bx bxl-github"></i>
          <span>GitHub</span>
        </Links>
      </Section>
    </Container>
  );
}

export default Widget;
