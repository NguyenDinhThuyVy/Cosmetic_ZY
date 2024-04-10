import 'src/Styles/Header.scss'

function NavHeader() {
  return (
    <div className='bg-gradient-to-r from-[#f0a80e] via-[#c43131] to-[#671f57] flex gap-8 text-[13px] text-gray-100  p-2 justify-center items-center font'>
      <div className=''>Nhập SUMMER50K GIẢM 50K</div>
      <div className='text-[15px] mt-[-5px]'>.</div>
      <div className=''>Mua online giá hời chưa từng có</div>
      <div className='text-[15px] mt-[-5px]'>.</div>
      <div className=''>Freeship 24H</div>
    </div>
  )
}

export default NavHeader
