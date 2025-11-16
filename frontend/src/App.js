import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import UserProfile from "./routes/user_profile";
import Layout from "./components/layout";
import Login from "./routes/login";

const theme = createTheme(); // you can customize later

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route
            element={
              <Layout>
                <UserProfile />
              </Layout>
            }
            path="/:username"
          />
          <Route
            element={
              <Layout>
                <Login />
              </Layout>
            }
            path="/login"
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
