import styled from "styled-components";
import { FaSignOutAlt } from "react-icons/fa";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  background-color: var(--primary);
  height: 100vh;
  align-items: center;
  position: relative;
  color: var(--white);
`;

export const ImageLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;

  > img {
    width: 100px;
    border-radius: 50%;
    border: 2px solid var(--secondary);
    box-shadow: 0px 0px 5px var(--darkGray);
    cursor: pointer;
    transition: 0.2s;

    :hover {
      transform: scale(1.1);
      box-shadow: 0px 0px 15px var(--dark);
    }
  }
`;

export const Items = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 20px;

  li {
    list-style: none;
  }
`;

export const IconSignOut = styled(FaSignOutAlt)`
  font-size: 30px;
  margin-right: 10px;
  cursor: pointer;
  transition: 0.2s;
  position: absolute;
  top: 10px;
  right: 0;

  :hover {
    color: var(--dark);
  }
`;
