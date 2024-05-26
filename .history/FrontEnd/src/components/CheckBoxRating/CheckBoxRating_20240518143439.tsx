import { ConfigProvider, Radio, RadioChangeEvent } from 'antd'
import { createSearchParams, useNavigate } from 'react-router-dom'
import path from 'src/constants/path'
import { QueryConfig } from 'src/hooks/useQueryConfig'

interface Props {
  queryConfig: QueryConfig
}

export default function CheckBoxRating({ queryConfig }: Props) {
  const navigate = useNavigate()
  const onChange = (e: RadioChangeEvent) => {
    const newValue = e.target.value

    let ratingFilter


    switch (newValue) {
      case 1:
        price_max = '500000'
        price_min = '0'
        break
      case 2:
        price_max = '1000000'
        price_min = '500000'
        break
      case 3:
        price_max = '1500000'
        price_min = '1000000'
        break
      case 4:
        price_max = '2000000'
        price_min = '1500000'
        break
      case 5:
        price_max = '10000000' // Assuming a high upper limit for "Trên 2.000.000₫"
        price_min = '2000000'
        break
      default:
        // Handle default case or do nothing
        return
    }


  const handleFilterStar = (ratingFilter: number) => {
    navigate({
      pathname: path.home,
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
