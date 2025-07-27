"use client";

import FlavourSlider from '@/components/FlavourSlider';
import FlavourTitle from '@/components/FlavourTitle';

const Flavor: React.FC = () => {
  return (
    <section className="flavor-section">
      <div className="h-full flex lg:flex-row flex-col items-center relative">
        <div className="lg:w-[57%] flex-none h-80 lg:h-full md:mt-20 xl:mt-0">
          <FlavourTitle />
        </div>
        <div className="h-full">
          <FlavourSlider />
        </div>
      </div>
{/*button to be fixed*/}
      <div className="w-full flex justify-center py-6 bg-light-cream">
        <button className="px-8 py-3 bg-transparent border-2 border-dark-green text-dark-green font-bold uppercase text-lg rounded-lg transition-colors duration-300 hover:bg-dark-green hover:text-light-cream active:bg-mid-green active:text-white">
          Get it now
        </button>
      </div>
    </section>
  );
};

export default Flavor;