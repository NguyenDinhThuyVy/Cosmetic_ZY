import { Radio, ConfigProvider, RadioChangeEvent } from 'antd'
import { useState } from 'react'

export default function CheckBox() {
  const [value, setValue] = useState(1)
  const onChange = (e: RadioChangeEvent) => {
    console.log('radio checked', e.target.value)
    setValue(e.target.value)
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
    <div className='flex flex-col gap-5'>
      <ConfigProvider theme={myTheme}>
        <Radio.Group onChange={onChange} value={value}>
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
        </Radio.Group>
      </ConfigProvider>

      <ConfigProvider theme={myTheme}>
        <Radio onChange={onChange}>
          <span>1.500.000₫ - 2.000.000₫</span>
        </Radio>
      </ConfigProvider>
      <ConfigProvider theme={myTheme}>
        <Radio onChange={onChange}>
          <span>Trên 2.000.000₫</span>
        </Radio>
      </ConfigProvider>
    </div>
  )
}
