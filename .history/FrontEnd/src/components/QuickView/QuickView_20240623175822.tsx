import { FaStar } from 'react-icons/fa6'
import SwiperQuick from '../SwiperQuick'
import { FaStarHalfAlt } from 'react-icons/fa'
import 'src/Styles/SwiperQuick.scss'
import { Link, useNavigate } from 'react-router-dom'
import AddPurchase from '../AddPurchase'
import path from 'src/constants/path'
import { generateNameId } from 'src/utils/utils'
import { useMutation, useQueryClient } from 'react-query'
import purchaseApi from 'src/apis/purchase.api'
import { toast } from 'react-toastify'
import { purchasesStatus } from 'src/constants/purchase'
import { useState } from 'react'

interface Props {
  product: any
}

export default function QuickView({ product }: Props) {
  const [buyCount, setBuyCount] = useState(1)
  const queryClient = useQueryClient()
  const navigate = useNavigate()
  const addToCartMutation = useMutation(purchaseApi.addToCart)

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

  const handleBuyCount = (value: number) => {
    setBuyCount(value)
  }

  if (!product) return null

  return (
    <div className='grid gap-5 px-1' style={{ gridTemplateColumns: '45% 55%' }}>
      <div className=''>
        <SwiperQuick product={product} />
      </div>
      <div className='flex flex-col gap-1'>
        <div className='text-l text-rose-700 uppercase font-bold'>{product?.brand?.name}</div>
        <div className='text-xl text-gray-900  font-bold'>{product?.name}</div>
        <div className='flex gap-2'>
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
          <div className='flex gap-1'>
            <span className='font-semibold'>Mã:</span>
            <span>5044</span>
          </div>
        </div>
        <div className='border-gradient w-[92%] rounded-lg p-2 mt-4 flex flex-col gap-1 '>
          <div className='font-bold text-[15px]'>Thông tin sản phẩm :</div>
          <p className='line-clamp-6'>
            Dưới đây là công dụng của sản phẩm. Bạn nên xem xét kỹ công dụng của từng sản phẩm để biết bản thân mình phù
            hơp với loại sản phẩm nào, và hiệu quả của sản phẩm đó trên da của chúng ta. {product.uses} . Chúc các bạn
            mãi xinh đẹp . Hãy luôn yêu thương bản thân mình nhé !
          </p>
        </div>
        <AddPurchase
          product={product}
          addToCart={addToCart}
          buyNow={buyNow}
          buyCount={buyCount}
          handleBuyCount={handleBuyCount}
        />
        <div className=' mt-4'>
          <Link
            to={`${path.home}${generateNameId({ name: product.name, id: product._id })}`}
            className='text-lg font-bold border-2 border-white border-b-gray-950 text-black hover:text-gray-800'
            onClick={() => {
              window.scrollTo(0, 0)
            }}
          >
            Xem chi tiết sản phẩm
          </Link>
        </div>
      </div>
    </div>
  )
}
