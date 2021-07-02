import React from "react";
import { useHistory } from "react-router";
import Dashboard from "../../layouts/Dashboard";

import {
  ButtonActionArea,
  ButtonCard,
  ButtonContainer,
  ButtonContent,
} from "./styles";

function Sales() {
  const history = useHistory();

  return (
    <Dashboard>
      <ButtonContainer>
        <ButtonCard
          elevation={10}
          onClick={() => {
            history.push("/pdv");
          }}
        >
          <ButtonActionArea>
            <ButtonContent id="day-report">
              <h3>Rel. Diário</h3>
            </ButtonContent>
          </ButtonActionArea>
        </ButtonCard>
      </ButtonContainer>
    </Dashboard>
  );
}

export default Sales;
