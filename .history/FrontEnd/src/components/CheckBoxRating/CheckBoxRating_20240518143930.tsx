import { ConfigProvider, Radio, RadioChangeEvent } from 'antd'
import { useState } from 'react'
import { createSearchParams, useNavigate } from 'react-router-dom'
import path from 'src/constants/path'
import { QueryConfig } from 'src/hooks/useQueryConfig'

interface Props {
  queryConfig: QueryConfig
}

export default function CheckBoxRating({ queryConfig }: Props) {
  const [value, setValue] = useState<number>()
  const navigate = useNavigate()
  const onChange = (e: RadioChangeEvent) => {
    const newValue = e.target.value
    setValue(newValue)
    let ratingFilter: number

    switch (newValue) {
      case 1:
        ratingFilter = 1
        break
      case 2:
        ratingFilter = 2
        break
      case 3:
        ratingFilter = 3
        break
      case 4:
        ratingFilter = 4
        break
      case 5:
        ratingFilter = 5
        break
      default:
        // Handle default case or do nothing
        return
    }
    navigate({
      pathname: path.filterProduct,
      search: createSearchParams({
        ...queryConfig,
        rating_filter: String(ratingFilter)
      }).toString()
    })
  }

  const myTheme = {
    components: {
      Radio: {
        colorPrimary: 'black',
        colorPrimaryHover: 'black',
        fontFamily: 'Montserrat',
        paddingXS: 10,
        marginXS: 10,
        controlInteractiveSize: 18
      }
    }
  }
  return (
    <div>
      <ConfigProvider theme={myTheme}>
        <Radio.Group onChange={onChange} value={value}>
          <div className='flex flex-col gap-6'>
            <Radio value={1}>
              <span>Dưới 500.000₫</span>
            </Radio>
            <Radio value={2}>
              <span>500.000₫ - 1.000.000₫</span>
            </Radio>
            <Radio value={3}>
              <span>1.000.000₫ - 1.500.000₫</span>
            </Radio>
            <Radio value={4}>
              <span>1.500.000₫ - 2.000.000₫</span>
            </Radio>
            <Radio value={5}>
              <span>Trên 2.000.000₫</span>
            </Radio>
          </div>
        </Radio.Group>
      </ConfigProvider>
    </div>
  )
}
