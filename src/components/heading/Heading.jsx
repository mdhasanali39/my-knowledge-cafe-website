import profileImg from '../../assets/images/profile.png'

const Heading = () => {
    return (
        <div className='flex justify-between'>
            <h1 className='text-3xl font-bold'>Knowledge Cafe</h1>
            <img 
            className='w-[40px]'
            src={profileImg}
            />
        </div>
    );
};

export default Heading;