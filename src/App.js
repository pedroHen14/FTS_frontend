import { GlobalStyles } from "./GlobalStyles";
import Router from "./router";

function App() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=PT+Sans"
      ></link>
      <GlobalStyles />
      <Router />
    </>
  );
}

export default App;
