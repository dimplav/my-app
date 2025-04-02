/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Grid, TextField } from "@mui/material";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../App";
import { IEmployee, IStage } from "../Models";

export const Page4 = () => {
  const { data, setData } = useContext(AppContext);
  const [employee, setEmployee] = useState<IEmployee>();
  const [obl, setObl] = useState<string[]>(Array(data?.stages?.length).fill(""));
  const navigate = useNavigate();

  const makeStages = (name: string) => {
    const newStages = data?.stages?.map((stage: IStage, index: number) => ({
      ...stage,
      obligation: { ...stage?.obligation, [name]: obl[index] },
    }));
    return newStages;
  };

  const addEmployee = (e: IEmployee | undefined) => {
    if (e?.employee_first_name) {
      const stages = makeStages(e.employee_first_name!);
      setData({ ...data, stages, employees: [...(data?.employees ?? []), e] });
      setEmployee(undefined);
      navigate(-1);
    }
  };

  return (
    <Grid
      container
      size={{ xs: 12 }}
      flexDirection={"row"}
      justifyContent={"center"}
      alignItems={"center"}
      sx={{ backgroundColor: "rgba(0,0,0,0.1)", p: 1 }}
      spacing={1}
    >
      <Grid container size={{ xs: 12 }} spacing={1}>
        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 4, xl: 4 }}>
          <TextField
            fullWidth
            size="small"
            label={"employee_first_name"}
            value={employee?.employee_first_name}
            onChange={(e: any) => setEmployee({ ...employee, employee_first_name: e.target.value })}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 4, xl: 4 }}>
          <TextField
            fullWidth
            size="small"
            label={"employee_last_name"}
            value={employee?.employee_last_name}
            onChange={(e: any) => setEmployee({ ...employee, employee_last_name: e.target.value })}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 4, xl: 4 }}>
          <TextField
            fullWidth
            size="small"
            label={"order"}
            type="number"
            value={employee?.order}
            onChange={(e: any) => setEmployee({ ...employee, order: e.target.value })}
          />
        </Grid>
      </Grid>
      {obl?.map((o: string, index: number) => {
        return (
          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              size="small"
              label={"obligation"}
              value={o ?? ""}
              onChange={(e: any) => {
                setObl([...(obl?.slice(0, index) ?? []), e.target.value, ...(obl?.slice(index + 1) ?? [])]);
              }}
            />
          </Grid>
        );
      })}
      {/* {Array(obligationLength).fill('')?.map((stage: IStage, innerIndex: number) => {
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
                  value={stage?.obligation?.[employee?.employee_first_name ?? ""] ?? ""}
                  onChange={(e: any) =>
                    setData({
                      ...data,
                      stages: [
                        ...(data?.stages?.slice(0, innerIndex) ?? []),
                        {
                          ...stage,
                          obligation: { ...stage?.obligation, [employee?.employee_first_name ?? ""]: e.target.value },
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
      })} */}

      <Button onClick={() => addEmployee(employee)}>Save employee</Button>
    </Grid>
  );
};
