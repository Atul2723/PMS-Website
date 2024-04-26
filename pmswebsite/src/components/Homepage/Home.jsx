import React, { Suspense } from 'react';
import './Home.css';

const LazyFund = React.lazy(() => import('./Fund'));
const LazyWhyChooseUs = React.lazy(() => import('./WhyChooseUs'));
const LazyHowWeDoIt = React.lazy(() => import('./HowWeDoIt'));
const LazyTeam = React.lazy(() => import('./Team'));

const LazyPmsHomeSlider = React.lazy(() => import('./PmsHomeSlider'));
const LazyPmsNNMHouse = React.lazy(() => import('./PmsNNMHouse'));
const LazyPmsAboutUs = React.lazy(() => import('./PmsAboutUs'));
const LazyPmsKeyHighlights = React.lazy(() => import('./PmsKeyHighlights'));
const LazyPmsVisionMission = React.lazy(() => import('./PmsVisionMission'));


const Home = () => {

    return (
        <>
             <Suspense fallback={<div>Loading...</div>}>
                <LazyPmsHomeSlider />
                <LazyPmsNNMHouse />
                <LazyPmsAboutUs />
                <LazyPmsKeyHighlights />
                <LazyPmsVisionMission />
                <LazyFund />
                <LazyWhyChooseUs />
                <LazyHowWeDoIt />
                <LazyTeam />
            </Suspense>

        </>
    );
};


export default Home;
