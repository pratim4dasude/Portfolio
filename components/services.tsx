'use client'

import { motion } from 'framer-motion'

import FadeIn from '../lib/variants'
import AnimatedCounter from '../lib/animatedCounter'




const Services = () => {
    return (
        <section id='services' className="z-30 translate-y-1 bg-secondary">
            <div className="container w-full py-[100px] lg:py-[200px]">
                <div className="flex flex-col justify-between gap-12 px-2 lg:flex-row lg:px-0">

                    <motion.div

                        variants={FadeIn('right', 0.2)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: true, amount: 0.8 }}

                        className="flex full flex-col justify-between lg:mr-8 lg:w-1/2">
                        <h1 className="pb-4 text-[40px] font-bold leading-[3rem]">

                            Experiences & Projects

                        </h1>
                        <p>
                            I had the chance to dive deep into data science, creating machine learning models that really made a difference at Highradius Technologies. I honed my skills in predictive modeling and NLP, using tools like Python, Scikit-learn, and Hugging Face, and worked on projects that boosted efficiency and accuracy.
                        </p>
                        <div className='flex justify-between space-x-4 py-8'>

                            <div className='flex justify-between space-x-4 py-8'>
                                <div className='flex flex-col items-center justify-center'>
                                    <p className='text-lg font-semibold uppercase'> Projects</p>
                                    <p className='text-[36px] font-bold text-blue'>
                                        +<AnimatedCounter from={0} to={50}/>
                                    </p>
                                </div>
                                <div className='flex flex-col items-center justify-center'>
                                    <p className='text-lg font-semibold uppercase'>
                                        {' '}
                                        satisfied client
                                    </p>
                                    <p className='text-[36px] font-bold text-blue'>
                                        <AnimatedCounter from={0} to={20} />
                                    </p>
                                </div>
                            </div>



                        </div>

                    </motion.div>

                    <motion.div 
                        variants={FadeIn('left', 0.4)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: true, amount: 0.8 }}
                    className='flex h-full flex-col gap-8'>
                        <div className='flex item-center space-x-6 bg-primary p-4'>
                            <p className='text-6xl font-bold text-blue'>
                                01
                            </p>
                            <div>
                                <h2 className='mb-2 text-2xl font-bold'>Front-end development</h2>
                                <p>
                                    Covert your Figma/XD design to full responsive web app with
                                    react/next js or angular or HTML with tailwind css
                                </p>
                            </div>
                        </div>
                        <div className='flex item-center space-x-6 bg-primary p-4'>
                            <p className='text-6xl font-bold text-blue'>
                                02
                            </p>
                            <div>
                                <h2 className='mb-2 text-2xl font-bold'>Back-end development</h2>
                                <p>
                                    Covert your Figma/XD design to full responsive web app with
                                    react/next js or angular or HTML with tailwind css
                                </p>
                            </div>
                        </div>

                    </motion.div>

                </div>


            </div>
        </section >
    )
}

export default Services























