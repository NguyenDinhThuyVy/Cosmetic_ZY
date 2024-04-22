import { Checkbox, CheckboxProps, ConfigProvider } from 'antd'

export default function CheckBox() {
  const onChange: CheckboxProps['onChange'] = (e) => {
    // console.log(`checked = ${e.target.checked}`)
  }
  const myTheme = {
    components: {
      Checkbox: {
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
      <ConfigProvider theme={myTheme} className=''>
        <Checkbox onChange={onChange}>
          <span>500.000₫ - 1.000.000₫</span>
        </Checkbox>
        <Checkbox onChange={onChange}>
          <span>500.000₫ - 1.000.000₫</span>
        </Checkbox>
        <Checkbox onChange={onChange}>
          <span>500.000₫ - 1.000.000₫</span>
        </Checkbox>
        <Checkbox onChange={onChange}>
          <span>500.000₫ - 1.000.000₫</span>
        </Checkbox>
      </ConfigProvider>
    </div>
  )
}
