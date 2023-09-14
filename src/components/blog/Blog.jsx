import PropTypes from 'prop-types';
import { BsBookmarkStarFill } from 'react-icons/Bs';

const Blog = ({blog}) => {
    const {title,author,author_img, cover,hashtages,posted_date,reading_time} = blog;
    return ( 
        <div className='mb-20'>
            <figure>
                <img src={cover}/>
            </figure>
            <div className='flex justify-between'>
                <div className='flex gap-5'>
                    <img
                     className='w-12 h-12'
                     src={author_img}
                     />
                    <div>
                        <h4>{author}</h4>
                        <p>{posted_date}</p>
                    </div>
                </div>
                {/* reading time  */}
                <div>
                    <span>{reading_time}</span>
                    <button><BsBookmarkStarFill/></button>
                </div>
            </div>
        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired,
}
export default Blog;