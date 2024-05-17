import React, { useState, useEffect } from 'react'

const RandomImage = ({ imageList: any }) => {
  const [randomImageUrl, setRandomImageUrl] = useState('')

  useEffect(() => {
    // Chọn một ảnh ngẫu nhiên từ danh sách ảnh
    const randomImageIndex = Math.floor(Math.random() * imageList.length)
    const randomImageSrc = imageList[randomImageIndex]

    // Cập nhật URL của ảnh ngẫu nhiên vào state
    setRandomImageUrl(randomImageSrc)
  }, [imageList])

  return <img src={randomImageUrl} alt='' className='rounded-lg' />
}

export default RandomImage
