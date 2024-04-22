import { Checkbox, CheckboxProps, ConfigProvider } from 'antd'

export default function CheckBox() {
  const onChange: CheckboxProps['onChange'] = (e) => {
    console.log(`checked = ${e.target.checked}`)
  }
  const myTheme = {
    components: {
      CheckBox: {}
    }
  }
  return (
    <div>
      <ConfigProvider theme={myTheme}>
        <Checkbox onChange={onChange}>Checkbox</Checkbox>
      </ConfigProvider>
    </div>
  )
}
