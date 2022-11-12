import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";

const App: React.FC = (): JSX.Element => {
  return (
    <main className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Index />}></Route>
        </Routes>
      </BrowserRouter>
    </main>
  );
};

export default App;
