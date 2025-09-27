import React from 'react'
import Section from './section'
import Heading from './Heading'
import { check, service1, service2, service3, smallSphere, stars } from '../assets'
import { brainwaveServices, brainwaveServicesIcons } from '../constants'

const Speakers = () => {
  return (
    <Section id='Speakers'>
        <div className='container'>
            <Heading title='Here are our speakers for BrainWave 2025' text="Get ready to learn from industry leaders and mentors, and build something exciting."/>

            <div className='relative'>
                <div className='relative z-1 flex items-center h-[39rem] mt-8 mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]'>
                    <div className='absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto'>
                        <img className="w-full h-full object-cover md:object-right grayscale" width={800} height={730} src={service1}/>
                    </div>

                    <div className='relative z-1 max-w-[17rem] ml-auto'>
                        <h4 className='h4 mb-10'>Jensen Huang: CEO Of Nvidia</h4>
                        <p className='body-2 mb-[12rem] text-n-3'>BrainWave brings to you Jensen Huang for an expert QnA session.</p>
                        <ul className='body-2'>
                            {brainwaveServices.map((item, index) => (
                                <li key={index} className='flex items-start py-4 border-t border-n-6'>
                                    <img src={check} />
                                    <p className='ml-4'>{item}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className='relative z-1 grid gap-5 lg:grid-cols-2 '>
                    <div className='relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden'>
                            <div className='absolute inset-0'>
                                <img src={service2} className='h-full w-full object-cover' width={630} height={750}/>
                            </div>

                        <div className='absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15'>
                        <h4 className='h4 mb-4'>Sundar Pichai: CEO Of AlphaBet</h4>
                        <p className='body-2 text-n-2'>BrainWave brings to you Sundar Pichai for an expert QnA session.</p>
                        </div>
                    </div>

                    <div className='p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem] '>
                        <div className='py-12 px-4 xl:px-8 '>
                            <h4 className='h4 mb-4'>Tim Cook</h4>
                            <p className='body-2 mb-[2rem] text-n-3'>
                              The CEO Of Apple. BrainWave brings to you an expert design session under Tim Cook. What will you create?  
                            </p>

                            <ul className='flex items-center justify-between '>
                                {brainwaveServicesIcons.map((item, index) => (
                                    <li className={`flex items-center justify-center ${index === 2 ? 'w-[3rem] h-[3rem] p-0.25 bg-conic-gradient rounded-2xl md:w-[4.5rem] md:h-[4.5rem]': 'flex w-10 h-10 bg-n-6 rounded-2xl md:w-15 md:h-15'}`}>
                                        <div className={index === 2 ? 'flex items-center justify-center w-full h-full bg-n-7 rounded-[1rem]': ''}>
                                            <img src={item} width={24} height={24} />
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <img src={service3} />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <Section className='overflow-hidden'>
            <div className='container relative z-2'>
                <div className='hidden relative mb-8 justify-center lg:flex'>
                    <img src={smallSphere} className='relative z-1' width={255} height={255} />
                    <div className='absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none'>
                        <img src={stars} className='w-full' width={950} height={450}/>
                    </div>
                </div>
                <Heading 
                tag="Compete and upskill at BrainWave 2025"/>
            </div>
        </Section>
    </Section>

  )
}

export default Speakers