/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Grid, TextField } from "@mui/material";
import { useContext } from "react";
import { AppContext } from "../App";

export const Page3 = () => {
  const { data, setData } = useContext(AppContext);

  return (
    <Grid container size={{ xs: 12, sm: 12, md: 12, lg: 6, xl: 6 }} spacing={1} p={1}>
      {data?.employees?.map((employee: any, index: number) => {
        return (
          <Grid
            container
            size={{ xs: 12 }}
            flexDirection={"row"}
            justifyContent={"center"}
            alignItems={"center"}
            sx={{ backgroundColor: "rgba(0,0,0,0.1)", p: 1 }}
          >
            <Grid container size={{ xs: 12 }}>
              <Grid size={{ xs: 12, sm: 12, md: 12, lg: 4, xl: 4 }}>
                <TextField
                  fullWidth
                  size="small"
                  label={"employee_first_name"}
                  value={employee?.employee_first_name}
                  onChange={(e: any) =>
                    setData({
                      ...data,
                      employees: [
                        ...(data?.employees?.slice(0, index) ?? []),
                        { ...employee, employee_first_name: e.target.value },
                        ...(data?.employees?.slice(index + 1) ?? []),
                      ],
                    })
                  }
                />
              </Grid>
              <Grid size={{ xs: 12, sm: 12, md: 12, lg: 4, xl: 4 }}>
                <TextField
                  fullWidth
                  size="small"
                  label={"employee_last_name"}
                  value={employee?.employee_last_name}
                  onChange={(e: any) =>
                    setData({
                      ...data,
                      employees: [
                        ...(data?.employees?.slice(0, index) ?? []),
                        { ...employee, employee_last_name: e.target.value },
                        ...(data?.employees?.slice(index + 1) ?? []),
                      ],
                    })
                  }
                />
              </Grid>
              <Grid size={{ xs: 12, sm: 12, md: 12, lg: 4, xl: 4 }}>
                <TextField
                  fullWidth
                  size="small"
                  label={"order"}
                  value={employee?.order}
                  type="number"
                  onChange={(e: any) =>
                    setData({
                      ...data,
                      employees: [
                        ...(data?.employees?.slice(0, index) ?? []),
                        { ...employee, order: e.target.value },
                        ...(data?.employees?.slice(index + 1) ?? []),
                      ],
                    })
                  }
                />
              </Grid>
            </Grid>
            {data?.stages?.map((stage: any, innerIndex: number) => {
              return (
                <Grid
                  container
                  size={{ xs: 12 }}
                  flexDirection={"row"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  sx={{ backgroundColor: "rgba(0,0,0,0.1)", p: 1 }}
                >
                  <Grid container size={{ xs: 12 }}>
                    <Grid size={{ xs: 12 }}>
                      <TextField
                        fullWidth
                        size="small"
                        label={"obligation"}
                        value={stage?.obligation[employee?.employee_first_name]}
                        onChange={(e: any) =>
                          setData({
                            ...data,
                            stages: [
                              ...(data?.stages?.slice(0, innerIndex) ?? []),
                              {
                                ...stage,
                                obligation: { ...stage?.obligation, [employee?.employee_first_name]: e.target.value },
                              },
                              ...(data?.stages?.slice(innerIndex + 1) ?? []),
                            ],
                          })
                        }
                      />
                    </Grid>
                  </Grid>
                </Grid>
              );
            })}
          </Grid>
        );
      })}

      <Button onClick={() => console.log(data)}>Print</Button>
    </Grid>
  );
};
