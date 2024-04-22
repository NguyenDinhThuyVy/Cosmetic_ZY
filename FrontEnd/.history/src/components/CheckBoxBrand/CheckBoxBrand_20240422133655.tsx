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
  const renderCheckboxes = () => {
    <Checkbox onChange={onChange}>
            <span>Chăm sóc cơ thể</span>
          </Checkbox>
          <Checkbox onChange={onChange}>
            <span>Kem dưỡng mặt</span>
          </Checkbox>
          <Checkbox onChange={onChange}>
            <span>Sửa rửa mặt</span>
          </Checkbox>
          <Checkbox onChange={onChange}>
            <span>Serum</span>
          </Checkbox>
          <Checkbox onChange={onChange}>
            <span>Tẩy Trang</span>
          </Checkbox>
          <Checkbox onChange={onChange}>
            <span>Tẩy chế bào chết</span>
          </Checkbox>
  }
  return (
    <div className='flex flex-col gap-5'>
      <ConfigProvider theme={myTheme}>
        <div className='flex flex-col'></div>
      </ConfigProvider>
    </div>
  )
}
