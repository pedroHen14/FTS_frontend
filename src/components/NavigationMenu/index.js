import { Link } from "react-router-dom";
import { Container, IconSignOut, ImageLogo, Items } from "./styles";

function NavigationMenu({ image, menuItens, handleSignOut }) {
  return (
    <Container>
      <ImageLogo>
        <img src={image} alt="Logo" />
      </ImageLogo>
      <Items>
        {menuItens.map((i) => (
          <li>
            <Link to={i.route}>
              <h1>{i.name}</h1>
            </Link>
          </li>
        ))}
      </Items>
      <IconSignOut onClick={handleSignOut} />
    </Container>
  );
}

export default NavigationMenu;
