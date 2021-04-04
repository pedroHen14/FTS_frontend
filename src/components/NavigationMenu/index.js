import { Link } from "react-router-dom";
import { Container, ImageLogo, Items } from "./styles";

function NavigationMenu({ image, menuItens }) {
  return (
    <Container>
      <ImageLogo>
        <img src={image} alt="Logo" />
      </ImageLogo>
      <Items>
        {menuItens.map((m) => (
          <li>
            <Link to={m.rota}>
              <h1>{m.nome}</h1>
            </Link>
          </li>
        ))}
      </Items>
    </Container>
  );
}

export default NavigationMenu;
