import React, { useEffect, useState } from "react";
import NavigationMenu from "../../components/NavigationMenu";
import { signOut } from "../../services/security";
import {
  Body,
  ButtonActionArea,
  ButtonCard,
  ButtonContainer,
  ButtonContent,
  ButtonImageContainer,
} from "./styles";

import Dashboard from "../../layouts/Dashboard";

function InventoryReports() {
  return (
    <Dashboard title="Relatório de estoque">
      <ButtonContainer>
        <ButtonCard elevation={10}>
          <ButtonActionArea>
            <ButtonContent id="day-report">
              <h3>Rel. Diário</h3>
            </ButtonContent>
          </ButtonActionArea>
        </ButtonCard>
        <ButtonCard elevation={10}>
          <ButtonActionArea>
            <ButtonContent id="week-report">
              <h3>Rel. Semanal</h3>
            </ButtonContent>
          </ButtonActionArea>
        </ButtonCard>
        <ButtonCard elevation={10}>
          <ButtonActionArea>
            <ButtonContent id="month-report">
              <h3>Rel. Mensal</h3>
            </ButtonContent>
          </ButtonActionArea>
        </ButtonCard>
      </ButtonContainer>
    </Dashboard>
  );
}

export default InventoryReports;
