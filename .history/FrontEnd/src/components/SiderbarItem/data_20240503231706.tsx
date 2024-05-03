import { MdOutlineAccountCircle } from 'react-icons/md'
import { FaShoppingCart } from 'react-icons/fa'
import { BiSolidPackage } from 'react-icons/bi'
import path from 'src/constants/path'
import { AiFillSignal } from 'react-icons/ai'
import { IoLogOut } from 'react-icons/io5'

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
    title: 'Quản lý đơn hàng',
    icon: <FaShoppingCart fontSize='24px' />,
    link: path.orders
  },
  {
    id: 4,
    title: 'Đăng xuất',
    icon: <IoLogOut fontSize='24px' />,
    link: path.logout
  }
]
