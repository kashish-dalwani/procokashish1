import React from 'react';

function Section2() {
  return (
    <div>
      <div className='flex items-center justify-center space-x-8 mt-9 font-bold text-lg'>
        <p className="border-b-2 border-[#8952FD]">Electronic Health Records (EHR) Systems</p>
        <p>Telemedicine Solutions</p>
        <p>Healthcare Data Security</p>
        <p>Patient Management Systems</p>
      </div>
      <div className='flex items-center justify-center space-x-14 mt-7'>
      <div className='w-63 ml-14'>
        <img src='/section2img.png'></img>
      </div>
      <div>
        <p className='font-bold text-4xl mt-[-30px]'>Secure, Accessible, and Efficient<br></br> Patient Data Management</p>
        <p className='mt-8 text-lg'>Efficient management of patient records is at the heart of any <br></br>healthcare operation. ProCohat’s EHR systems provide secure,<br></br> streamlined access to patient data, enabling healthcare<br></br> professionals to deliver faster and more accurate care. Our<br></br> systems ensure compliance with healthcare regulations while<br></br> making it easier for providers to manage patient histories,<br></br> treatment plans, and lab results.</p>
        <ul className='list-disc mt-8 text-lg'>
            <li>Secure, cloud-based patient record management</li>
            <li className='mt-4'>Easy access to patient histories and treatment information</li>
            <li className='mt-4'>Ensure compliance with data protection and healthcare<br></br> standards</li>
        </ul>
      </div>
      </div>
    </div>
  )
}

export default Section2
