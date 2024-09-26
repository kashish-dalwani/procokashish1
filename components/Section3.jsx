import React from 'react'

function Section3() {
  return (
    <div>
      <div className='flex items-center justify-center ml-14 mt-20 space-x-[28rem]'>
        <p className='text-5xl ml-[-70px]'>Why Choose<br></br>ProCohat?</p>
        <p className='text-lg'>Our commitment to innovation, expertise, and<br></br> partnership distinguishes us. Here’s why<br></br> ProCohat is your ideal technology partner</p>
      </div>
      <div className='ml-5 mt-11 mr-5 flex items-center justify-center space-x-36'>
        <div className='shadow-md border-custom-gray p-3'>\
        <img src='vector1.png'></img>
        <p className='text-2xl mt-3'>Innovative solutions</p>
        <p className='text-sm'>We lead the charge in technology<br></br> trends, offering solutions that ensure<br></br> your competitive edge in a fast-paced<br></br> market</p>
        </div>
        <div className='shadow-md border-custom-gray p-4'>
        <img src='vector2.png'></img>
        <p className='text-2xl mt-3'>Expert Team</p>
        <p className='text-sm'>Our team of industry veterans brings<br></br> extensive knowledge and experience,<br></br> delivering tailored solutions that<br></br> resonate with your business goals</p>
        </div>
        <div className='shadow-md border-custom-gray p-4'>
        <img src='vector3.png'></img>
        <p className='text-2xl mt-3'>Client Centric Approach</p>
        <p className='text-sm'>We build enduring relationships <br></br>through consistent value delivery and a<br></br> deep understanding of your unique<br></br> needs</p>
        </div>
      </div>
    </div>
  )
}

export default Section3
