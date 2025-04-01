/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Grid, TextField } from "@mui/material";
import { useContext } from "react";
import { AppContext } from "../App";

export const Page1 = () => {
  const { data, setData } = useContext(AppContext);

  return (
    <Grid container size={{ xs: 12 }}>
      <Grid container size={{ xs: 12, sm: 12, md: 12, lg: 6, xl: 6 }} spacing={1} p={1}>
        <TextField
          fullWidth
          size="small"
          label={"show_project"}
          value={data?.metadata?.[0]?.show_project}
          onChange={(e: any) => {
            setData({ ...data, metadata: [{ ...data?.metadata[0], show_project: e.target.value }] });
          }}
        />
        <TextField
          fullWidth
          size="small"
          label={"skip_phase"}
          value={data?.metadata?.[0]?.skip_phase}
          onChange={(e: any) => {
            setData({ ...data, metadata: [{ ...data?.metadata[0], skip_phase: e.target.value }] });
          }}
        />
        <TextField
          fullWidth
          size="small"
          label={"title"}
          value={data?.project?.[0]?.title}
          onChange={(e: any) => {
            setData({ ...data, project: [{ ...data?.project[0], title: e.target.value }] });
          }}
        />
        <TextField
          fullWidth
          size="small"
          label={"description"}
          value={data?.project?.[0]?.description}
          onChange={(e: any) => {
            setData({ ...data, project: [{ ...data?.project[0], description: e.target.value }] });
          }}
        />
        <TextField
          fullWidth
          size="small"
          label={"goal"}
          value={data?.project?.[0]?.goal}
          onChange={(e: any) => {
            setData({ ...data, project: [{ ...data?.project[0], goal: e.target.value }] });
          }}
        />

        <Button onClick={() => console.log(data)}>Print</Button>
      </Grid>
    </Grid>
  );
};
