import { Switch } from 'antd'

export default function Cart() {
  return (
    <section className='cart-wrapper'>
      {/* <!-- ********** -->
  <!--  CART-TABLE -->
  <!-- ********** --> */}
      <div className='cart-table flex items-start justify-between bg-[#f7f7f7]'>
        <div className='bg-white product-list w-[70%] max-h-[500px] overflow-y-auto'>
          <div className='cart-table-section'>
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
                  <th className='pl-[15px]  product-quantity'>{t('Quantity')}</th>
                  <th className='pl-[10px] text-left product-subtotal'>{t('Subtotal')}</th>
                  <th className='pl-[10px] text-left product-subtotal'>
                    {/* {t('Subtotal')} */}
                    Quantity in stock
                  </th>
                </tr>
              </thead>
              <tbody>
                {order.length > 0 &&
                  order?.map((item) => (
                    <CartItem
                      key={item._id}
                      cart={item}
                      _id={item._id}
                      checked={item.status}
                      handleGetCartByAccount={handleGetCartByAccount}
                      handleGetCartByAccountStatus={handleGetCartByAccountStatus}
                    ></CartItem>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className='bg-white cart-totals w-[28%]'>
          <div className='liner-continer'>
            <h4 className='title'>{t('CartTotal')}</h4>
          </div>
          <div className='wd-cart-totals'>
            <div className='cart-totals-inner'>
              <table className='table-shop'>
                <tbody>
                  <tr className='order-total'>
                    <th>{t('Total')}</th>
                    <td>
                      <span>
                        {payment.totalMoney
                          ? payment.totalMoney?.toLocaleString('it-IT', {
                              style: 'currency',
                              currency: 'VND'
                            })
                          : 0}
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className='wc-proceed-to-checkout'>
                <button className='text-white checkout-button' onClick={handleCheckout}>
                  {t('Proceedtocheckout')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
