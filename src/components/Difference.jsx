import { difference } from "../constants"

const Difference = () => {
  return (
    <div className='pt-[132px]'>
        <div className='text-color-text max-w-[1110px] m-auto font-primary flex'>
            <div>
                <h2 className='text-[2.5rem] leading-[2.75rem] font-bold'>What’s different about Manage?</h2>
                <p className='pt-6 opacity-50'>Manage provides all the functionality your team needs, without the complexity. Our software is tailor-made for modern digital product teams. </p>
            </div>
            <div>
                <ul className='text-base'>
                    {difference.map((item) => (
                        <li key={item.id}>
                            <span className='bg-color-accent text-white px-[25px] py-[10px] rounded-full'>{item.number}</span>
                            <h3 className="font-semibold">{item.heading}</h3>
                            <p className='opacity-50'>{item.paragraph}</p>
                        </li>
                    ))}
                </ul>    
            </div>
        </div>
    </div>
  )
}

export default Difference
