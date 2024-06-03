import React from 'react'
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import logo from '../imgs/logo.png'
import bgblur from '../imgs/bgblur.png'
import Ellipse1 from '../imgs/Ellipse1.png'
import Ellipse2 from '../imgs/Ellipse2.png'
import Ellipse3 from '../imgs/Ellipse3.png'
import mob1 from '../imgs/Mockup.png'
import mob2 from '../imgs/Mockup (1).png'
import mob3 from '../imgs/Mockup (2).png'
import { FaArrowRightLong } from "react-icons/fa6";
import { FaRegCirclePlay } from "react-icons/fa6";
import features from '../imgs/features.png'
import star from '../imgs/star-05.png'
import cube from '../imgs/cube-02.png'
import cube2 from '../imgs/cube-04.png'
import ball from '../imgs/ball.png'
import choose from '../imgs/Choose.png'
import choose2 from '../imgs/choose2.png'
import group from '../imgs/Group.png'
import frame from '../imgs/Frame.png'

const LandingPage = () => {
  return (
<>
    <section className='flex justify-between items-center w-full h-24 px-6'>
      <div className='flex justify-between items-center gap-6'>
        <div>
            <img src={logo} alt='logo' className='w-[70px]' />
        </div>

        <div>
            <ul className='flex justify-between gap-2'>
                <li><span className='text-red-500 font-bold'>Home</span></li>
                <li>About</li>
                <li>Pricing</li>
                <li>Features</li>
            </ul>
        </div>
      </div>

      <div>
        <button className='bg-black text-white px-4 py-1 text-xs'>Download</button>
      </div>
    </section>

    {/* hero section  */}
    <section className='px-[1.5rem]'>
        <div className='flex justify-between'>
            <div className='relative w-full'>
                <img src={bgblur} alt='bg' className='w-[50%] h-[50vh]' />
            </div>
            <div className='absolute top-48'>
                <h1 className='text-4xl font-bold py-1'>make the best</h1>
                <h1 className='text-4xl font-bold py-1'>financial decisions</h1>
                <p className='py-1 text-xs'>Cum et convallis risus placerat aliquam,<br /> nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
            </div>

           

            <div>
                <div className='relative'>
                    <img src={Ellipse1} alt='' className='w-[70%]' />
                </div>
                <div className='absolute top-[110px]'>
                    <img src={Ellipse2} alt='' className='w-[50%]' />
                </div>
                <div className='absolute top-[120px]'>
                    <img src={Ellipse3} alt='' className='w-[40%]' />
                </div>

                <div className='flex justify-between'>
                <div className='absolute top-20'>
                    <img src={mob1} alt='' className='w-[200px]'  />
                </div>
                <div className='absolute top-20'>
                    <img src={mob2} alt='' className='w-[200px]' />
                </div>
                <div className='absolute top-20'>
                    <img src={mob3} alt='' className='w-[200px]' />
                </div>
                </div>

                
            </div>
        </div>

            <div className='flex'>
            <button className='bg-black text-white px-4 py-2 text-xs flex items-center gap-2'>Get Started<FaArrowRightLong /></button>
            <button className='px-4 py-2 text-xs flex items-center gap-2'><FaRegCirclePlay className='text-xl' />Watch Video</button>
            </div>
    </section>


    {/* features  */}
    <section className='py-[2rem]'>
        <div className='flex justify-between'>
            <div>
                <div className='relative'>
                    <img src={bgblur} alt='' className='w-[90%]' />
                </div>
                <div className='absolute z-10 top-[25rem]'>
                    <img src={features} alt='' className='w-[60%]' />
                </div>
            </div>

            <div>
               <div>
                    <p className='text-xs text-red-500'>FEATURES</p>
                    <h1 className='text-3xl font-bold'>Uifry Premium</h1>
               </div>
                    <div className='flex gap-2 py-2'>
                    <img src={star} alt='star' />
                    <p className='font-bold'>Budgething Intervals</p>
                    </div>
                    <div>
                        <p className='text-xs'>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
                    </div>

                    <div className='flex gap-2 py-2'>
                    <img src={cube2} alt='star' />
                    <p className='font-bold'>Budgething Intervals</p>
                    </div>
                    <div>
                        <p className='text-xs'>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
                    </div>


                    <div className='flex gap-2 py-2'>
                    <img src={cube} alt='star' />
                    <p className='font-bold'>Budgething Intervals</p>
                    </div>
                    <div>
                        <p className='text-xs'>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
                    </div>
               
            </div>
        </div>
    </section>


    {/* choose  */}
    <section className='py-[2rem]'>
        <div className='flex justify-between gap-4'>
        <div className='w-[50%]'>
               <div>
                    <p className='text-xs text-red-500'>ADVANTNAGES</p>
                    <h1 className='text-3xl font-bold'>Why Choose Uifry?</h1>
               </div>
                    <div className='flex gap-2 py-2'>
                    <img src={ball} alt='star' className='w-[30px]' />
                    <p className='font-bold'>Clever Notifications</p>
                    </div>
                    <div>
                        <p className='text-xs'>Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.</p>
                    </div>
            </div>

            <div className='w-[50%]'>
                <div className='relative'>
                    <img src={bgblur} alt='' className='w-[60%]' />
                </div>
                <div className='absolute top-[55rem]'>
                    <img src={choose} alt='' className='w-[80%]' />
                </div>
            </div>


        </div>
    </section>

    <section className='py-[2rem]'>
        <div className='flex justify-between gap-4'>
       

            <div className='w-[50%]'>
                <div className='relative'>
                    <img src={bgblur} alt='' className='w-[60%]' />
                </div>
                <div className='absolute top-[75rem]'>
                    <img src={choose2} alt='' className='w-[50%]' />
                </div>
            </div>

            <div className='w-[50%]'>
                    <div className='flex gap-2 py-2'>
                    <img src={star} alt='star' className='w-[30px]' />
                    <p className='font-bold'>fully customizable</p>
                    </div>
                    <div>
                        <p className='text-xs'>Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.</p>
                    </div>
            </div>


        </div>
    </section>


    {/* testinomial  */}
    <section>
        <div className='text-center'>
            <p className='text-xs'>TESTIMONIAL</p>
            <h1 className='text-3xl font-bold'>What Our Users<br/>Say About Us ?</h1>
        </div>

        <div className='flex justify-between gap-4'>
            <div className='w-[50%]'>
                <img src={group} alt='' className='w-[70%]' />
            </div>

            <div className='w-[50%] my-[2rem]'>
                <h1 className='my-[1rem] text-2xl font-bold'>The best financial accounting app ever!</h1>
                <p>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.”</p>
            </div>
        </div>
    </section>

    <section className='my-[2rem]'>
        <div>
            <p className='text-xs text-red-500'>FAQ</p>
            <h1 className='text-2xl font-bold'>Frequently asked questions</h1>
        </div>

        <div className='grid grid-cols-2 gap-[2rem] py-4'>
            <div className='bg-[#ff5555] p-4 text-white rounded-md'>
                <h3 className='text-sm font-semibold'>the best financial accounting app ever!</h3>
                <p className='text-xs'>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</p>
            </div>
            <div>
                <h3>the best financial accounting app ever!</h3>
                <p>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</p>
            </div>
            <div>
                <h3>the best financial accounting app ever!</h3>
                <p>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</p>
            </div>
            <div className='bg-[#ff5555] p-4 text-white rounded-md'>
                <h3 className='text-sm font-semibold'>the best financial accounting app ever!</h3>
                <p className='text-xs'>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</p>
            </div>
            <div className='bg-[#ff5555] p-4 text-white rounded-md'>
                <h3 className='text-sm font-semibold'>the best financial accounting app ever!</h3>
                <p className='text-xs'>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</p>
            </div>
            <div>
                <h3>the best financial accounting app ever!</h3>
                <p>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</p>
            </div>
        </div>
    </section>

    <section>
        <div className='py-[2rem]'>
            <img src={frame} alt='frame' className='w-full h-[70vh]' />
        </div>
    </section>

    {/* footer  */}
    <section className='py-[2rem]'>
        <div className='grid grid-cols-5 gap-2'>
            <div>
                <img src={logo} alt='logo' className='w-[70px] py-1' />
                <p className='flex items-center gap-2 text-xs py-1'><MdEmail className='text-red-500' />help@frybix.com</p>
                <p className='flex items-center gap-2 text-xs py-1'><FaPhoneAlt className='text-red-500' />+1 234 456 678 89</p>
            </div>

            <div>
                <ul>
                    <p className='text-sm'>Home</p>
                    <li className='text-xs'>About Us</li>
                    <li className='text-xs'>Bookings</li>
                    <li className='text-xs'>Blog</li>
                </ul>
            </div>
            <div>
                <ul>
                    <p>Legal</p>
                    <li className='text-xs'>Terms Of Use</li>
                    <li className='text-xs'>Privacy Policy</li>
                    <li className='text-xs'>Cookie policy</li>
                </ul>
            </div>
            <div>
                <ul>
                    <p>Product</p>
                    <li className='text-xs'>Take Tour</li>
                    <li className='text-xs'>Live Chat</li>
                    <li className='text-xs'>Reveiws</li>
                </ul>
            </div>
            <div>
                <ul>
                    <p>Newsletter</p>
                  
                    <div class="flex items-center border border-gray-300 rounded-md overflow-hidden shadow-sm">
                         <input type="email" placeholder="Enter your email" class="flex-grow px-4 py-2 outline-none text-gray-700"/>
                         <button class="bg-blue-500 text-white px-4 py-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">Subscribe</button>
                    </div>

                
                    
                </ul>
            </div>
        </div>
       
        <div className='py-[2rem]'>
            <p className='text-xs text-center'>Copyright 2022 uifry.com all rights reserved</p>
        </div>
    </section>

    
</>
    
  )
}

export default LandingPage
