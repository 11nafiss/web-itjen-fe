// Import Library
import { FaSearch } from "react-icons/fa";
import { IconButton, Input, FormControl } from "@mui/joy";

const SearchBox = () => {
  return (
    <FormControl
      sx={() => ({
        display: "flex",
        justifyContent: "right",
        width: { xs: "100%", md: "300px" },
      })}
    >
      <Input
        placeholder="Cari"
        required
        endDecorator={
          <IconButton color="neutral" sx={{ width: "100%", height: "100%" }}>
            <FaSearch />
          </IconButton>
        }
        sx={{
          width: "100%",
          height: "30px",
          borderColor: "#252525",
          borderWidth: "3px",
          margin: "12px 0px",
        }}
      />
    </FormControl>
  );
};

export default SearchBox;
