import React from "react";

import Hero from "@/components/ui/Hero";
import Features from "@/components/ui/Features";
import Introduction from "@/components/ui/Introduction";
import Testimonials from "@/components/ui/Testimonials";
import FAQs from "@/components/ui/FAQs";
import Alignment from "@/components/ui/Alignment";
import Subscribe from "@/components/ui/Subscribe";
import News from "@/components/ui/News";

const Home: React.FC = () => {
    return (
        <>
            <Hero />
            <Introduction />
            <Features />
            <Testimonials />
            <FAQs />
            <Alignment />
            <Subscribe />
            <News />
        </>
    );
};

export default Home;
