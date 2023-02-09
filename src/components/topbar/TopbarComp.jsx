import React from 'react';
import './topbar.css';
import { Notifications, Language, Settings } from '@mui/icons-material';

export default function TopbarComp() {
  return (
    <div className='topbar'>
        <div className='topbarWrapper'>
            <div className="topLeft"><span className="logo">React Admin System</span></div>
            <div className="topRight">
              <div className="topbarIconContainer">
                <Notifications />
                <span className="topIconBadge">2</span>
              </div>
              <div className="topbarIconContainer">
                <Language />
                <span className="topIconBadge">2</span>
              </div>
              <div className="topbarIconContainer">
                <Settings />
              </div>
              <img src="https://www.kindpng.com/picc/m/22-223941_transparent-avatar-png-male-avatar-icon-transparent-png.png" alt="avatar" className='topAvatar' />
            </div>
        </div>
    </div>
  )
}
