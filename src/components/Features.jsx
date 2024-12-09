import { Code, Shield, Smartphone, Zap } from 'lucide-react';
import React from 'react'

const features = [
    {
      name: 'Lightning Fast',
      description:
        'Built with performance in mind, ensuring your applications run at peak efficiency.',
      icon: Zap,
    },
    {
      name: 'Secure by Default',
      description:
        'Enterprise-grade security features built-in to protect your data and users.',
      icon: Shield,
    },
    {
      name: 'Responsive Design',
      description:
        'Fully responsive components that work seamlessly across all devices.',
      icon: Smartphone,
    },
    {
      name: 'Modern Development',
      description:
        'Using the latest web technologies and best practices in development.',
      icon: Code,
    },
    
  ];

const Features = () => {

   

  return (
    <section id='features' className='py-20 bg-gray-50'>
        <div className='container mx-auto px-4 sm:px-7 lg:px-8'>
    <div className='text-center'>
        <h2 className='text-base text-indigo-600 font-semibold tracking-wide uppercase'>
            Features
        </h2>
        <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl'>Everything you need to succeed</p>
        <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Our platform provides all the tools and features you need to build
            amazing applications.
          </p>
    </div>

<div className='mt-20'>
    <div className='grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4'>
        {
            features.map((feature , index)=>(
               <FeatureCard
               key={index}
               name={feature.name}
               icon={feature.icon}
               description={feature.description}
               />
            ))
        }
    </div>
</div>

        </div>
    </section>
  )
}

export default Features


const FeatureCard = ({name , description , icon:Icon})=>{
    return(
        <div className="flex flex-col items-center text-center">
      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </div>
      <h3 className="mt-6 text-lg font-medium text-gray-900">{name}</h3>
      <p className="mt-2 text-base text-gray-500">{description}</p>
    </div>
    )
}