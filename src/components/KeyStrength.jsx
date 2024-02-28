import React from "react";
import KeyStrengthCard from "./props/KeyStrengthCard";

const KeyStrength = () => {
  return (
    <div>
      <h1 className="text-center text-3xl font-semibold">Key Strengths</h1>
      <p className="lg:px-60' px-4 py-10 text-gray-700 text-center text-lg">
        We partner with forward-thinking brands to adapt and thrive. We turn
        brand culture into brand advocacy, using digital to build a community of
        loyal customers.
      </p>
      <div className="sm:flex sm:flex-wrap sm:justify-center sm:gap-20 2xl:px-20">
        <KeyStrengthCard
        title=' Proven SEO TrackRecord'
        desc="We've a strong history of implementing successful SEO strategies, leading to significant improvements in rankings, organic traffic, and online visibility."
        link='/page'
        />
        <KeyStrengthCard
        title=' Skilled SEO Team'
        desc='Our SEO experts are well-versed in various optimization aspects, staying updated with industry trends.'
        link='/page'
        />
        <KeyStrengthCard
        title=' Tailored Strategies'
        desc="We believe in personalized SEO approaches, understanding each client's unique needs to create tailored strategies."
        link='/page'
        />
        <KeyStrengthCard
        title=' Transparent Reporting'
        desc='Our clients receive comprehensive reports, showcasing progress, and outcomes, with regular updates on key metrics.'
        link='/page'
        />
        <KeyStrengthCard
        title='Market Understanding'
        desc='Our in-depth local market knowledge allows us to optimize websites effectively for our target audience.'
        link='/page'
        />
        <KeyStrengthCard
        title=' Ethical Practices'
        desc='We strictly follow white-hat SEO techniques, ensuring sustainable and reputation-preserving results.'
        link='/page'
        />
        <KeyStrengthCard
        title='Driving Organic Traffic'
        desc='Our emphasis is on not just rankings but also organic traffic, leads, and conversions, optimizing the entire customer journey.'
        link='/page'
        />
        <KeyStrengthCard
        title='Customer Support'
        desc='We take pride in offering responsive and expert customer support, which helps in building strong and collaborative working relationships.'
        link='/page'
        />
        
      </div>
    </div>
  );
};

export default KeyStrength;
