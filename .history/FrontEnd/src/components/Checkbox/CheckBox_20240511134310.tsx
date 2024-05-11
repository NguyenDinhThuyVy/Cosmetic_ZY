// import { yupResolver } from '@hookform/resolvers/yup'
import { Radio, ConfigProvider, RadioChangeEvent } from 'antd'
import { useState } from 'react'
// import { useForm } from 'react-hook-form'
import { createSearchParams, useNavigate } from 'react-router-dom'
import path from 'src/constants/path'
import { QueryConfig } from 'src/hooks/useQueryConfig'

// import { NoUndefinedField } from 'src/types/utils.type'
// import { Schema, schema } from 'src/utils/rules'
// import { ObjectSchema } from 'yup'

interface Props {
  queryConfig: QueryConfig
}
// type FormData = NoUndefinedField<Pick<Schema, 'price_max' | 'price_min'>>
// const priceSchema = schema.pick(['price_min', 'price_max'])
export default function CheckBox({ queryConfig }: Props) {
  const [value, setValue] = useState<number>()
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

  const navigate = useNavigate()
  const onChange = (e: RadioChangeEvent) => {
    const newValue = e.target.value
    setValue(newValue) // Update state
    let price_max
    let price_min

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

    navigate({
      pathname: path.filterProduct,
      search: createSearchParams({
        ...queryConfig,
        price_max,
        price_min
      }).toString()
    })
    // Add additional cases here if other radio buttons should navigate differently
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
