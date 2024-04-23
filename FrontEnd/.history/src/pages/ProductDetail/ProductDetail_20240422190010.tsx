export default function ProductDetail() {
  return (
    <div className='h-full flex flex-col font '>
      <div className=' min-h-32'>
        <div className='flex flex-col gap-2 my-4 mx-20'>
          <div className='grid gap-5' style={{ gridTemplateColumns: '40% 60%' }}>
            <div className='grid gap-5' style={{ gridTemplateColumns: '40% 60%' }}>
              <div className='flex flex-col gap-2 relative '>
                <button className='absolute left-0 top-1/2 z-10 h-9 w-5 -translate-y-1/2 bg-black/20 text-white'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='h-5 w-5'
                  >
                    <path strokeLinecap='round' strokeLinejoin='round' d='M15.75 19.5L8.25 12l7.5-7.5' />
                  </svg>
                </button>
              </div>
              <div></div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  )
}
