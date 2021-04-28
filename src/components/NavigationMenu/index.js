import { Link } from "react-router-dom";
import { getUser } from "../../services/security";

import { Container, IconSignOut, ImageLogo, Items } from "./styles";

function NavigationMenu({ image, handleSignOut }) {
  const user = getUser();

  return (
    <Container>
      <ImageLogo>
        <img src={image} alt="Logo" />
      </ImageLogo>
      <Items>
        {user.permissions.map((p) => {
          return p.Screens.map((s) => (
            <li key={s.id}>
              <Link to={`/${s.route}`}>
                <h3>{s.screen_name}</h3>
              </Link>
            </li>
          ));
        })}
      </Items>
      <IconSignOut onClick={handleSignOut} />
    </Container>
  );
}

export default NavigationMenu;
