import React, { useEffect, useState } from "react";
import NavigationMenu from "../../components/NavigationMenu";
import { getUser, signOut } from "../../services/security";
import {
  ButtonContainer,
} from "./styles";

import Dashboard from "../../layouts/Dashboard";
import {
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  CircularProgress
} from "@material-ui/core";
import { TableList } from "../BranchsRegister/styles";
import { api } from "../../services/api";
import { notify } from "../../utils";

function InventoryReports() {
  const [report, setReport] = useState([]);
  const user = getUser();

  const columns = [
    { id: "quantity_acquired", label: "Cód. de barra", minWidth: 100 },
    { id: "lot_number", label: "Nome Prod.", minWidth: 100 },
    { id: "bar_code", label: "Descrição", minWidth: 300 },
    { id: "quantity", label: "Quantidade", minWidth: 100 },
    { id: "product", label: "Custo p/ item", minWidth: 100 },
    { id: "date_of_acquisition", label: "Un. medida", minWidth: 100 },
  ];

  useEffect(() => {
    const loadReport = async () => {
      const branch_id = user.user_cpf ? user.branch.id : user.branch[0]?.id;

      try {
        const { data } = await api.get(`/branch/${branch_id}/inventory/report`);

        setReport(data);
      } catch (error) {
        notify("Não foi possível carregar o relatório");
      }
    };

    loadReport();
  }, []);

  return (
    <Dashboard title="Relatório de estoque">
      <ButtonContainer>
        <TableContainer
          style={{
            width: "100%",
            borderRadius: "10px",
            border: "1px solid var(--dark)",
            height: "600px",
          }}
        >
          <TableList stickyHeader aria-label="">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {report &&
                report.map((p, index) => {
                  return (
                    <TableRow hover tabIndex={-1} key={index}>
                      <TableCell>{p.bar_code}</TableCell>
                      <TableCell>{p.product_name}</TableCell>
                      <TableCell>{p.description}</TableCell>
                      <TableCell>{p.quantity}</TableCell>
                      <TableCell>
                        {parseInt(p.cost_per_item).toLocaleString("pt-BR", {
                          style: "currency",
                          currency: "BRL",
                        })}
                      </TableCell>
                      <TableCell>{p.unit_name}</TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </TableList>
        </TableContainer>
        {/* <ButtonContainer>
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
        </ButtonCard> */}
      </ButtonContainer>
    </Dashboard>
  );
}

export default InventoryReports;
