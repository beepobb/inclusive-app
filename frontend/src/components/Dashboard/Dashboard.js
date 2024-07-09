import React from 'react';
import { useState, useEffect } from 'react';
import DefaultLayout from '../Layout/layout';
import './Dashboard.css'


export default function Dashboard() {
    return (
        <DefaultLayout>
            <div className='dashboard'>
                <h1>Dashboard</h1>
            </div>
        </DefaultLayout>
      );
}

