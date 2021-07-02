import { getUser } from "../../services/security";
import Dashboard from "../../layouts/Dashboard";
import {
  Container,
  GraphicChart,
  InfoCard,
  InfoCardHeader,
  InfoContainer,
} from "./styles";
import {
  CircularProgress,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { TableList } from "../BranchsRegister/styles";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { notify } from "../../utils";

function Home() {
  const user = getUser();

  const [reportFinance, setReportFinance] = useState({});

  const [isLoading, setIsLoading] = useState(false);

  const columns = [
    { id: "sales_total_value", label: "Total de vendas", minWidth: 150 },
    { id: "purchases_total_value", label: "Total de compras", minWidth: 150 },
    { id: "total_balance", label: "Balanço total", minWidth: 150 },
    { id: "sale_amount", label: "Qtd. de vendas", minWidth: 150 },
    { id: "purchase_amount", label: "Qtd. de compras", minWidth: 150 },
    // { id: "sales", label: "Vendas", minWidth: 150 },
    // { id: "purchase", label: "Compras", minWidth: 150 },
  ];

  useEffect(() => {
    const loadReportFinances = async () => {
      setIsLoading(true);
      try {
        const { data } = await api.get(
          `/branch/${
            user.user_cpf ? user.branch.id : user.branch[0]?.id
          }/financial/report`
        );

        setReportFinance(data);
        setIsLoading(false);
      } catch (error) {
        notify("Não foi possível buscar o relatório", "error");
      }
    };

    loadReportFinances();
  }, []);

  const user_permission = user.permissions.map((p) => p.permission_name);
  return (
    <Dashboard title="Home">
      <Container>
        {user_permission == "Caixa" ? (
          <strong style={{ textAlign: "center", width: "70%" }}>
            Para você ter uma melhor experiência com a tela de caixa,
            recomendamos que baixe o atalho para a área de trabalho que irá
            redirecionar você diretamente para a tela de PDV
          </strong>
        ) : (
          ""
        )}
        {isLoading ? (
          <CircularProgress size={100} />
        ) : (
          <InfoContainer>
            <TableContainer
              style={{
                width: "100%",
                borderRadius: "10px",
                border: "1px solid var(--dark)",
                height: "auto",
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
                  {reportFinance && (
                    <TableRow hover tabIndex={-1}>
                      <TableCell>
                        {parseFloat(
                          reportFinance.sales_total_value
                        ).toLocaleString("pt-BR", {
                          style: "currency",
                          currency: "BRL",
                        })}
                      </TableCell>
                      <TableCell>
                        {parseFloat(
                          reportFinance.purchases_total_value
                        ).toLocaleString("pt-BR", {
                          style: "currency",
                          currency: "BRL",
                        })}
                      </TableCell>
                      <TableCell>
                        {parseFloat(reportFinance.total_balance).toLocaleString(
                          "pt-BR",
                          {
                            style: "currency",
                            currency: "BRL",
                          }
                        )}
                      </TableCell>
                      <TableCell>{reportFinance.sale_amount}</TableCell>
                      <TableCell>{reportFinance.purchase_amount}</TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </TableList>
            </TableContainer>
            <div className="container_graphic">
              <div className="graphic">
                <GraphicChart
                  chartType="PieChart"
                  loader={<div>Loading Chart</div>}
                  data={[
                    ["Estoque", "Movimento"],
                    ["Vendas", 11],
                    ["Compras", 5],
                  ]}
                  options={{
                    is3D: true,
                    title: "Gráfico de compras e vendas",
                    backgroundColor: "transparent",
                  }}
                  rootProps={{ "data-testid": "1" }}
                />
              </div>
              <div className="graphic">
                <GraphicChart
                  chartType="PieChart"
                  loader={<div>Loading Chart</div>}
                  data={[
                    ["Estoque", "Movimento"],
                    ["Eletrônicos", 4],
                    ["Eletrodomésticos", 1],
                    ["Roupas", 1],
                    ["Jogos", 2],
                    ["Bebidas", 1],
                    ["Comida", 1],
                    ["Higiene", 1],
                  ]}
                  options={{
                    is3D: true,
                    title: "Gráfico de vendas por categoria",
                    backgroundColor: "transparent",
                  }}
                  rootProps={{ "data-testid": "1" }}
                />
              </div>
            </div>
          </InfoContainer>
        )}
      </Container>
    </Dashboard>
  );
}

export default Home;
