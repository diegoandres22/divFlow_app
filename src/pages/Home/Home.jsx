import React from 'react'
import Hero from '../../components/Hero/Hero'
import Welcome from '../../components/Welcome/Welcome'
import Choose from '../../components/Choose/Choose'
import StickyCols from '../../components/StickyCols/StickyCols'
import Gallery from '../../components/Gallery/Gallery'
import MarqueeSticky from '../../components/Layouts/MarqueeSticky'
import MapLink from '../../components/MapLink/MapLink'
import Activities from '../../components/Activities/Activities'
import Showcase from '../../components/Showcase/Showcase'
import FooterBanner from '../../components/FooterBanner/FooterBanner'
import Cards from '../../components/Cards/Cards'
import Contact from '../../components/Contact/Contact'

const Home = () => {
    return (
        <div>
            <Hero />
            <Welcome />
            <Choose />
            <Gallery />
            <MapLink />
            <MarqueeSticky />
            <StickyCols />
            <Activities />
            <Showcase />
            <Cards />
            <Contact />
            <FooterBanner />
        </div >
    )
}

export default Home