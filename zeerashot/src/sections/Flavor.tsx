"use client";

import FlavourSlider from '@/components/FlavourSlider';
import FlavourTitle from '@/components/FlavourTitle';

const Flavor: React.FC = () => {
  return (
    <section className="flavor-section py-10 bg-light-cream relative">
      <div className="flex lg:flex-row flex-col items-center">
        <div className="lg:w-[57%] flex-none h-80 lg:h-full md:mt-20 xl:mt-0">
          <FlavourTitle />
        </div>
       
        <div className="min-h-[400px] w-full">
          <FlavourSlider />
        </div>
         <div className="flex md:hidden justify-center mt-6">
  <button className="px-8 py-3 bg-transparent border-2 border-dark-green text-dark-green font-bold uppercase text-base rounded-lg transition-colors duration-300 hover:bg-dark-green hover:text-light-cream active:bg-mid-green active:text-white">
    Get it now
  </button>
</div>
      </div>
    </section>
  );
};

export default Flavor;
