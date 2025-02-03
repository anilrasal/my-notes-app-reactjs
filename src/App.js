import "./App.css";
import Create from "./pages/Create";
import Notes from "./pages/Notes";
import Edit from "./pages/Edit";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material";
import { blue } from "@mui/material/colors";
import Layout from "./components/Layout";
function App() {
  const theme = createTheme({
    palette: {
      secondary: blue,
    },
    typography: {
      fontFamily: "Quicksand",
      fontWeightLight: 400,
      fontWeightRegular: 500,
      fontWeightMedium: 600,
      fontWeightBold: 700,
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Notes />}></Route>
            <Route path="/create" element={<Create />}></Route>
            <Route path="/edit/:id" element={<Edit />}></Route>
          </Routes>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
