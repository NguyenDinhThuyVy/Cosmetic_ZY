import { Switch } from 'antd'
import CartItem from './component/CartItem'
import './styles.scss'
export default function Cart() {
  return (
    <section className='cart-wrapper my-4 mx-20'>
      {/* <!-- ********** -->
  <!--  CART-TABLE -->
  <!-- ********** --> */}
      <div className='cart-table flex items-start justify-between'>
        <div className=' product-list w-[70%] max-h-[500px] overflow-y-auto border-2 border-gray-100 rounded-lg'>
          <div className='cart-table-section p-2'>
            <table className='table-shop'>
              <thead>
                <tr>
                  {/* <th className="product-remove">&nbsp;</th> */}
                  <th className='p-0'>
                    <Switch defaultChecked={false} />
                  </th>
                  <th className='pr-0 product-name'>shshd</th>
                  <th className='px-0 product-price'>1000</th>
                  {/* <th className="whitespace-nowrap product-price">
                      Sale price
                    </th> */}
                  <th className='pl-[15px]  product-quantity'>h</th>
                  <th className='pl-[10px] text-left product-subtotal'>h</th>
                  <th className='pl-[10px] text-left product-subtotal'>
                    {/* {t('Subtotal')} */}
                    Quantity in stock
                  </th>
                </tr>
              </thead>
              <tbody>
                {' '}
                <CartItem></CartItem>
              </tbody>
            </table>
          </div>
        </div>
        <div className=' cart-totals w-[30%] border border-gray-100 rounded-lg'>
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
