import { Checkbox, CheckboxProps, ConfigProvider } from 'antd'

export default function CheckBoxBrand() {
  const onChange: CheckboxProps['onChange'] = (e) => {
    console.log(`checked = ${e.target.checked}`)
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
  const renderCheckboxes = () => {}
  return (
    <div className='flex flex-col gap-5'>
      <ConfigProvider theme={myTheme}>
        <div className='flex flex-col'></div>
      </ConfigProvider>
    </div>
  )
}
