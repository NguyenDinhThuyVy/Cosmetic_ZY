import { Switch } from 'antd'
import CartItem from './component/CartItem'
import './styles.scss'
import 'src/Styles/Header.scss'
export default function Cart() {
  return (
    <section className='cart-wrapper my-4 mx-16 font'>
      {/* <!-- ********** -->
  <!--  CART-TABLE -->
  <!-- ********** --> */}
      <div className='cart-table flex items-start justify-between'>
        <div className=' product-list max-h-[600px] overflow-y-auto border-2 border-gray-100 rounded-lg'>
          <div className='cart-table-section p-2'>
            <table className='table-shop'>
              <thead>
                <tr className='font-medium '>
                  <th className='p-0'>
                    <Switch defaultChecked={false} />
                  </th>
                  <th className='pr-0 product-name w-[43%]'>Sản phẩm</th>
                  <th className='px-1 product-price w-[15%]'>Đơn Giá</th>

                  <th className='pl-[15px]  product-quantity  w-[10%]'>Số lượng</th>
                  <th className='pl-[10px] text-left product-subtotal w-[15%]'>Tổng tiền</th>
                  <th className='pl-[10px] text-left product-subtotal w-[17%]'>Số lượng còn lại</th>
                </tr>
              </thead>
              <tbody>
                <CartItem></CartItem>
              </tbody>
            </table>
          </div>
        </div>
        <div className=' cart-totals w-[28%] border border-gray-100 rounded-lg shadow-lg'>
          <div className='liner-continer h-[90px]'>
            <h4 className='title'>h</h4>
          </div>
          <div className='wd-cart-totals'>
            <div className='cart-totals-inner'>
              <table className='table-shop'>
                <tbody>
                  <tr className='order-total'>
                    <th>t</th>
                    <td>
                      <span>100</span>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className='wc-proceed-to-checkout'>
                <button className='text-white checkout-button'>hh</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
