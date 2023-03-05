import {
  Box,
  Divider, MenuItem, MenuList, Paper,
} from '@mui/material';
import { Link } from 'react-router-dom';

export const Dashboard = () => {
  return (
    <Box sx={{ p: 2 }}>
      <div>

        <h2>Borrowers: Find 2 Lenders to help you recover your keys!</h2>
        <p> Go to your profile to see your public recovery key</p>
      </div>
      <Paper sx={{ maxWidth: 400, '& a': { textDecoration: 'none' } }}>
        <MenuList>
          {/* <Link to="/how-it-works">
            <MenuItem>
              How it works
            </MenuItem>
          </Link> */}
          <Divider />
          <Link to="/setup">
            <MenuItem>
              Setup Recovery
            </MenuItem>
          </Link>
          <Divider />
          <Link to="/recovery">
            <MenuItem>
              I lost my private key!
            </MenuItem>
          </Link>
        </MenuList>
      </Paper>
    </Box>
  );
};
