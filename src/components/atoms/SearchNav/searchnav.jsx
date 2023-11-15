// Import Library
import { Button, Input } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/material/styles";

// Import Api
import { useAppDispatch, useAppSelector } from "../../../hooks/useTypedSelector";
import { articleSearchSlice } from "../../../features/slice/article.slice";
import { useNavigate } from "react-router-dom";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "#08347C",
  "&:hover": {
    backgroundColor: "#08347C",
  },
  marginLeft: 0,
  transition: theme.transitions.create("width"),
  width: "15ch",
  borderWidth: "10px",
  borderColor: "#fff",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const StyledInputBase = styled(Input)(({ theme }) => ({
  color: "#fff",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(0)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    minWidth: "60px",
    [theme.breakpoints.up("sm")]: {
      width: "0.1ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const SearchNav = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const keyword = useAppSelector((state) => state.article.articleSearch.searchKeyword);

  const navigateToSearch = () => {
    navigate(`/cari?keyword=${keyword}&page=1`);
  };

  return (
    <Search sx={{ display: "flex", flexDirection: "row" }}>
      <StyledInputBase
        value={keyword}
        onChange={(e) => dispatch(articleSearchSlice.actions.setSearchKeyword(e.target.value))}
        placeholder="Cari…"
        inputProps={{ "aria-label": "search" }}
        onKeyDown={(ev) => {
          if (ev.key === "Enter") {
            ev.preventDefault();
            navigateToSearch();
          }
        }}
      />
      <Button sx={{ borderWidth: "thick", borderColor: "#fff" }} onClick={navigateToSearch}>
        <SearchIcon style={{ color: "fff" }} />
      </Button>
    </Search>
  );
};

export default SearchNav;
