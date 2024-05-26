import './leftbar.scss'
import { Link } from 'react-router-dom'
import img1 from '../../assets/art1.jpeg'
import { useContext } from 'react';
import { AuthContext } from '../../context/authContext';


const LeftBar = () => {

    const {currentUser} = useContext(AuthContext);

    return (
        <div className='leftbar'>
            <div className="container">
                <div className="menu">
                    <div className="user">
                        <img src={currentUser.profilePic} alt="" />
                        <span>{currentUser.name}</span>
                    </div>
                    <div className="item">
                        <img className='item-icon' src={img1} alt="" />
                        <span>
                            Friends
                        </span>
                    </div>
                    <div className="item">
                        <img className='item-icon' src={img1} alt="" />
                        <span>
                            Friends
                        </span>
                    </div>
                    <div className="item">
                        <img className='item-icon' src={img1} alt="" />
                        <span>
                            Friends
                        </span>
                    </div>
                    <div className="item">
                        <img className='item-icon' src={img1} alt="" />
                        <span>
                            Friends
                        </span>
                    </div>
                    <div className="item">
                        <img className='item-icon' src={img1} alt="" />
                        <span>
                            Friends
                        </span>
                    </div>
                    <div className="item last-item">
                        <img className='item-icon' src={img1} alt="" />
                        <span>
                            Friends
                        </span>
                    </div>
                </div>
                <hr />
                <div className="menu">
                    
                    <div className="item first-item">
                        <img className='item-icon' src={img1} alt="" />
                        <span>
                            Friends
                        </span>
                    </div>
                    <div className="item">
                        <img className='item-icon' src={img1} alt="" />
                        <span>
                            Friends
                        </span>
                    </div>
                    <div className="item">
                        <img className='item-icon' src={img1} alt="" />
                        <span>
                            Friends
                        </span>
                    </div>
                    <div className="item">
                        <img className='item-icon' src={img1} alt="" />
                        <span>
                            Friends
                        </span>
                    </div>
                    <div className="item last-item">
                        <img className='item-icon' src={img1} alt="" />
                        <span>
                            Friends
                        </span>
                    </div>
                </div>
                <hr />
                <div className="menu">
                   
                    <div className="item first-item">
                        <img className='item-icon' src={img1} alt="" />
                        <span>
                            Friends
                        </span>
                    </div>
                    <div className="item">
                        <img className='item-icon' src={img1} alt="" />
                        <span>
                            Friends
                        </span>
                    </div>
                    <div className="item">
                        <img className='item-icon' src={img1} alt="" />
                        <span>
                            Friends
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LeftBar