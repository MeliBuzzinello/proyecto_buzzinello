import * as React from "react";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import AddCardIcon from "@mui/icons-material/AddCard";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import LockIcon from "@mui/icons-material/Lock";
import "./Footer.css";
import { Box, Grid } from "@mui/material";
import logoGithub from "../github.png";
import logoLink from "../linkedin.png";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Footer() {
  return (
    <>
      <div className="footer">
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 1, sm: 8, md: 12 }}
          >
            <Grid item xs={1} sm={4} md={4}>
              <Item>
                <AddCardIcon />
                <h2>3 Y 6 CUOTAS SIN INTERÉS</h2>
                <p>Programa AHORA 12</p>
              </Item>
            </Grid>
            <Grid item xs={1} sm={4} md={4}>
              <Item>
                <LocalShippingIcon />
                <h2>ENVÍO GRATIS</h2>
                <p>para compras mayores a $15.000</p>
              </Item>
            </Grid>
            <Grid item xs={1} sm={4} md={4}>
              <Item>
                <LockIcon />
                <h2>SITIO SEGURO</h2>
                <p>Protegemos tus datos</p>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </div>
      <div className="footerLegales">
        <p>Copyright © 2022 | </p>
        <a
          href="https://www.linkedin.com/in/melisa-buzzinello/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={logoLink} alt={"logo"} className="footerLogo" />
        </a>
        <a
          href="https://github.com/MeliBuzzinello"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={logoGithub} alt={"logo"} className="footerLogo" />
        </a>
      </div>
    </>
  );
}
