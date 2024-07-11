import React, { useContext } from 'react';
import DefaultLayout from '../Layout/layout';
import './Dashboard.css'
import { Box } from '@mui/material';
import UserContext from '../../contexts/UserContext';

export default function Dashboard() {
    const [user] = useContext(UserContext);
    
    return (
        <DefaultLayout>
            <Box sx={{marginLeft:13, marginTop:15 }}>
                <span className='welcome-text'>Welcome back {user.name}</span>
            </Box>
            <Box sx={{marginLeft: 13, marginTop:8, width: 350, height: 200, borderRadius: 2, bgcolor: '#E16262'}}>
            <div className='box-content'>
                <span className='box-text'>Today's Progress</span>
                <Box sx={{marginTop: 1, width: 290, height: 100, borderRadius: 2, bgcolor: 'white'}}>
                <div className='box-content'>
                    <Box sx={{padding: 4}}>
                        <span className='pt-text'>{user.points} pts</span>
                    </Box>
                </div>
                </Box>
            </div>
            </Box>
        </DefaultLayout>
      );
}

