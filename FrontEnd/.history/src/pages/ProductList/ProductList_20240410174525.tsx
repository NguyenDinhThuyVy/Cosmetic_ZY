import Baner from 'src/components/Swiper'

export default function ProductList() {
  return (
    <div className='h-full bg-slate-200 flex flex-col'>
      <div className=' min-h-32'>
        <div className='flex flex-row gap-5  items-center justify-center my-10 mx-32'>
          <div className='flex h-50 w-2/3 items-start  '>
            <Baner></Baner>
          </div>
          <div className='flex flex-col h-full w-1/3 gap-2 '>
            <div className='h-1/2 rounded-md'>
              <img src='image1.webp' alt='' className='rounded-md' />
            </div>
            <div className='h-1/2 rounded-md'>
              <img src='image2.webp' alt='' className='rounded-md' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
