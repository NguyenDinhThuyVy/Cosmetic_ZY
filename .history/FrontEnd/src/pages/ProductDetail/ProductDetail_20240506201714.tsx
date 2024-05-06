import { Breadcrumb, Modal } from 'antd'
import { useEffect, useMemo, useRef, useState } from 'react'
import { FaStarHalfAlt } from 'react-icons/fa'
import { FaStar } from 'react-icons/fa6'
import { HiChevronDown, HiChevronUp } from 'react-icons/hi'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import productApi from 'src/apis/product.api'
import purchaseApi from 'src/apis/purchase.api'
import AddPurchase from 'src/components/AddPurchase'
import Evaluate from 'src/components/Evaluate'
import Product from 'src/components/Product'
import path from 'src/constants/path'
import { purchasesStatus } from 'src/constants/purchase'
import 'src/Styles/CheckBoxBrand.scss'
import { Product as ProductType, ProductListConfig } from 'src/types/product.type'
import { formatCurrency, getIdFromNameId, rateSale } from 'src/utils/utils'
import DOMPurify from 'dompurify'

export default function ProductDetail() {
  const [showAllContent, setShowAllContent] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const handleShowMore = () => {
    setShowAllContent(true)
  }

  const handleHideContent = () => {
    setShowAllContent(false)
  }

  const showModal = () => {
    setIsModalOpen(true)
  }

  const handleOk = () => {
    setIsModalOpen(false)
  }

  const handleCancel = () => {
    setIsModalOpen(false)
  }
  const queryClient = useQueryClient()
  const { nameId } = useParams()

  const [buyCount, setBuyCount] = useState(1)
  const id = getIdFromNameId(nameId as string)
  const { data: productDetailData } = useQuery({
    queryKey: ['product', id],
    queryFn: () => productApi.getProductDetail(id as string)
  })
  const [currentIndexImages, setCurrentIndexImages] = useState([0, 4])
  const [activeImage, setActiveImage] = useState('')
  const product = productDetailData?.data.data
  const imageRef = useRef<HTMLImageElement>(null)
  const currentImages = useMemo(
    () => (product ? product.images.slice(...currentIndexImages) : []),
    [product, currentIndexImages]
  )

  const addToCartMutation = useMutation(purchaseApi.addToCart)
  const navigate = useNavigate()
  const queryConfig: ProductListConfig = { limit: '20', page: '1', category: product?.category._id }

  const { data: productsData } = useQuery({
    queryKey: ['products', queryConfig],
    queryFn: () => {
      return productApi.getProducts(queryConfig)
    },
    staleTime: 3 * 60 * 1000,
    enabled: Boolean(product)
  })

  useEffect(() => {
    if (product && product.images.length > 0) {
      setActiveImage(product.images[0])
    }
  }, [product])

  const next = () => {
    // console.log(currentIndexImages[1])
    if (currentIndexImages[1] < (product as ProductType).images.length) {
      setCurrentIndexImages((prev) => [prev[0] + 1, prev[1] + 1])
    }
  }

  const prev = () => {
    if (currentIndexImages[0] > 0) {
      setCurrentIndexImages((prev) => [prev[0] - 1, prev[1] - 1])
    }
  }

  const chooseActive = (img: string) => {
    setActiveImage(img)
  }

  const handleZoom = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const image = imageRef.current as HTMLImageElement
    const { naturalHeight, naturalWidth } = image
    // Cách 1: Lấy offsetX, offsetY đơn giản khi chúng ta đã xử lý được bubble event
    // const { offsetX, offsetY } = event.nativeEvent

    // Cách 2: Lấy offsetX, offsetY khi chúng ta không xử lý được bubble event
    const offsetX = event.pageX - (rect.x + window.scrollX)
    const offsetY = event.pageY - (rect.y + window.scrollY)

    const top = offsetY * (1 - naturalHeight / rect.height)
    const left = offsetX * (1 - naturalWidth / rect.width)
    image.style.width = naturalWidth + 'px'
    image.style.height = naturalHeight + 'px'
    image.style.maxWidth = 'unset'
    image.style.top = top + 'px'
    image.style.left = left + 'px'
  }

  const handleRemoveZoom = () => {
    imageRef.current?.removeAttribute('style')
  }

  const handleBuyCount = (value: number) => {
    setBuyCount(value)
  }

  const addToCart = () => {
    addToCartMutation.mutate(
      { buy_count: buyCount, product_id: product?._id as string },
      {
        onSuccess: (data) => {
          toast.success(data.data.message, { autoClose: 1000 })
          queryClient.invalidateQueries({ queryKey: ['purchases', { status: purchasesStatus.inCart }] })
        }
      }
    )
  }
  const buyNow = async () => {
    const res = await addToCartMutation.mutateAsync({ buy_count: buyCount, product_id: product?._id as string })
    const purchase = res.data.data
    navigate(path.cart, {
      state: {
        purchaseId: purchase._id
      }
    })
  }
  if (!product) return null
  const sanitizedDescription = DOMPurify.sanitize(product.description)
  return (
    <div className='h-full flex flex-col font '>
      <div className=' min-h-32'>
        <div className='flex flex-col gap-2 my-4 mx-20'>
          <div
            className='grid gap-28  border-white border-b-gray-100 border-2 pb-8'
            style={{ gridTemplateColumns: '35% 65%' }}
          >
            <div className='grid gap-6 ' style={{ gridTemplateColumns: '20% 80%' }}>
              <div className='flex flex-col gap-4 item-center justify-center  '>
                <button className=' text-black text-[25px] text-center flex justify-center mr-[20px]   ' onClick={prev}>
                  <HiChevronUp />
                </button>
                {currentImages.map((img) => {
                  const isActive = img === activeImage
                  return (
                    <div
                      className=' flex flex-col gap-3 justify-center item-center relative mr-[20px]  '
                      key={img}
                      onMouseEnter={() => chooseActive(img)}
                    >
                      <img src={img} alt={product?.name} className='cursor-pointer w-[100%] object-center ' />
                      {isActive && <div className='absolute inset-0 border-2 border-gray-600' />}
                    </div>
                  )
                })}
                <button className=' text-black text-[25px] text-center flex justify-center mr-[20px]  ' onClick={next}>
                  <HiChevronDown />
                </button>
              </div>
              <div
                className='relative w-[400px] cursor-zoom-in overflow-hidden shadow rounded-lg'
                onMouseMove={handleZoom}
                onMouseLeave={handleRemoveZoom}
              >
                <img
                  src={activeImage}
                  alt={product?.name}
                  className=' absolute top-0 left-0 h-full w-full bg-white object-center rounded-lg'
                  ref={imageRef}
                />
              </div>
            </div>
            <div className='flex flex-col gap-2  w-[700px]'>
              <Breadcrumb
                separator='>'
                items={[
                  {
                    title: <Link to={path.home}>Trang chủ</Link>
                  },
                  {
                    title: <Link to={path.productDetail}>Sản phẩm</Link>
                  }
                ]}
              />
              <div className='text-base font-bold text-rose-700'>{product?.brand}</div>
              <div className='text-[19px] text-left font-bold text-gray-700 w-[750px]'>{product?.name}</div>
              <div className='flex gap-2 mt-2'>
                <div className='flex gap-1 text-orange-500 items-center justify-center text-[13px] border-white border-r-gray-200 border-2 pr-3'>
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStarHalfAlt />
                  <span className='text-black ml-2 text-[13px]'>(10)</span>
                </div>
                <div className='flex gap-1  border-white border-r-gray-200 border-2 pr-3'>
                  <span className='font-semibold'>Xuất sứ :</span>
                  <span>{product?.madeIn}</span>
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
              {product.price_before_discount != product.price ? (
                <div className='text-[22px] flex gap-3 mt-2'>
                  <div className='font-bold text-black'>{formatCurrency(product.price)}đ</div>
                  <div className='font-medium text-gray-400 line-through text-[15px] pt-[6px] '>
                    {formatCurrency(product.price_before_discount)}đ
                  </div>
                  <div className='relative bg-[#c73030] w-[40px] h-[22px] flex justify-center items-center rounded-full'>
                    <div className='absolute text-gray-100 text-[12px] p-1'>
                      {' '}
                      -{rateSale(product.price_before_discount, product.price)}
                    </div>
                  </div>
                </div>
              ) : (
                <div className='text-[22px] flex gap-3 mt-2'>
                  <div className='font-bold text-black'>{formatCurrency(product.price)}đ</div>
                </div>
              )}
              <div className='border-gradient rounded-lg p-2 mt-4 flex flex-col gap-1 w-[740px]'>
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
                <AddPurchase product={product} addToCart={addToCart} buyNow={buyNow} />
              </div>
            </div>
          </div>
          <div
            className='grid gap-24 mt-[50px] border-white border-b-gray-100 border-2 pb-8'
            style={{ gridTemplateColumns: '30% 70%' }}
          >
            <div className='uppercase text-left text-xl font-bold'>Giới thiệu</div>
            <div className=' w-[90%] text-[14px]'>
              <div className='content ' style={{ height: showAllContent ? 'auto' : '170px', overflow: 'hidden' }}>
                <div dangerouslySetInnerHTML={{ __html: sanitizedDescription } as any} />
              </div>
              {!showAllContent ? (
                <button
                  onClick={handleShowMore}
                  className='mt-[-90px] text-black bg-gradient-to-t from-white via-white to-white/50 p-16 font-bold  w-[890px] text-[16px]'
                >
                  Xem thêm
                </button>
              ) : (
                <button
                  onClick={handleHideContent}
                  className='mt-4 text-black text-center font-bold text-[16px] w-[890px]'
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
                <button
                  className='uppercase text-[16px] font-bold underline decoration-1 hover:text-black/70'
                  onClick={showModal}
                >
                  Viết đánh giá
                </button>
                <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel} width={800} footer={null}>
                  <Evaluate />
                </Modal>
              </div>
              <div className='flex gap-2 text-orange-500 text-[30px] text-left mt-6'>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className='flex flex-col gap-4 mt-8 '>
                <div className='flex gap-2  w-full item-center justify-center h-[30px] text-base'>
                  <span className='text-end p-1 '>5</span>
                  <div className='w-full flex items-center justify-center '>
                    <div className=' w-full box-border  leading-snug'>
                      <div className='w-full'>
                        <div className='h-[5px] bg-[#dfdfdf]  overflow-hidden rounded-[100px] w-full   '>
                          <div
                            className='ant-progress-bg flex items-center justify-center'
                            style={{ width: '66.6667%', height: '5px', background: 'rgb(0, 0, 0)' }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <span className=' text-center h-[30px] p-1'>(8)</span>
                </div>
                <div className='flex gap-2  w-full item-center justify-center h-[30px] text-base'>
                  <span className='text-end p-1 '>4</span>
                  <div className='w-full flex items-center justify-center '>
                    <div className=' w-full box-border  leading-snug'>
                      <div className='w-full'>
                        <div className='h-[5px] bg-[#dfdfdf]  overflow-hidden rounded-[100px] w-full   '>
                          <div
                            className='ant-progress-bg flex items-center justify-center'
                            style={{ width: '0%', height: '5px', background: 'rgb(0, 0, 0)' }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <span className=' text-center h-[30px] p-1'>(0)</span>
                </div>
                <div className='flex gap-2  w-full item-center justify-center h-[30px] text-base'>
                  <span className='text-end p-1 '>3</span>
                  <div className='w-full flex items-center justify-center '>
                    <div className=' w-full box-border  leading-snug'>
                      <div className='w-full'>
                        <div className='h-[5px] bg-[#dfdfdf]  overflow-hidden rounded-[100px] w-full   '>
                          <div
                            className='ant-progress-bg flex items-center justify-center'
                            style={{ width: '0%', height: '5px', background: 'rgb(0, 0, 0)' }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <span className=' text-center h-[30px] p-1'>(0)</span>
                </div>
                <div className='flex gap-2  w-full item-center justify-center h-[30px] text-base'>
                  <span className='text-end p-1 '>2</span>
                  <div className='w-full flex items-center justify-center '>
                    <div className=' w-full box-border  leading-snug'>
                      <div className='w-full'>
                        <div className='h-[5px] bg-[#dfdfdf]  overflow-hidden rounded-[100px] w-full   '>
                          <div
                            className='ant-progress-bg flex items-center justify-center'
                            style={{ width: '0%', height: '5px', background: 'rgb(0, 0, 0)' }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <span className=' text-center h-[30px] p-1'>(0)</span>
                </div>
                <div className='flex gap-2  w-full item-center justify-center h-[30px] text-base'>
                  <span className='text-end p-1 '>1</span>
                  <div className='w-full flex items-center justify-center '>
                    <div className=' w-full box-border  leading-snug'>
                      <div className='w-full'>
                        <div className='h-[5px] bg-[#dfdfdf]  overflow-hidden rounded-[100px] w-full   '>
                          <div
                            className='ant-progress-bg flex items-center justify-center'
                            style={{ width: '0', height: '5px', background: 'rgb(0, 0, 0)' }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <span className=' text-center h-[30px] p-1'>(0)</span>
                </div>
              </div>
            </div>
            <div
              className='flex flex-col gap-2 w-[90%] scrollable-container'
              style={{ maxHeight: '455px', overflowY: 'auto' }}
            >
              <div className='flex flex-col text-[14px] border-white border-b-gray-100 border-2 pb-4 w-[91%] '>
                <span>mon</span>
                <div className='flex gap-3 mt-2'>
                  <div className='flex gap-1 text-orange-500 text-[13px] pr-3 '>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                  <div className='text-gray-400 '>17/04/2023</div>
                </div>
                <p className='text-base mt-2'>
                  Dưỡng ẩm và giảm kích ứng da khá tốt, bôi lên cảm giác mát, da căng bóng, dùng kèm với retinol
                </p>
              </div>
              <div className='flex flex-col text-[14px] border-white border-b-gray-100 border-2 pb-4 w-[91%] '>
                <span>mon</span>
                <div className='flex gap-3 mt-2'>
                  <div className='flex gap-1 text-orange-500 text-[13px] pr-3 '>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                  <div className='text-gray-400 '>17/04/2023</div>
                </div>
                <p className='text-base mt-2'>
                  Dưỡng ẩm và giảm kích ứng da khá tốt, bôi lên cảm giác mát, da căng bóng, dùng kèm với retinol
                </p>
              </div>
              <div className='flex flex-col text-[14px] border-white border-b-gray-100 border-2 pb-4 w-[91%] '>
                <span>mon</span>
                <div className='flex gap-3 mt-2'>
                  <div className='flex gap-1 text-orange-500 text-[13px] pr-3 '>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                  <div className='text-gray-400 '>17/04/2023</div>
                </div>
                <p className='text-base mt-2'>
                  Dưỡng ẩm và giảm kích ứng da khá tốt, bôi lên cảm giác mát, da căng bóng, dùng kèm với retinol
                </p>
              </div>
              <div className='flex flex-col text-[14px] border-white border-b-gray-100 border-2 pb-4 w-[91%] '>
                <span>mon</span>
                <div className='flex gap-3 mt-2'>
                  <div className='flex gap-1 text-orange-500 text-[13px] pr-3 '>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                  <div className='text-gray-400 '>17/04/2023</div>
                </div>
                <p className='text-base mt-2'>
                  Dưỡng ẩm và giảm kích ứng da khá tốt, bôi lên cảm giác mát, da căng bóng, dùng kèm với retinol
                </p>
              </div>
              <div className='flex flex-col text-[14px] border-white border-b-gray-100 border-2 pb-4 w-[91%] '>
                <span>mon</span>
                <div className='flex gap-3 mt-2'>
                  <div className='flex gap-1 text-orange-500 text-[13px] pr-3 '>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                  <div className='text-gray-400 '>17/04/2023</div>
                </div>
                <p className='text-base mt-2'>
                  Dưỡng ẩm và giảm kích ứng da khá tốt, bôi lên cảm giác mát, da căng bóng, dùng kèm với retinol
                </p>
              </div>
              <div className='flex flex-col text-[14px] border-white border-b-gray-100 border-2 pb-4 w-[91%] '>
                <span>mon</span>
                <div className='flex gap-3 mt-2'>
                  <div className='flex gap-1 text-orange-500 text-[13px] pr-3 '>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                  <div className='text-gray-400 '>17/04/2023</div>
                </div>
                <p className='text-base mt-2'>
                  Dưỡng ẩm và giảm kích ứng da khá tốt, bôi lên cảm giác mát, da căng bóng, dùng kèm với retinol
                </p>
              </div>
            </div>
          </div>
          <div
            className='grid gap-24 mt-[50px] border-white border-b-gray-100 border-2 pb-8'
            style={{ gridTemplateColumns: '30% 70%' }}
          >
            <div className='uppercase text-left text-xl font-bold'>Sản phẩm liên quan</div>
            <div className='flex flex-col w-[90%]'>
              {productsData && (
                <div className='grid grid-cols-3 gap-5'>
                  {productsData.data.data.products.map((product) => (
                    <div className='col-span-1' key={product._id}>
                      <Product product={product} />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
