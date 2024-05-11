import { MdOutlineAccountCircle } from 'react-icons/md'
import { FaShoppingCart } from 'react-icons/fa'
import { BiSolidPackage } from 'react-icons/bi'
import path from 'src/constants/path'
import { TbBrandBaidu } from 'react-icons/tb'
import { AiFillSignal } from 'react-icons/ai'

export const data = [
  {
    id: 0,
    title: 'Quản lý doanh thu',
    icon: <AiFillSignal fontSize='24px' />,
    link: path.dashboard
  },
  {
    id: 1,
    title: 'Quản lý tài khoản',
    icon: <MdOutlineAccountCircle fontSize='24px' />,
    link: path.accounts
  },
  {
    id: 2,
    title: 'Quản lý sản phẩm',
    icon: <BiSolidPackage fontSize='24px' />,
    link: path.products
  },
  {
    id: 3,
    title: 'Quản lý thương hiệu',
    icon: <TbBrandBaidu fontSize='24px' />,
    link: path.cart
  },
  {
    id: 4,
    title: 'Quản lý đơn hàng',
    icon: <FaShoppingCart fontSize='24px' />,
    link: path.orders
  }
]
