import React from 'react';
import "./sidebar.css";
import LineStyleIcon from '@mui/icons-material/LineStyle';
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

export default function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className='sidebarTitle'>Dashboard</h3>
                    <ul className='sidebarList'>
                    <li className='sidebarListItem'>
                        <LineStyleIcon />
                        Home
                    </li>
                    <li className='sidebarListItem'>
                        <TimelineIcon />
                        Analytics
                    </li>
                    <li className='sidebarListItem'>
                        <TrendingUpIcon />
                        Sales
                    </li>
                    </ul>
                    <h3 className='sidebarTitle'>Dashboard</h3>
                    <ul className='sidebarList'>
                    <li className='sidebarListItem'>
                        <LineStyleIcon />
                        Home
                    </li>
                    <li className='sidebarListItem'>
                        <TimelineIcon />
                        Analytics
                    </li>
                    <li className='sidebarListItem'>
                        <TrendingUpIcon />
                        Sales
                    </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
