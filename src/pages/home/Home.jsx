import React from 'react'
import { Banner } from './Banner'
import ServicesSection from './services/ServicesSection'

const Home = () => {
    return (
        <div>
            <div className=''>
                <Banner/>
            </div>
            <ServicesSection/>

        </div>
    )
}

export default Home