import graph from "../assets/graphs.png";
import circle from "../assets/circle.png";
import percentage from "../assets/percentage.png";

const Hero = () => {
  return (
    <div className='pt-12 lg:pt-[120px]'>
      <div className="max-w-[1110px] flex flex-col-reverse lg:flex-row justify-between items-center font-primary m-auto">
        {/* text */}
        <div className='px-[26px] m-auto text-center max-w-[40ch] md:max-w-[45ch] lg:m-0 lg:p-0 lg:text-left lg:w-[445px] lg:h-[338px]'>
            <h1 className="text-h1Clamp leading-[64px] font-semibold text-color-text">Bring everyone together to build better products.</h1>
            <p className='pt-[9px] pb-[30px] lg:pt-4 lg:pb-10 text-md opacity-50'>Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view.</p>
            <button className='bg-[#F3603C] px-8 py-3 rounded-full text-white shadow-lg hover:bg-color-accentHover text-sm transition-all duration-200'>Get Started</button>
        </div>
        {/* images */}
        <div className="px-7 grid grid-cols-2 lg:p-0">
            <img src={graph} alt="/" width="260" height="235" className='w-[153px] h-[139px] lg:w-[260px] lg:h-[235px]' />
            <img src={circle} alt="/" width="260" height="235" className='w-[153px] h-[139px] lg:w-[260px] lg:h-[235px]' />
            <img src={percentage} alt="/" className='col-span-2 justify-self-center w-[153px] h-[139px] lg:w-[260px] lg:h-[235px]' />
        </div>
      </div>
    </div>
  )
}

export default Hero