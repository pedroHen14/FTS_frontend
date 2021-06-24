import { getUser } from "../../services/security";
import { useHistory } from "react-router";
import Dashboard from "../../layouts/Dashboard";
import {
  Container,
  GraphicChart,
  InfoCard,
  InfoCardContent,
  InfoCardHeader,
  InfoContainer,
} from "./styles";
import { Chart } from "react-google-charts";

function Home() {
  const user = getUser();

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
        <InfoContainer>
          <InfoCard>
            <InfoCardHeader>
              <h1>Estoque</h1>
            </InfoCardHeader>
          </InfoCard>
          <div className="container_graphic">
            <div className="graphic">
              <GraphicChart
                chartType="PieChart"
                loader={<div>Loading Chart</div>}
                data={[
                  ["Estoque", "Movimento"],
                  ["Vendas", 11],
                  ["Compras", 5]
                ]}
                options={{
                  is3D: true,
                  title: 'Gráfico de compras e vendas',
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
                  ["Vendas", 11],
                  ["Compras", 5]
                ]}
                options={{
                  is3D: true,
                  title: 'Gráfico de compras e vendas',
                  backgroundColor: "transparent",
                }}
                rootProps={{ "data-testid": "1" }}
              />
            </div>
          </div>
        </InfoContainer>
      </Container>
    </Dashboard>
  );
}

export default Home;
