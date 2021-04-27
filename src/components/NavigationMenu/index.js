import { Link } from "react-router-dom";
import { Container, IconSignOut, ImageLogo, Items } from "./styles";

function NavigationMenu({ image, menuItens, handleSignOut }) {
  menuItens.map((m) => console.log(m.Screens));
  return (
    <Container>
      <ImageLogo>
        <img src={image} alt="Logo" />
      </ImageLogo>
      <Items>
        {menuItens.map((i) => (
          <li key={i.Screens.id}>
            <Link to="">
              <h1>{i.Screens.screen_name}</h1>
            </Link>
          </li>
        ))}
      </Items>
      <IconSignOut onClick={handleSignOut} />
    </Container>
  );
}

export default NavigationMenu;
