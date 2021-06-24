import { Link, useHistory } from "react-router-dom";
import { getUser, signOut } from "../../services/security";

import { Container, IconSignOut, ImageLogo, Items } from "./styles";

function NavigationMenu({ image }) {
  const user = getUser();

  const history = useHistory();

  const handleSignOut = () => {
    signOut();

    history.replace("/login");
  };

  return (
    <Container>
      <ImageLogo>
        <img src={image} alt="Logo" />
      </ImageLogo>
      <Items>
        <li>
          <Link to="/home">
            <h3>Home</h3>
          </Link>
        </li>
        {user && user.permissions.map((p) => {
          return p.Screens.map((s) => (
            <li key={s.id}>
              <Link to={`${s.route}`}>
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
