import './rightbar.scss'
import { Link } from 'react-router-dom'
import img1 from '../../assets/art1.jpeg'
const RightBar = () => {
    return (
        <div className='rightbar'>
            <div className="container">
                <div className="suggestions box">
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
                </div>
                <div className="latest">

                </div>
                <div className="friends-online">

                </div>
            </div>
        </div>
    )
}

export default RightBar