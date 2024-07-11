import React, { useContext } from 'react';
import DefaultLayout from '../Layout/layout';
import './Dashboard.css'
import { Box } from '@mui/material';
import UserContext from '../../contexts/UserContext';

export default function Dashboard() {
    const [user] = useContext(UserContext);
    
    return (
        <DefaultLayout >
            <Box sx={{marginLeft:13, marginTop:15 }}>
                <span className='welcome-text'>Welcome back, { (user) ? user.name : ''}!</span>
            </Box>
            <Box sx={{textAlign:'center'}}>
                <Box sx={{marginLeft: 50, marginTop:8, width: 350, height: 350, borderRadius: 500, bgcolor: 'white', display:'flex', flexDirection:'column', alignItems:'center'}}>
                    <span className='pt'>{ (user) ? user.points : 0}</span>
                    <span className='pt-text'>points</span>
                </Box>
            </Box>
            
        </DefaultLayout>
      );
}

