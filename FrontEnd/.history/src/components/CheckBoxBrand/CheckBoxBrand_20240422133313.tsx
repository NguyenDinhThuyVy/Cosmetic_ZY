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
  return (
    <div className='flex flex-col gap-5'>
      <ConfigProvider theme={myTheme}>
        <Checkbox onChange={onChange}>
          <span>Chăm sóc cơ thể</span>
        </Checkbox>
      </ConfigProvider>
      <ConfigProvider theme={myTheme}>
        <Checkbox onChange={onChange}>
          <span>Kem dưỡng mặt</span>
        </Checkbox>
      </ConfigProvider>
      <ConfigProvider theme={myTheme}>
        <Checkbox onChange={onChange}>
          <span>Sửa rửa mặt</span>
        </Checkbox>
      </ConfigProvider>
      <ConfigProvider theme={myTheme}>
        <Checkbox onChange={onChange}>
          <span>Serum</span>
        </Checkbox>
      </ConfigProvider>
      <ConfigProvider theme={myTheme}>
        <Checkbox onChange={onChange}>
          <span>Tẩy Trang</span>
        </Checkbox>
      </ConfigProvider>
      <ConfigProvider theme={myTheme}>
        <Checkbox onChange={onChange}>
          <span>Tẩy chế bào chết</span>
        </Checkbox>
      </ConfigProvider>
    </div>
  )
}
