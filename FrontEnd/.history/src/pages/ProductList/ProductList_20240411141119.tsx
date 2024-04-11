import Banner from 'src/components/Swiper'

export default function ProductList() {
  return (
    <div className='h-full flex flex-col'>
      <div className=' min-h-32'>
        <div className='flex flex-row gap-5 items-center justify-center my-6 mx-32'>
          <div className='flex h-50 w-2/3 items-start text-[8px]  '>
            <Banner />
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
        <div className='my-10 mx-32'>
          {' '}
          <div className='text-gray-400 uppercase pt-7 px-5 '>{t('category')}</div>{' '}
        </div>
      </div>
    </div>
  )
}
