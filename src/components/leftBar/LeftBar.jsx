import './leftbar.scss'
import { Link } from 'react-router-dom'
import img1 from '../../assets/art1.jpeg'
const LeftBar = () => {
    return (
        <div className='leftbar'>
            <div className="container">
                <div className="menu">
                    <div className="user">
                        <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="" />
                        <span>Oliver</span>
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