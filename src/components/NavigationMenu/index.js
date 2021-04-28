import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../../services/api";
import { getUser, signOut } from "../../services/security";
import { Container, IconSignOut, ImageLogo, Items } from "./styles";

function NavigationMenu({ image, handleSignOut }) {
  const user = getUser();

  const [menuItens, setMenuItens] = useState([]);

  useEffect(() => {
    const loadMenuItens = async () => {
      try {
        const response = await api.get(`/user/${user.id}`);

        console.log(response.data);

        setMenuItens(response.data);
      } catch (error) {
        console.log(error);
      }
    };
  }, []);

  return (
    <Container>
      <ImageLogo>
        <img src={image} alt="Logo" />
      </ImageLogo>
      <Items>
        {menuItens.map((i) => (
          <li key={i.id}>
            <Link to="">
              <h1>{i.user_name}</h1>
            </Link>
          </li>
        ))}
      </Items>
      <IconSignOut onClick={handleSignOut} />
    </Container>
  );
}

export default NavigationMenu;
