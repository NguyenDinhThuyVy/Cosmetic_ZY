import { MdOutlineAccountCircle } from 'react-icons/md'
import { FaShoppingCart } from 'react-icons/fa'
import { BiSolidPackage } from 'react-icons/bi'
import path from 'src/constants/path'

export const data = [
  {
    id: 0,
    title: 'Quản lý thông tin cá nhân',
    icon: <MdOutlineAccountCircle />,
    link: path.profile
  },
  {
    id: 1,
    title: 'Quản lý tài khoản',
    icon: <MdOutlineAccountCircle />,
    link: path.accounts
  },
  {
    id: 2,
    title: 'Quản lý sản phẩm',
    icon: <BiSolidPackage />,
    link: path.products
  },
  {
    id: 3,
    title: 'Quản lý đơn hàng',
    icon: <FaShoppingCart />,
    link: path.orders
  }
]
