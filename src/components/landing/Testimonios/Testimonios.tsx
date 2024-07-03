import React from 'react'
import { User } from '@nextui-org/user'
import { TestimonialCard } from './components'
import { TestimonialsData } from './data/TestimonialsData'

export const Testimonios = () => {
    return (
        <div className='container m-auto my-[250px] space-y-4' id='testimonials'>
            <h4 className=' text-center text-primary font-semibold'>Testimonios</h4>
            <div className='w-full flex justify-center'>
                <h2 className='text-3xl text-center max-w-[700px] font-semibold'>Nosotros trabajamos con usuarios realmente talentosos</h2>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
                {TestimonialsData.map((testimonial) => (
                    <TestimonialCard key={testimonial.id} className='shadow-lg p-8 rounded-lg'>
                        <div className='flex gap-16'>
                            <User
                                name={testimonial.name}
                                description={testimonial.profesion}
                                avatarProps={{
                                    src: testimonial.img
                                }}
                            />
                            <TestimonialCard.Rate rate={testimonial.rate} />
                        </div>
                        <TestimonialCard.Description description={testimonial.text} className='mt-4 max-w-[450px] leading-7' />
                    </TestimonialCard>
                ))}

            </div>

        </div>
    )
}
