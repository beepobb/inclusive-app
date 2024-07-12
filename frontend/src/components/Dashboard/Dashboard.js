// import React, { useContext } from 'react';
// import DefaultLayout from '../Layout/layout';
// import './Dashboard.css'
// import { Box } from '@mui/material';
// import UserContext from '../../contexts/UserContext';

// export default function Dashboard() {
//     const [user] = useContext(UserContext);
    
//     return (
//         <DefaultLayout >
//             <Box sx={{marginLeft:13, marginTop:15 }}>
//                 <span className='welcome-text'>Welcome back, { (user) ? user.name : ''}!</span>
//             </Box>
//             <Box sx={{textAlign:'center'}}>
//                 <Box sx={{marginLeft: 50, marginTop:8, width: 350, height: 350, borderRadius: 500, bgcolor: 'white', display:'flex', flexDirection:'column', alignItems:'center'}}>
//                     <span className='pt'>{ (user) ? user.points : 0}</span>
//                     <span className='pt-text'>points</span>
//                 </Box>
//             </Box>
            
//         </DefaultLayout>
//       );
// }

import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, points) {
  return { name, points};
}

const rows = [
  createData('John.Doe', 376),
  createData('Jane-Smith', 544),
  createData('Alice.Johnson', 332),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ maxWidth: 650, margin: 20}} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>User</TableCell>
            <TableCell align="right">Points</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.points}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

