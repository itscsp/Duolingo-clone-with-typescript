import {AppBar, Box, Toolbar, Typography} from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Box display="flex" justifyContent="center" width="100%">
          <Link to={'/'}>
          <Typography variant="h3" >
            Dolingo
          </Typography>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Header