import React from 'react'

function Section4() {
  return (
    <div className='mt-20 ml-12 mr-12 flex justify-center space-x-44'>
      <div>
            <p className='text-2xl text-grayCustom'>Let's work together</p>
            <div className='border-1 border-[#CFCFCF] p-3 rounded-md'>
            <div className='flex justify-center space-x-28 mt-8 '>
            <div>
            <label className='font-bold'>Name</label><br></br>
            <input
                type="text"
                placeholder="Enter your name"
                className="border-b border-gray-300 focus:border-blue-500 focus:outline-none p-2 w-64" />
            </div>
            <div>
            <label className='font-bold'>Email</label><br></br>
            <input
                type="email"
                placeholder="Enter your email"
                className="border-b border-gray-300 focus:border-blue-500 focus:outline-none p-2 w-64" />
            </div>
        </div>
        <div className='flex justify-center space-x-28 mt-8'>
            <div>
            <label className='font-bold'>Company Name</label><br></br>
            <input
                type="text"
                placeholder="Enter your company’s name"
                className="border-b border-gray-300 focus:border-blue-500 focus:outline-none p-2 w-64" />
            </div>
            <div>
            <label className='font-bold'>Current website URL</label><br></br>
            <input
                type="email"
                placeholder="www.companywebsite.com"
                className="border-b border-gray-300 focus:border-blue-500 focus:outline-none p-2 w-64" />
            </div>
        </div>
        <div className='mt-8'><label className='font-bold'>Tell us about your project</label><br></br>
        <input
        type='text'
        placeholder='Type your message'
        className="py-5 border-b border-gray-300 focus:border-blue-500 focus:outline-none p-2 w-96" />

        </div>
        <button className='w-[32rem] bg-black text-white mt-6 h-11 ml-12 rounded-lg mb-2'>Submit</button>
        
      </div>
      </div>
      <div>
        <div className='mt-12'>
            <img src='/rectangle.png' className='rounded-xl'></img>
            <img src='/gradient.png' className='mt-[-140px] rounded-xl'></img>
            <div className='mt-[-240px] text-white ml-4'>
                <p>Would you rather have a call with us ?</p>
                <p className='text-2xl'>Set up a free discovery call<br></br> to talk about the project.</p>
                <button className="bg-white text-black p-1 rounded mb-10 mt-4 w-38">
                    Get in Touch<img src='/arrowvector.png' className='ml-[120px] mt-[-20px]'></img>
                </button>           
            </div>
        </div>
        <div className='mt-16 border-1 border-[#CFCFCF] p-3 rounded-md'>
            <p>Other contact options</p>
            <div className="bg-black text-white flex items-center h-11 p-2 rounded-md">
                <img src="/mailvector.png" className="h-6 w-6 mr-2" />
                <p className="ml-2 mt-3">info@procohat.com</p>
</div>
            <div className="bg-black text-white flex items-center h-14 p-2 rounded-md mt-3">
                <img src='/addressvector.png' className="h-6 w-6 mr-2"></img>
                <p className="ml-2 mt-3">Plot No., 20, IT park Rd, Parsodi<br></br>Nagpur, Maharashtra
            440022</p></div>
        </div>
      </div>
    </div>
  )
}

export default Section4
