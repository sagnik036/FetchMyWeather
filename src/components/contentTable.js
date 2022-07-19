import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";
import { Divider } from "@mui/material";
import Grid from "@mui/material/Grid";

export default function ContentTable(props) {
  return (
    <Box
      sx={{
        width: "auto",
        height: 300,
        borderRadius: 12,
        backgroundColor: "rgba(138, 138, 138,0.9)",
        border: 4,
        borderColor: "#cf308f",
      }}
    >
      <Typography align="center" color="green" variant="h5" fontWeight="bold">
        𝔻𝕒𝕥𝕒 𝔽𝕖𝕥𝕔𝕙𝕖𝕕 𝕊𝕥𝕒𝕥𝕦𝕤 ℂ𝕠𝕕𝕖 : 200 ok
      </Typography>
      <Divider />
      <Box
        sx={{
          backgroundColor: "",
          border: 9,
          height: "90%",
          borderColor: "rgba(138, 138, 138,0)",
        }}
      >
        <Typography
          variant="h5"
          fontStyle="italic"
          sx={{
            fontWeight: "bold",
          }}
        >
          ℂ𝕚𝕥𝕪 𝔽𝕠𝕦𝕟𝕕 &nbsp; &nbsp; &nbsp;: {props.city}
        </Typography>
        <hr />
        <Typography
          variant="h5"
          fontStyle="italic"
          sx={{
            fontWeight: "bold",
          }}
        >
          𝕋𝕖𝕞𝕡𝕒𝕣𝕒𝕥𝕦𝕣𝕖 &nbsp;: {props.temp} °C
        </Typography>
        <hr />
        <Typography
          variant="h5"
          fontStyle="italic"
          sx={{
            fontWeight: "bold",
          }}
        >
          𝔽𝕖𝕖𝕝𝕤 𝕃𝕚𝕜𝕖 &nbsp; &nbsp; &nbsp; &nbsp;: {props.feelslike} °C
        </Typography>
        <hr />
        <Typography
          variant="h5"
          fontStyle="italic"
          sx={{
            fontWeight: "bold",
          }}
        >
          ℂ𝕠𝕦𝕟𝕥𝕣𝕪 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;: {props.country}
        </Typography>
        <hr />
        <Typography
          variant="h5"
          fontStyle="italic"
          sx={{
            fontWeight: "bold",
          }}
        >
          ℍ𝕦𝕞𝕚𝕕𝕚𝕥𝕪 &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;: {props.humidity} %
        </Typography>
      </Box>
    </Box>
  );
}
