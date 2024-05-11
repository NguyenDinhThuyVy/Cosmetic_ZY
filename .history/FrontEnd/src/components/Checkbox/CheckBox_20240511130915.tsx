import { Radio, CheckboxProps, ConfigProvider } from 'antd'

export default function CheckBox() {
  const onChange: CheckboxProps['onChange'] = (e) => {
    console.log(`checked = ${e.target.checked}`)
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
        <Radio onChange={onChange}>
          <span>Dưới 500.000₫</span>
        </Radio>
      </ConfigProvider>
      <ConfigProvider theme={myTheme}>
        <Radio onChange={onChange}>
          <span>500.000₫ - 1.000.000₫</span>
        </Radio>
      </ConfigProvider>
      <ConfigProvider theme={myTheme}>
        <Radio onChange={onChange}>
          <span>1.000.000₫ - 1.500.000₫</span>
        </Radio>
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
