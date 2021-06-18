import { GlobalStyles } from "./GlobalStyles";
import ClientPage from "./pages/ClientPage";
import Router from "./router";

function App() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=PT+Sans"
      ></link>
      <GlobalStyles />
      {/* <Router /> */}
      <ClientPage />
    </>
  );
}

export default App;
