/* eslint-disable @typescript-eslint/no-explicit-any */
import { AppBar, Button, Grid, Toolbar } from "@mui/material";
import React, { createContext, ReactNode, useState } from "react";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import { DATA } from "./data";
import { Page1 } from "./pages/Page1";
import { Page2 } from "./pages/Page2";
import { Page3 } from "./pages/Page3";
import { Page4 } from "./pages/Page4";

interface AppContextType {
  data?: any;
  setData?: any;
}
export const AppContext = createContext<AppContextType>({});

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [data, setData] = useState<any>(DATA);

  return <AppContext.Provider value={{ data, setData }}>{children}</AppContext.Provider>;
};

// Type for the page components' routing
const App: React.FC = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState<number>(1);

  // Handle page navigation
  const handleNext = () => {
    if (currentPage < 4) {
      setCurrentPage(currentPage + 1);
      navigate(`/page${currentPage + 1}`);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      navigate(`/page${currentPage - 1}`);
    }
  };

  return (
    <AppProvider>
      <Grid style={{ width: "100vw", height: "100vh" }} flexDirection={"column"} spacing={1} overflow={"scroll"}>
        <Grid>
          {/* AppBar (Toolbar) */}
          <AppBar position="fixed">
            <Toolbar>
              <Button color="inherit" component={Link} to="/">
                Page 1
              </Button>
              <Button color="inherit" component={Link} to="/page2">
                Page 2
              </Button>
              <Button color="inherit" component={Link} to="/page3">
                Page 3
              </Button>
              <Button color="inherit" component={Link} to="/page4">
                Page 4
              </Button>
            </Toolbar>
          </AppBar>
        </Grid>
        {/* Main content */}
        <Grid
          container
          size={{ xs: 12 }}
          sx={{ width: "100%", minHeight: "calc(100vh - 64px)" }}
          spacing={1}
          mt={8}
          flexDirection={"column"}
        >
          <Grid container flexDirection={"row"} justifyContent="space-between" p={1} width={"100%"}>
            <Button
              variant="contained"
              onClick={handlePrevious}
              disabled={currentPage === 1}
              style={{ marginRight: 10 }}
            >
              Previous
            </Button>
            <Button variant="contained" onClick={handleNext} disabled={currentPage === 4}>
              Next
            </Button>
          </Grid>

          {/* Routes */}
          <Grid container width={"100%"}>
            <Routes>
              <Route path="/" element={<Page1 />} />
              <Route path="/page1" element={<Page1 />} />
              <Route path="/page2" element={<Page2 />} />
              <Route path="/page3" element={<Page3 />} />
              <Route path="/page4" element={<Page4 />} />
            </Routes>
          </Grid>
        </Grid>
      </Grid>
    </AppProvider>
  );
};

export default App;
