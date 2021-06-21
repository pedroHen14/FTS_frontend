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
              <h1>Header</h1>
            </InfoCardHeader>
          </InfoCard>
          <InfoCard>
            <InfoCardHeader>
              <h1>Header</h1>
            </InfoCardHeader>
          </InfoCard>
        </InfoContainer>
        <InfoContainer>
          <InfoCard>
            <InfoCardHeader>
              <h1>Header</h1>
            </InfoCardHeader>
          </InfoCard>

          <div className="graphic">
            <GraphicChart
              chartType="PieChart"
              loader={<div>Loading Chart</div>}
              data={[
                ["Task", "Hours per Day"],
                ["Work", 11],
                ["Eat", 2],
                ["Commute", 2],
                ["Watch TV", 2],
                ["Sleep", 7],
              ]}
              options={{
                is3D: true,
                backgroundColor: "transparent",
              }}
              rootProps={{ "data-testid": "1" }}
            />
          </div>
        </InfoContainer>
      </Container>
    </Dashboard>
  );
}

export default Home;
