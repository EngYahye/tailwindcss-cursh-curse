import React from 'react'
import '../index.css'
import img1 from '../images/avatar-ali.png'
import img2 from '../images/avatar-anisha.png'
import img3 from '../images/avatar-richard.png'

const Testmonial = () => {
  return (
    <section id="Testmonial">
        <div className="max-w-6xl px-5 mx-auto mt-32 text-center">
            <h2 className="text-4xl font-bold text-center ">
                What's Differnt about manage?
            </h2>
            {/* testmonials */}
            <div className="flex  flex-col space-y-12 md:flex-row mt-24 md:space-y-0 md:space-x-6">
                {/* Testmonial 1 */}
                <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3">
                    <img  className='w-16 -mt-14'src={img1} alt="" />
                    <h5 className="text-lg font-bold">Ali Bravo</h5>
                    <p className="text-sm text-drakGrayishBlue"> “We have been able to cancel so many other subscriptions since
              using Manage. There is no more cross-channel confusion and
              everyone is much more focused.”</p>
                </div>
                {/* Testmonial 2 */}
                <div className="flex  flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3">
                    <img  className='w-16 -mt-14'src={img2} alt="" />
                    <h5 className="text-lg font-bold">Anisha Li</h5>
                    <p className="text-sm text-drakGrayishBlue">  “Manage has supercharged our team’s workflow. The ability to
              maintain visibility on larger milestones at all times keeps
              everyone motivated.”</p>
                </div>
                {/* Testmonial 3 */}
                <div className=" flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray flex md:w-1/3">
                    <img  className='w-16 -mt-14'src={img3} alt="" />
                    <h5 className="text-lg font-bold">Revhard watts</h5>
                    <p className="text-sm text-drakGrayishBlue "> “ “Manage has supercharged our team’s workflow. The ability to
              maintain visibility on larger milestones at all times keeps
              everyone motivated.”</p>
                </div>
            </div>
            <div className="my-16">
                 <a href="#" className="  p-3 px-6 pt-2 text-white rounded-full hover:bg-brightRedLight baseline bg-brightRed">Get started</a>

            </div>
        </div>

    </section>
  )
}

export default Testmonial

