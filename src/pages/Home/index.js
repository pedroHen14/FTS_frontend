import { getUser } from "../../services/security";
import { useHistory } from "react-router";
import Dashboard from "../../layouts/Dashboard";
import {
  Container,
  InfoCard,
  InfoCardContent,
  InfoCardHeader,
  InfoContainer,
} from "./styles";
import { Chart } from "react-google-charts";

function Home() {
  const user = getUser();

  console.log(user);

  return (
    <Dashboard title="Home">
      <Container>
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
          <InfoCard>
            <InfoCardHeader>
              <h1>Header</h1>
            </InfoCardHeader>
            <InfoCardContent>
              <Chart
                width={"500px"}
                height={"300px"}
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
                  title: "My Daily Activities",
                }}
                rootProps={{ "data-testid": "1" }}
              />
            </InfoCardContent>
          </InfoCard>
        </InfoContainer>
      </Container>
    </Dashboard>
  );
}

export default Home;
