import { Breadcrumb } from 'antd'
import { useState } from 'react'
import { FaStarHalfAlt } from 'react-icons/fa'
import { FaStar } from 'react-icons/fa6'
import { HiChevronDown, HiChevronUp } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import AddPurchase from 'src/components/AddPurchase'
import path from 'src/constants/path'
export default function ProductDetail() {
  const [showAllContent, setShowAllContent] = useState(false)
  const handleShowMore = () => {
    setShowAllContent(true)
  }

  const handleHideContent = () => {
    setShowAllContent(false)
  }
  return (
    <div className='h-full flex flex-col font '>
      <div className=' min-h-32'>
        <div className='flex flex-col gap-2 my-4 mx-20'>
          <div
            className='grid gap-24  border-white border-b-gray-100 border-2 pb-8'
            style={{ gridTemplateColumns: '35% 65%' }}
          >
            <div className='grid gap-5' style={{ gridTemplateColumns: '20% 80%' }}>
              <div className='flex flex-col gap-4 item-center justify-center '>
                <button className=' text-black text-[25px] text-center flex justify-center '>
                  <HiChevronUp />
                </button>
                <div className=' flex flex-col gap-3 justify-center item-center mr-[20px]'>
                  <img
                    src='https://image.hsv-tech.io/0x1920/bbx/common/d6f2241f-37fc-4c28-8420-a1708d66a9e9.webp'
                    alt=''
                    className='cursor-pointer w-[100%] object-cover '
                  />
                  <img
                    src='https://image.hsv-tech.io/600x600/bbx/common/672cdc75-8e5c-4256-935e-1af794b9b66a.webp'
                    alt=''
                    className='cursor-pointer w-[100%] object-cover '
                  />
                  <img
                    src='https://image.hsv-tech.io/600x600/bbx/common/07792ca2-c2de-4519-8b1d-7c209903a2b2.webp'
                    alt=''
                    className='cursor-pointer w-[100%] object-cover '
                  />
                  <img
                    src='https://image.hsv-tech.io/0x1920/bbx/common/d6f2241f-37fc-4c28-8420-a1708d66a9e9.webp'
                    alt=''
                    className='cursor-pointer w-[100%] object-cover '
                  />
                </div>
                <button className=' text-black text-[25px] text-center flex justify-center '>
                  <HiChevronDown />
                </button>
              </div>
              <div className='mt-[1%]  '>
                <img
                  src='https://image.hsv-tech.io/0x1920/bbx/common/d6f2241f-37fc-4c28-8420-a1708d66a9e9.webp'
                  alt=''
                  className='cursor-pointer w-[120%] h-[100%]  object-cover rounded-lg'
                />
              </div>
            </div>
            <div className='flex flex-col gap-2  w-[780px]'>
              <Breadcrumb
                separator='>'
                items={[
                  {
                    title: <Link to={path.home}>Trang chủ</Link>
                  },
                  {
                    title: <Link to={path.filterProduct}>Sản phẩm</Link>
                  }
                ]}
              />
              <div className='text-base font-bold text-rose-700'>AHC</div>
              <div className='text-[19px] text-left font-bold text-gray-700 w-[780px]'>
                [Trải Nghiệm Combo 11 Mặt Nạ HOT Nhất] Mặt Nạ AHC + Goodal + Dermatory Dưỡng Da Sáng &amp; Săn Mịn
              </div>
              <div className='flex gap-2 mt-2'>
                <div className='flex gap-1 text-black items-center justify-center text-[13px] border-white border-r-gray-200 border-2 pr-3'>
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStarHalfAlt />
                  <span className='text-black ml-2 text-[13px]'>(10)</span>
                </div>
                <div className='flex gap-1  border-white border-r-gray-200 border-2 pr-3'>
                  <span className='font-semibold'>Xuất sứ :</span>
                  <span>Hàn Quốc</span>
                </div>
                <div className='flex gap-1  border-white border-r-gray-200 border-2 pr-3'>
                  <span className='font-semibold'>Mã:</span>
                  <span>5044</span>
                </div>
                <div className='flex gap-1'>
                  <span className='font-semibold'>Lượt bán:</span>
                  <span>50.44k</span>
                </div>
              </div>
              <div className='text-[22px] flex gap-3 mt-2'>
                <div className='font-bold text-black'>291.000đ</div>
                <div className='font-medium text-gray-400 line-through text-[15px] pt-[6px] '>771.000đ</div>
                <div className='relative bg-[#c73030] w-[40px] h-[22px] flex justify-center items-center rounded-full'>
                  <div className='absolute text-gray-100 text-[13px] p-1'>11%</div>
                </div>
              </div>
              <div className='border-gradient rounded-lg p-2 mt-4 flex flex-col gap-1 w-[780px]'>
                <div className='font-bold text-[15px]'>Bảng thành phần :</div>
                <p className='line-clamp-6'>
                  Kem dưỡng AHC Premium Ex Hydra B5 Biome Capsule Cream tập trung cấp dưỡng ẩm, phục hồi và tăng cường
                  sức khỏe làn da mang lại vẻ ngoài sáng mịn, tươi tắn. Sản phẩm chứa 150 triệu lợi khuẩn giúp bổ sung
                  vào làn da, nâng cao sức đề kháng và cải thiện sắc da sáng mịn, khỏe khoắn rõ rệt. Thành phần
                  prebiotics trong kem dưỡng ẩm AHC giúp kích hoạt hoạt chất giữ ẩm cho hàng rào sinh học của da, làm
                  cho làn da khỏe mạnh hơn. Kết hợp với đó là công nghệ Micro Liposome chứa hàng triệu vi khuẩn có lợi
                  được bao bọc bởi màng biofilm, giúp ổn định chất lượng và vận chuyển lactobacillus đầy đủ và nhanh
                  chóng vào trong da, đem lại làn da mềm mại tức thì mà không gây dính rít.
                </p>
              </div>
              <div className='mt-2'>
                <AddPurchase />
              </div>
            </div>
          </div>
          <div
            className='grid gap-24 mt-[50px] border-white border-b-gray-100 border-2 pb-8'
            style={{ gridTemplateColumns: '30% 70%' }}
          >
            <div className='uppercase text-left text-xl font-bold'>Giới thiệu</div>
            <div className='w-[780px] text-[14px]'>
              <div className='content' style={{ height: showAllContent ? 'auto' : '170px', overflow: 'hidden' }}>
                <div id='iaat'>
                  <p id='iwj1'>
                    <em id='i46l'>
                      <span id='iu7j'>Công dụng chính:</span> Kem chống nắng dạng sữa dưỡng da bảo vệ hoàn hảo Anessa
                      Perfect UV Skincare Milk SPF 50+ PA++++ với kết cấu dạng sữa mỏng nhẹ, giúp chống nắng vượt trội
                      nhiều giờ liền mà vẫn có một làn da mịn mượt, không gây nhờn rít, bóng dầu. Đặc biệt, khả năng
                      chống trôi trong nước &amp; mồ hôi với công nghệ độc quyền Aqua Booster, lên đến 80 phút trong hồ
                      bơi, sản phẩm rất thích hợp dùng cho những hoạt động ngoài trời hay đi chơi, du lịch, công tác.
                    </em>
                    <br id='iwce' />
                    <em id='itc5'>
                      <span id='is775'>Đối tượng sử dụng:</span> Thích hợp với mọi loại da
                    </em>
                    <br id='itq0o' />
                    <span id='iafuy'></span>
                    <br id='izatv' />
                  </p>
                  <img
                    id='in205'
                    src='https://image.hsv-tech.io/bbx/common/f71c3a0f-29f5-4593-a28a-4471e478d52e.webp'
                    alt='Sunscreen product'
                  />
                  <h2 id='i8bvb'>
                    <br />
                    Công dụng sữa chống nắng Anessa Perfect UV Sunscreen Skincare Milk
                  </h2>
                  <ul id='iod8p'>
                    <li id='ik83f'>
                      Kết cấu dạng sữa mỏng nhẹ, khô ráo, dễ dàng thẩm thấu qua da, không gây nhờn rít.
                    </li>
                    <li id='izxvh'>Chỉ số chống nắng cao với SPF 50+, PA++++, bảo vệ da tối ưu.</li>
                    <li id='iqngw'>
                      Công nghệ chống nắng 360° ngăn chặn tác hại của tia UV trên mọi bề mặt da và mọi góc độ.
                    </li>
                    <li id='i8t2w'>
                      Công nghệ độc quyền Aqua Booster, chống trôi trong nước &amp; mồ hôi rất cao, lên đến 80 phút
                      trong hồ bơi.
                    </li>
                    <li id='iszax'>
                      Công nghệ “chống ma sát” độc đáo lần đầu tiên có trong sữa chống nắng, càng ma sát, lớp chống nắng
                      mịn mượt sẽ không bị bong ra và gia tăng khả năng chống nắng, bảo vệ da hơn.
                    </li>
                    <li id='icpuk'>Chống cát dính vào da.</li>
                    <li id='inbkm'>
                      50% chiết xuất dưỡng da (chiết xuất hoa hồng, collagen, lô hội và super Hyaluronic Acid) giúp da
                      mịn mượt, gia tăng độ đàn hồi, chống oxi hoá, chống viêm nhiễm và kiểm soát bóng dầu.
                    </li>
                    <li id='iz8dg'>Công thức với mùi hương thanh mát từ Cam, Quýt dễ chịu.</li>
                    <li id='ihy6h'>Có thể dùng làm lớp lót trang điểm và dễ dàng làm sạch với sữa rửa mặt.</li>
                  </ul>
                  <div id='infxo' className='media-wrap image-wrap'>
                    <img
                      src='https://file.hstatic.net/200000223113/file/dedanglamsach_934f7a6d45a548e5980be2d601ad6c51.png'
                      id='ij1gu'
                      className='media-wrap image-wrap'
                      alt='Sunscreen cleansing'
                    />
                  </div>
                  <p id='idzfj'>
                    <br id='iajwe' />
                    <br id='imzaj' />
                    <img
                      id='iawki'
                      src='https://image.hsv-tech.io/bbx/common/6208b755-9a22-4d33-913e-b232d2486ca3.webp'
                      alt='Sunscreen usage'
                    />
                  </p>
                  <h2 id='i174o'>Hướng dẫn sử dụng</h2>
                  <span id='im2oc'>- Lắc đều để hạt bi hòa hợp sản phẩm trước khi sử dụng.</span>
                  <span id='i4pc7'>
                    <br />- Dùng sau bước dưỡng da, thoa đều khắp vùng da cần bảo vệ.
                  </span>
                  <br id='iv8sl' />
                  <span id='i7vjm'>
                    - Để đạt hiệu quả cao nhất, nên thoa lại sau khi tiếp xúc nhiều với nước hoặc lau bằng khăn.
                  </span>
                  <br id='ijy1m' />
                  <span id='i355f'>- Dễ dàng làm sạch với sữa rửa mặt.</span>
                  <br id='iucz9' />
                  <span id='ihcth'>Lưu ý:</span>
                  <br id='ixj8k' />
                  <span id='i41i9'>- Tránh tiếp xúc với mắt. Nếu có, rửa ngay bằng nước lạnh hoặc nước ấm</span>
                  <br id='in37p' />
                  <span id='izgv8'>- Không sử dụng cho vùng da bị tổn thương</span>
                  <br id='i8ik8' />
                  <span id='ib2rm'>- Ngưng dùng ngay khi có biểu hiện kích ứng và tham khảo ý kiến bác sĩ da liễu</span>
                  <br id='i2byq' />
                  <span id='ie7gk'>
                    - Bảo quản tránh ánh sáng trực tiếp, nơi có nhiệt độ cao hoặc ẩm ướt. Để xa tầm tay trẻ
                  </span>
                  <br id='imoeb' />
                  <p id='iqe1g'></p>
                  <div id='ipo67' className='media-wrap image-wrap'>
                    <img
                      src='https://file.hstatic.net/200000223113/file/huongdansudung_87b9ccd21beb4974b7cad7099200bf3a.png'
                      id='in8fj'
                      className='media-wrap image-wrap'
                      alt='Sunscreen usage guide'
                    />
                  </div>
                </div>
              </div>
              {!showAllContent ? (
                <button
                  onClick={handleShowMore}
                  className='mt-[-90px] text-black bg-gradient-to-t from-white via-white to-white/50 p-16 font-bold  w-[780px] text-[16px]'
                >
                  Xem thêm
                </button>
              ) : (
                <button
                  onClick={handleHideContent}
                  className='mt-4 text-black text-center font-bold text-[16px] w-[780px]'
                >
                  Ẩn bớt
                </button>
              )}
            </div>
          </div>
          <div
            className='grid gap-24 mt-[50px] border-white border-b-gray-100 border-2 pb-8'
            style={{ gridTemplateColumns: '30% 70%' }}
          >
            <div className='flex flex-col'>
              <div className='flex justify-between'>
                <span className='text-left text-xl font-bold'>12 đánh giá</span>
                <button className='uppercase text-[16px] font-bold underline decoration-1 hover:text-black/70'>
                  Viết đánh giá
                </button>
              </div>
              <div className='flex gap-1 text-black  text-[13px] border-white border-r-gray-200 border-2 pr-3'>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfAlt />
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  )
}
