import { Breadcrumb, Switch } from 'antd'
import CartItem from './component/CartItem'
import './styles.scss'
import 'src/Styles/Header.scss'
import { Link } from 'react-router-dom'
import path from 'src/constants/path'
export default function Cart() {
  return (
    <section className='flex flex-col my-4 mx-16 font'>
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
      <div className='cart-table flex items-start justify-between'>
        <div className=' product-list max-h-[600px] overflow-y-auto border-2 border-gray-100 rounded-lg'>
          <div className='cart-table-section p-2'>
            <table className='table-shop'>
              <thead>
                <tr className='font-medium '>
                  <th className='p-0'>
                    <Switch defaultChecked={false} />
                  </th>
                  <th className='pr-0 w-[49%]'>Product Name</th>
                  <th className='px-0 ml-5  w-[15%] text-center '>Price</th>

                  <th className=' px-0 ml-3  w-[10%] text-center'>Quantity</th>
                  <th className='ml-3  px-0 w-[15%] text-center'>Total</th>
                  <th className='ml-3  px-0 w-[11%] text-center'>Remaining</th>
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
