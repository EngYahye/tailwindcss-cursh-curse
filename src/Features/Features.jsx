import React from 'react'
import '../index.css'

const Features = () => {
  return (
    <section id="features">
        <div className="container flex flex-col px-4 space-y-12 mx-auto mt-10 md:flex-row
         md:space-y-0">
            <div className="flex flex-col space-y-12 md:w-1/2" >
                <h1 className="max-w-md text-4xl font-bold text-center 
                
                md:text-left">
                    what's Difference about manae?
                </h1>
                <p className="max-w-sm text-center text-drakGrayishBlue md:text-left">
                Manage provides all the functionality your team needs, 
                without the complexity. Our software is tailor-made for modern digital
                 product teams.

                </p>
                </div>

                <div className="flex flex-col space-y-8 md:w-1/2">
                    <div className="flex flex-col space-y-3 md:space-x-6 md:space-y-0 md:flex-row">
                        <div className="rounded-l-full bg-brightRedSubLight md:bg-transparent">
                            <div className='flex items-center space-x-2'>
                                <div className='px-4 py-2 text-white rounded-full md:py-1 bg-brightRed'>
                                    01
                                </div>
                                <h3 className="md:hidden text-base font-bold md:mb-4 ">
                                Track company-wide progress
                                </h3>

                            </div>

                        </div>
                        

                        <div>
                            
                            <h3 className=" hidden text-lg font-bold mb-4 md:block">
                            Track company-wide progress
                            </h3>
                            <p className="text-drakGrayishBlue">
                            See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again. 
                            </p>
                            </div>


                     </div>
                    <div className="flex flex-col space-y-3 md:space-x-6 md:space-y-0 md:flex-row">
                        <div className="rounded-l-full bg-brightRedSubLight md:bg-transparent">
                            <div className='flex items-center space-x-2'>
                                <div className='px-4 py-2 text-white rounded-full md:py-1 bg-brightRed'>
                                    02
                                </div>
                                <h3 className="md:hidden text-base font-bold md:mb-4 ">
                                Advanced built-in reports 
                                </h3>

                            </div>

                        </div>
                        

                        <div>
                            
                            <h3 className=" hidden text-lg font-bold mb-4 md:block">
                            Advanced built-in reports 
                            </h3>
                            <p className="text-drakGrayishBlue">
                             Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed.
                            </p>
                            </div>


                     </div>
                    <div className="flex flex-col space-y-3 md:space-x-6 md:space-y-0 md:flex-row">
                        <div className="rounded-l-full bg-brightRedSubLight md:bg-transparent">
                            <div className='flex items-center space-x-2'>
                                <div className='px-4 py-2 text-white rounded-full md:py-1 bg-brightRed'>
                                    03
                                </div>
                                <h3 className="md:hidden text-base font-bold md:mb-4 ">
                                Everything you need in one place
                                </h3>

                            </div>

                        </div>
                        

                        <div>
                            
                            <h3 className=" hidden text-lg font-bold mb-4 md:block">
                            Everything you need in one place
                            </h3>
                            <p className="text-drakGrayishBlue">
                             Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.
                            </p>
                            </div>


                     </div>

                    </div> 

             
            

        </div>
    </section>
  )
}

export default Features