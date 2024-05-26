import {Box} from "@chakra-ui/react"
import "./App.css";
import Header from "./Component/Header";
import Main from "./MainSection/Main";
import Footer from "./Component/Footer";

function App() {
  return (
    <Box className="font-Teachers">
      <Header/>
      <Main/>
      <Footer/>
    </Box>
  );
}


export default App;
