import './navbar.scss'
import { Link } from 'react-router-dom'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeIcon from '@mui/icons-material/LightMode';
import GridViewIcon from '@mui/icons-material/GridView';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SearchIcon from '@mui/icons-material/Search';

const NavBar = () => {
    return (
        <div className='navbar'>
            <div className="left">
                <Link to={"/"} style={{textDecoration:"none", color:"black"}}>
                    <div className="logo">Art Gallery</div>
                </Link>
                <HomeOutlinedIcon/>
                <DarkModeOutlinedIcon/>
                <GridViewIcon/>
                <div className="search">
                    <SearchIcon/>
                    <input type="text" name="" id="" placeholder='Search...' />
                </div>
            </div>
            <div className="right">
                <PermIdentityIcon/>
                <MailOutlineIcon/>
                <NotificationsNoneIcon/>
                <div className="user">
                    <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="" />
                    <span>Oliver</span>
                </div>
            </div>
        </div>
    )
}

export default NavBar