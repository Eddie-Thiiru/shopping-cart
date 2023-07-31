import Header from "./components/Header";
import MainSection from "./components/MainSection";
import Footer from "./components/Footer";
import { DataProvider } from "./components/DataProvider";
import "./styles/App.css";

const App = () => {
  return (
    <div id="App">
      <Header />
      <DataProvider>
        <MainSection />
      </DataProvider>
      <Footer />
    </div>
  );
};

export default App;
