import React from 'react'

function Video() {
  return (
        <div>
            <video className='w-full h-full'  muted loop autoPlay>
                <source src="https://res.cloudinary.com/debkxazes/video/upload/v1717617867/Shree%20Khatu%20Shyam%20Industry%20-%20Assets/Video/cul2jkxpofmqwbpf5fdn.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default Video