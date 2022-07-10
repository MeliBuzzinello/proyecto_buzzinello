import { Paper, Typography } from '@mui/material';
import React from 'react';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';

export default function Mistake() {
  return (
    <>
     <Paper
          sx={{
            textAlign: "center",
            p: 2,
            margin: "auto",
            marginTop: 10,
            marginBlock: 10,
            maxWidth: "80%",
            flexGrow: 1,
            backgroundColor: (theme) =>
              theme.palette.mode === "dark" ? "#1A2027" : "#fff",
          }}
        >
          <ErrorOutlineOutlinedIcon  color="disabled" sx={{ fontSize: 100 }}/>
          <Typography variant="h3" sx={{ margin: 5 }}>
            Uh OUCH!!!
          </Typography>
          <Typography variant="h6" sx={{ margin: 5 }}>
          La página ha sufrido algún desperfecto técnico. Espera unos minutos y volve a ingresar.
          </Typography>
        </Paper>
    </>
  )
}
