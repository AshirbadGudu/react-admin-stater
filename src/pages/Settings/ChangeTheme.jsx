import { Brightness4, Brightness7 } from "@mui/icons-material";
import { FormControlLabel, FormGroup, IconButton } from "@mui/material";
import { useAppContext } from "contexts";

const ChangeTheme = () => {
  const { isDarkTheme, setIsDarkTheme } = useAppContext();
  return (
    <section className="py-2">
      <FormGroup>
        <FormControlLabel
          control={
            <IconButton
              sx={{ ml: 1 }}
              onClick={() => setIsDarkTheme((prev) => !prev)}
              color="inherit"
            >
              {isDarkTheme ? <Brightness7 /> : <Brightness4 />}
            </IconButton>
          }
          label="Toggle Dark Mode"
        />
      </FormGroup>
    </section>
  );
};

export default ChangeTheme;
