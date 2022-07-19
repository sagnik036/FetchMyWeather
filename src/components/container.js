import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";
import ContentTable from "./contentTable";
import SearchBar from "./searchbar";

export default function FixedContainer(props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <Box
          sx={{
            color: "red", // this changes the color of the text inside  the typoraphy
            display: "inline",
            mx: 0.5,
          }}
        >
          <Typography variant="h3" sx={{ textAlign: "center" }}>
            {props.name}
          </Typography>
        </Box>
      </Container>
    </React.Fragment>
  );
}
