import React from "react";
import FixedContainer from "../components/container";
import SearchBar from "../components/searchbar";
import ContentTable from "../components/contentTable";
import { Box, Divider } from "@mui/material";
import Grid from "@mui/material/Grid";
import WeatherApiFetch from "../actions/weatherapi";
import { Formater } from "../components/formater";
import DynamicSnackbar from "../components/snackbar";

const FrontPage = (props) => {
  const [name, setName] = React.useState("𝔽𝕖𝕥𝕔𝕙𝕄𝕪𝕎𝕖𝕒𝕥𝕙𝕖𝕣 𝕍𝟙.𝟘 ");
  const [search, setSearch] = React.useState("");
  const [id, setID] = React.useState(0);
  const [city, setCity] = React.useState("");
  const [temp, setTemp] = React.useState(null);
  const [humidity, setHumidity] = React.useState(null);
  const [country, setCountry] = React.useState("");
  const [feelslike, setFeelsLike] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const [color, setColor] = React.useState("");
  const [tableOpen, setTableOpen] = React.useState(false);

  React.useEffect(() => {
    if (id > 0) {
      WeatherApiFetch(search)
        .then((response) => {
          if (response.data.main) {
            setCity(response.data.name);
            setTemp(Formater(response.data.main.temp));
            setFeelsLike(Formater(response.data.main.feels_like));
            setCountry(response.data.sys.country);
            setHumidity(response.data.main.humidity);
            setColor("success");
            setOpen(true);
            setMessage("City Found");
            setTableOpen(true);
          }
        })
        .catch((error) => {
          if (error) {
            setOpen(true);
            setMessage("City Not Found");
            setColor("error");
            setTableOpen(false);
          }
        });
    }
  }, [id]);

  return (
    <>
      <DynamicSnackbar
        open={open}
        color={color}
        message={message}
        setOpen={setOpen}
      />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <FixedContainer name={name} />
        </Grid>
        <Grid item xs={4.5}></Grid>
        <Grid item xs={3}>
          <SearchBar
            setID={setID}
            setSearch={setSearch}
            Search={search}
            id={id}
          />
        </Grid>
        <Grid item xs={4.5}></Grid>
        <Grid item xs={4}></Grid>
        <Grid item xs={4}>
          {id > 0 ? (
            <>
              {tableOpen ? (
                <ContentTable
                  city={city}
                  temp={temp}
                  humidity={humidity}
                  country={country}
                  feelslike={feelslike}
                />
              ) : null}
            </>
          ) : null}
        </Grid>
        <Grid item xs={4}></Grid>
      </Grid>
    </>
  );
};

export default FrontPage;
