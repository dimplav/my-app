/* eslint-disable @typescript-eslint/no-explicit-any */
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { Button, Grid, IconButton, TextField } from "@mui/material";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../App";

export const Page2 = () => {
  const { data, setData } = useContext(AppContext);
  const navigate = useNavigate();

  const removeEmployee = (id: number) => {
    const findIndex = data?.employees?.findIndex((e: any) => e.order === id);
    setData({
      ...data,
      employees: [...(data?.employees?.slice(0, findIndex) ?? []), ...(data?.employees?.slice(findIndex + 1) ?? [])],
    });
  };

  return (
    <Grid container size={{ xs: 12, sm: 12, md: 12, lg: 6, xl: 6 }} spacing={1} p={1}>
      {data?.employees?.map((employee: any) => {
        return (
          <Grid
            container
            size={{ xs: 12 }}
            flexDirection={"row"}
            justifyContent={"center"}
            alignItems={"center"}
            sx={{ backgroundColor: "rgba(0,0,0,0.1)", p: 1 }}
          >
            <Grid container size={{ xs: 10 }}>
              <Grid size={{ xs: 12, sm: 12, md: 12, lg: 4, xl: 4 }}>
                <TextField fullWidth size="small" label={"employee_first_name"} value={employee?.employee_first_name} />
              </Grid>
              <Grid size={{ xs: 12, sm: 12, md: 12, lg: 4, xl: 4 }}>
                <TextField fullWidth size="small" label={"employee_last_name"} value={employee?.employee_last_name} />
              </Grid>
              <Grid size={{ xs: 12, sm: 12, md: 12, lg: 4, xl: 4 }}>
                <TextField fullWidth size="small" label={"order"} value={employee?.order} />
              </Grid>
            </Grid>
            <Grid container size={{ xs: 2 }} flexDirection={"row"}>
              <IconButton size="small" onClick={() => removeEmployee(employee?.order)}>
                <HighlightOffIcon />
              </IconButton>
            </Grid>
          </Grid>
        );
      })}

      <Button onClick={() => navigate("/page4")}>Add employee</Button>
      <Button onClick={() => console.log(data)}>Print</Button>
    </Grid>
  );
};
