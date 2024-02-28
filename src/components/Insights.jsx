import React from "react";
import InsightCard from "./props/InsightCard";

const Insights = () => {
  return (
    <div className="px-4">
        <h1 className="text-center text-4xl font-semibold">Latest Insights</h1>
      <div className="lg:flex lg:justify-center lg:gap-16">
        <div className='lg:w-2/5'>
          <InsightCard 
          img='https://www.cukeragency.com/prodcuker/media/photos/2023/09/20/Cuker_Threads_Vs_X-display.jpg'          
          title='Lorem ipsum dolor sit amet.'
          desc='Lorem ipsum dolor, sit amet consectetur adipisicing elit. At officia hic modi distinctio aliquid quis ipsum dicta iusto soluta possimus?'
          />
          <InsightCard 
          img='https://www.cukeragency.com/prodcuker/media/photos/2023/09/20/Cuker_Threads_Vs_X-display.jpg'          
          title='Lorem ipsum dolor sit amet.'
          desc='Lorem ipsum dolor, sit amet consectetur adipisicing elit. At officia hic modi distinctio aliquid quis ipsum dicta iusto soluta possimus?'
          />
          <InsightCard 
          img='https://www.cukeragency.com/prodcuker/media/photos/2023/09/20/Cuker_Threads_Vs_X-display.jpg'          
          title='Lorem ipsum dolor sit amet.'
          desc='Lorem ipsum dolor, sit amet consectetur adipisicing elit. At officia hic modi distinctio aliquid quis ipsum dicta iusto soluta possimus?'
          />
          <InsightCard 
          img='https://www.cukeragency.com/prodcuker/media/photos/2023/09/20/Cuker_Threads_Vs_X-display.jpg'          
          title='Lorem ipsum dolor sit amet.'
          desc='Lorem ipsum dolor, sit amet consectetur adipisicing elit. At officia hic modi distinctio aliquid quis ipsum dicta iusto soluta possimus?'
          />
          
        </div>
        <div className='lg:w-2/5  pt-20'>
        <InsightCard 
          img='https://www.cukeragency.com/prodcuker/media/photos/2023/09/20/Cuker_Threads_Vs_X-display.jpg'          
          title='Lorem ipsum dolor sit amet.'
          desc='Lorem ipsum dolor, sit amet consectetur adipisicing elit. At officia hic modi distinctio aliquid quis ipsum dicta iusto soluta possimus?'
          />
        <InsightCard 
          img='https://www.cukeragency.com/prodcuker/media/photos/2023/09/20/Cuker_Threads_Vs_X-display.jpg'          
          title='Lorem ipsum dolor sit amet.'
          desc='Lorem ipsum dolor, sit amet consectetur adipisicing elit. At officia hic modi distinctio aliquid quis ipsum dicta iusto soluta possimus?'
          />
        <InsightCard 
          img='https://www.cukeragency.com/prodcuker/media/photos/2023/09/20/Cuker_Threads_Vs_X-display.jpg'          
          title='Lorem ipsum dolor sit amet.'
          desc='Lorem ipsum dolor, sit amet consectetur adipisicing elit. At officia hic modi distinctio aliquid quis ipsum dicta iusto soluta possimus?'
          />
        <InsightCard 
          img='https://www.cukeragency.com/prodcuker/media/photos/2023/09/20/Cuker_Threads_Vs_X-display.jpg'          
          title='Lorem ipsum dolor sit amet.'
          desc='Lorem ipsum dolor, sit amet consectetur adipisicing elit. At officia hic modi distinctio aliquid quis ipsum dicta iusto soluta possimus?'
          />
          
        </div>
      </div>
    </div>
  );
};

export default Insights;
