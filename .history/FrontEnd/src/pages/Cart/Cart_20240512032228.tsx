import { Breadcrumb, Popconfirm, Switch } from 'antd'
import './styles.scss'
import 'src/Styles/Header.scss'
import { Link, useLocation } from 'react-router-dom'
import path from 'src/constants/path'
import { useContext, useEffect, useMemo, useState } from 'react'
import { useMutation, useQuery } from 'react-query'
import { AppContext } from 'src/contexts/app.contexts'
import { purchasesStatus } from 'src/constants/purchase'
import purchaseApi from 'src/apis/purchase.api'
import { produce } from 'immer'
import { keyBy } from 'lodash'
import { formatCurrency, generateNameId } from 'src/utils/utils'
import QuantityController from 'src/components/QuantityController'
import { Purchase } from 'src/types/purchase.type'
import 'src/Styles/CheckBoxBrand.scss'

export default function Cart() {
  const { extendedPurchases, setExtendedPurchases } = useContext(AppContext)
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [shouldRefetch, setShouldRefetch] = useState(false)

  const { data: purchasesInCartData, refetch } = useQuery({
    queryKey: ['purchases', { status: purchasesStatus.inCart }],
    queryFn: () => purchaseApi.getPurchases({ status: purchasesStatus.inCart })
  })
  const updatePurchaseMutation = useMutation({
    mutationFn: purchaseApi.updatePurchase,
    onSuccess: () => {
      refetch()
    }
  })
  // const buyProductsMutation = useMutation({
  //   mutationFn: purchaseApi.buyProducts
  // })
  const deletePurchasesMutation = useMutation({
    mutationFn: purchaseApi.deletePurchase,
    onSuccess: () => {
      refetch()
    }
  })
  const location = useLocation()
  const purchasesInCart = purchasesInCartData?.data.data
  const choosenPurchaseIdFromLocation = (location.state as { purchaseId: string } | null)?.purchaseId
  const isAllChecked = useMemo(() => extendedPurchases.every((purchase) => purchase.checked), [extendedPurchases])
  const checkedPurchases = useMemo(() => extendedPurchases.filter((purchase) => purchase.checked), [extendedPurchases])
  const checkedPurchasesCount = checkedPurchases.length
  const totalCheckedPurchasePrice = useMemo(
    () =>
      checkedPurchases.reduce((result, current) => {
        return result + current.product.price * current.buy_count
      }, 0),
    [checkedPurchases]
  )
  const totalCheckedPurchaseSavingPrice = useMemo(
    () =>
      checkedPurchases.reduce((result, current) => {
        return result + (current.product.price_before_discount - current.product.price) * current.buy_count
      }, 0),
    [checkedPurchases]
  )

  useEffect(() => {
    setExtendedPurchases((prev) => {
      const extendedPurchasesObject = keyBy(prev, '_id')
      return (
        purchasesInCart?.map((purchase) => {
          const isChoosenPurchaseFromLocation = choosenPurchaseIdFromLocation === purchase._id
          return {
            ...purchase,
            disabled: false,
            checked: isChoosenPurchaseFromLocation || Boolean(extendedPurchasesObject[purchase._id]?.checked)
          }
        }) || []
      )
    })
  }, [purchasesInCart, choosenPurchaseIdFromLocation])

  useEffect(() => {
    return () => {
      history.replaceState(null, '')
    }
  }, [])

  const handleCheck = (purchaseIndex: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setExtendedPurchases(
      produce((draft) => {
        draft[purchaseIndex].checked = event.target.checked
      })
    )
  }

  const handleCheckAll = () => {
    setExtendedPurchases((prev) =>
      prev.map((purchase) => ({
        ...purchase,
        checked: !isAllChecked
      }))
    )
  }

  const handleTypeQuantity = (purchaseIndex: number) => (value: number) => {
    setExtendedPurchases(
      produce((draft) => {
        draft[purchaseIndex].buy_count = value
      })
    )
  }

  const handleQuantity = (purchaseIndex: number, value: number, enable: boolean) => {
    if (enable) {
      const purchase = extendedPurchases[purchaseIndex]
      setExtendedPurchases(
        produce((draft) => {
          draft[purchaseIndex].disabled = true
        })
      )
      updatePurchaseMutation.mutate({ product_id: purchase.product._id, buy_count: value })
    }
  }

  const handleDelete = (purchaseIndex: number) => () => {
    const purchaseId = extendedPurchases[purchaseIndex]._id
    deletePurchasesMutation.mutate([purchaseId])
  }

  console.log(purchasesInCartData)
  console.log(extendedPurchases)
  return (
    <section className='flex flex-col my-4 mx-16 font '>
      <Breadcrumb
        separator='>'
        items={[
          {
            title: <Link to={path.home}>Trang chủ</Link>
          },
          {
            title: <Link to={path.cart}>Trang giỏ hàng</Link>
          }
        ]}
        className='pl-[22px]'
      ></Breadcrumb>
      <div className='text-[21px] pl-[22px] font-bold text-gray-700 w-[750px] '>Trang giỏ hàng của bạn</div>
      <div className='cart-table flex items-start justify-between '>
        <div className=' product-list max-h-[680px] overflow-y-auto border-2 border-gray-100 rounded-lg scrollable-container'>
          <div className='cart-table-section  '>
            <table className='table-shop'>
              <thead>
                <tr className='font-medium '>
                  <th className='p-0'>
                    <Switch checked={isAllChecked} onChange={handleCheckAll} />
                  </th>
                  <th className='pr-0 w-[40%]'>Product Name</th>
                  <th className='px-0 ml-5  w-[15%] text-center '>Price</th>

                  <th className=' px-0 ml-3  w-[10%] text-center'>Quantity</th>
                  <th className='ml-3  px-0 w-[15%] text-center'>Total</th>
                  <th className='ml-3  px-0 w-[11%] text-center'>Remaining</th>
                </tr>
              </thead>
              {extendedPurchases.map((purchase, index) => (
                <tbody key={purchase._id}>
                  <tr>
                    <td className='p-0 text-center'>
                      <input type='checkbox' checked={purchase.checked} onChange={handleCheck(index)}></input>
                    </td>
                    <td className='w-[40%] pr-0'>
                      <div className='flex flex-row items-center gap-x-[10px]'>
                        <div className='relative'>
                          <img
                            src={purchase.product.image}
                            alt=''
                            width={200}
                            height={200}
                            className='item-img max-w-[80px] object-cover'
                          />
                          <button className='absolute top-[-10px] right-[-6px] z-40' onClick={handleDelete(index)}>
                            <i className='fa fa-times' aria-hidden='true'></i>
                          </button>
                        </div>
                        <Link
                          to={`${path.home}${generateNameId({
                            name: purchase.product.name,
                            id: purchase.product._id
                          })}`}
                        >
                          <span className='pr-0 w-[full%]'>{purchase.product.name}</span>
                        </Link>
                      </div>
                    </td>
                    <td className='p-0 pl-6 '>
                      <div className='flex items-center gap-x-[10px]'>
                        <span className='line-through text-gray-400 '>
                          {formatCurrency(purchase.product.price_before_discount)}
                        </span>
                        <span className='bg-clip-text text-transparent bg-gradient-to-r from-[#f0a80e] via-[#c43131] to-[#671f57] font-semibold'>
                          {formatCurrency(purchase.product.price)}
                        </span>
                      </div>
                    </td>
                    {/* <td className="text-center price-amount amount">
              </td> */}
                    <td className='pl-[15px] quantity'>
                      <QuantityController
                        max={purchase.product.quantity}
                        value={purchase.buy_count}
                        onIncrease={(value) => handleQuantity(index, value, value <= purchase.product.quantity)}
                        onDecrease={(value) => handleQuantity(index, value, value >= 1)}
                        onType={handleTypeQuantity(index)}
                        onFocusOut={(value) =>
                          handleQuantity(
                            index,
                            value,
                            value >= 1 &&
                              value <= purchase.product.quantity &&
                              value !== (purchasesInCart as Purchase[])[index].buy_count
                          )
                        }
                        disabled={purchase.disabled}
                        classNameWrapper='w-[30px] h-[30px]'
                      />
                    </td>
                    <td className='p-0 pl-8'>
                      <span className=''>{formatCurrency(purchase.product.price * purchase.buy_count)} vnd</span>
                    </td>
                    <td className='pr-12'>
                      <span className='text-black'>{purchase.product.stockQuantity}</span>
                    </td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
        </div>
        <div className=' cart-totals w-[28%] border border-gray-100 rounded-lg shadow-lg p-4'>
          <div className=' h-[50px] m-3 text-[18px]'>
            <h4 className='text-center'>Tổng tiển thanh toán</h4>
          </div>
          <div className='wd-cart-totals'>
            <div className='cart-totals-inner'>
              <table className='table-shop'>
                <tbody>
                  <tr className=''>
                    <th>Số lượng sản phẩm</th>
                    <td>
                      <span className='bg-clip-text text-transparent bg-gradient-to-r from-[#f0a80e] via-[#c43131] to-[#671f57] font-semibold'>
                        {checkedPurchasesCount}
                      </span>
                    </td>
                  </tr>
                  <tr className=''>
                    <th>Tổng tiền</th>
                    <td>
                      <span className='bg-clip-text text-transparent bg-gradient-to-r from-[#f0a80e] via-[#c43131] to-[#671f57] font-semibold'>
                        {formatCurrency(totalCheckedPurchasePrice)}
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className='wc-proceed-to-checkout'>
                <button className='text-white checkout-button  bg-gradient-to-r from-[#f0a80e] via-[#c43131] to-[#671f57] font-semibold'>
                  Thanh Toán Ngay
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
