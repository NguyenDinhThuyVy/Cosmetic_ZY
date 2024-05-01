// import { Progress, ProgressProps } from 'antd'
import { Link } from 'react-router-dom'

import { FaStar } from 'react-icons/fa6'
import { Modal } from 'antd'
import QuickView from '../QuickView'
import { useState } from 'react'
import path from 'src/constants/path'
import { formatCurrency, generateNameId, rateSale } from 'src/utils/utils'
interface Props {
  product: any
}
export default function ProductSale({ product }: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const showModal = () => {
    setIsModalOpen(true)
  }

  const handleOk = () => {
    setIsModalOpen(false)
  }

  const handleCancel = () => {
    setIsModalOpen(false)
  }

  return (
   {product.price_before_discount != product.price && ()}

  )
}
