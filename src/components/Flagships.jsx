import React from 'react'
import Section from './section'
import Heading from './Heading'
import { flagship } from '../constants'
import Arrow from '../assets/svg/Arrow'
import { GradientLight } from './design/Benefits'
import ClipPath from '../assets/svg/ClipPath'

const Flagships = () => {
  return (
    <Section id='flagship'>
        <div className='container relative z-2'>
            <Heading 
                className='md:max-w-md lg:max-w-2xl'
                title='The flagship events for BrainWave 2025 are here!'
            />
        </div>

        <div className='container flex flex-wrap justify-center gap-10 mb-10'>
            {flagship.map((item) => (
                <div key={item.id} className={`block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem] min-h-[22.5rem] ${
                    item.id === '0' ? 'bg-benefit-card-1' :
                    item.id === '1' ? 'bg-benefit-card-2' :
                    item.id === '2' ? 'bg-benefit-card-3' :
                    item.id === '3' ? 'bg-benefit-card-4' :
                    item.id === '4' ? 'bg-benefit-card-5' :
                    'bg-benefit-card-6'
                }`}
                >
                    <div className='relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none'>
                        <h5 className='h5 mb-5'>{item.title}</h5>
                        <p className='body-2 mb-6 text-n-3'>{item.text}</p>

                        <div className='flex items-center mt-auto'>
                            <img src={item.iconUrl} width={48} height={48} alt={item.title}/>
                            <p className='ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider hover:text-color-1 transition-colors cursor-pointer'>Explore more</p>
                            <Arrow />
                        </div>
                    </div>

                    {item.light && <GradientLight />}

                    <div className='absolute inset-0.5 bg-n-8' style={{clipPath: 'url(#benefits)'}}>
                        <div className='absolute inset-0 opacity-0 transition-opacity hover:opacity-10'>
                            {item.imageUrl && (
                                <img src={item.imageUrl} width={380} height={362} alt={item.title} className='w-full h-full object-cover'/>
                            )}
                        </div>
                    </div>

                    <ClipPath />
                </div>
            ))}
        </div>
    </Section>
  )
}

export default Flagships