import './posts.scss'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';

const Posts = () => {
    const posts = [
        {
          "id": 1,
          "name": "Jacques",
          "img": "https://images.pexels.com/photos/219998/pexels-photo-219998.jpeg",
          "userId": 101,
          "profilePic": "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
          "desc": "A breathtaking view of the mountains during sunrise."
        },
        {
          "id": 2,
          "name": "Batman",
          "img": "https://images.pexels.com/photos/417506/pexels-photo-417506.jpeg",
          "userId": 102,
          "profilePic": "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
          "desc": "Being a unicorn is an enchanting experience unlike any other. Unlike humans, unicorns possess a magical aura that exudes beauty and grace. Their days are filled with adventure as they gallop through mystical forests and prance under rainbows. Unicorns have the unique ability to heal and bring joy to those around them, a power humans can only dream of. With a shimmering horn, unicorns can tap into ancient magic, creating miracles and wonders. Their lives are unburdened by the mundane worries that humans face daily. Unicorns communicate with nature, forming bonds with woodland creatures and the elements. They inspire legends and tales of hope, embodying purity and strength. While humans strive for happiness, unicorns live it effortlessly, their existence a blend of fantasy and reality. To be a unicorn is to experience life in its most magical and serene form, far beyond the ordinary scope of human life."
        },
        {
          "id": 3,
          "name": "John Senna",
          "img": "https://images.pexels.com/photos/257360/pexels-photo-257360.jpeg",
          "userId": 103,
          "profilePic": "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
          "desc": "A serene path through the lush green forest."
        },
        {
          "id": 4,
          "name": "Patrick Sebastien",
          "img": "https://images.pexels.com/photos/34950/pexels-photo.jpg",
          "userId": 104,
          "profilePic": "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
          "desc": "Golden sunset over a tranquil beach."
        },
        {
          "id": 5,
          "name": "Pascal Obistro",
          "img": "https://images.pexels.com/photos/219998/pexels-photo-219998.jpeg",
          "userId": 105,
          "profilePic": "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
          "desc": "Rolling sand dunes under a clear blue sky."
        }
      ]
    return (
        <div className="posts">
            {posts.map(post => (
                <div className="post">
                    <div className="post-head">
                        <img className='user-img' src={post.profilePic} alt="" />
                        <div className="user-infos">
                            <div className="user-info">
                                <p>{post.name}</p>
                                <p className='small'>a few seconds ago</p>
                            </div>
                            <div className="user-infos-icon">
                                <MoreHorizIcon className='icon'/>
                            </div>
                        </div>
                    </div>
                    <div className="post-content">
                        <p>{post.desc}</p>
                        <img src={post.img} alt="" />
                        <div className="post-reactions">
                            <div className="post-like">
                                <FavoriteBorderIcon className='icon'/>
                                <a href="">Like</a>
                            </div>
                            <div className="post-like">
                                <CommentIcon className='icon'/>
                                <a href="">Comment</a>
                            </div>
                            <div className="post-like">
                                <ShareIcon className='icon'/>
                                <a href="">Share</a>
                            </div>

                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default Posts