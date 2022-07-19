import { makeStyles } from "@mui/styles";
import { TextField, Box, Button } from "@mui/material";
import { alignProperty } from "@mui/material/styles/cssUtils";
import { color } from "@mui/system";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
    paddingBottom: 0,
    marginTop: 0,
    fontWeight: 500,
    borderRadius: "8px",
    backgroundColor: "rgba(138, 138, 138,0.5)",
  },
  //style for font size
  button: {
    width: "90%",
    backgroundColor: "rgba(138, 138, 138,0.5)",
  },
}));

const SearchBar = (props) => {
  const classes = useStyles();
  const Search = (e) => {
    props.setSearch(e.target.value);
  };

  return (
    <>
      <Box
        sx={{
          width: "auto",
          height: "auto",
          backgroundColor: "rgba(138, 138, 138,0.5)",
          borderRadius: "10px",
          display: "flex",
        }}
      >
        <TextField
          className={classes.textField}
          focused
          color="secondary"
          placeholder="𝔼𝕟𝕥𝕖𝕣 ℂ𝕚𝕥𝕪 ℕ𝕒𝕞𝕖"
          inputProps={{
            style: {
              fontSize: 26,
              color: "yellow",
              backgroundColor: "",
            },
          }}
          onChange={(e) => Search(e)}
        />

        <Button
          color="secondary"
          sx={{
            backgroundColor: "rgba(138, 138, 138,0.5)",
          }}
          onClick={() => props.setID(props.id + 1)}
          disabled={props.Search ? false : true}
        >
          <SearchIcon fontSize="large" />
        </Button>
      </Box>
    </>
  );
};

export default SearchBar;
