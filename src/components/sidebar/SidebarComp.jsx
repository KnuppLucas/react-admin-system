import { LineStyle, Timeline, TrendingUp, Person, Inventory2, MonetizationOn, Assessment,
Email, Feedback, Message, ManageAccounts, Report } from '@mui/icons-material';
import "./sidebar.css"

function SidebarComp() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <LineStyle className='sidebarIcon'/>
              Home
            </li>
            <li className="sidebarListItem">
              <Timeline className='sidebarIcon'/>
              Analytics
            </li>
            <li className="sidebarListItem">
              <TrendingUp className='sidebarIcon' />
              Sales
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem ">
              <Person className='sidebarIcon'/>
              Users
            </li>
            <li className="sidebarListItem ">
              <Inventory2 className='sidebarIcon'/>
              Products
            </li>
            <li className="sidebarListItem">
              <MonetizationOn className='sidebarIcon'/>
              Transactions
            </li>
            <li className="sidebarListItem">
              <Assessment className='sidebarIcon' />
              Reports
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem ">
              <Email className='sidebarIcon'/>
              Mail
            </li>
            <li className="sidebarListItem">
              <Feedback className='sidebarIcon'/>
              Feedback
            </li>
            <li className="sidebarListItem">
              <Message className='sidebarIcon' />
              Messages
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem ">
              <ManageAccounts className='sidebarIcon'/>
              Manage
            </li>
            <li className="sidebarListItem">
              <Timeline className='sidebarIcon'/>
              Analytics
            </li>
            <li className="sidebarListItem">
              <Report className='sidebarIcon' />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default SidebarComp