import React from 'react'

const ContactForm = () => {
  return (
    <div className='relative'>
      <div><iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d55620.062113491345!2d71.6821556!3d29.392128249999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1710498892147!5m2!1sen!2s" className='w-full h-[600px]' loading="lazy" ></iframe></div>
      <div className="w-[480px] px-[50px] py-[40px] flex flex-col gap-3 bg-white absolute bottom-[8%] right-[5%]">
        <h2 className='text-[30px] font-semibold text-black '>Free consulting</h2>
       <form className='flex flex-col gap-5'>
       <input className='outline-none bg-[#edd4fe] h-[40px] my-2 w-full pl-4' type="text" placeholder='Full Name'/>
       <input className='outline-none bg-[#edd4fe] h-[40px] w-full pl-4' type="text" placeholder='Full Name'/>
       <textarea placeholder='Message' name="message" id='message' className=' bg-[#edd4fe] my-2 p-3 border-black w-full' rows={4} cols={40}></textarea>
       <button className="btn homesec1-btn1 bg-[#cb81fa] hover:text-black h-[50px] w-[130px] text-[18px] font-semibold text-white rounded">Submit Now</button>
       </form>
      </div>
    </div>
  )
}

export default ContactForm
