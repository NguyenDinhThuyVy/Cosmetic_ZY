import { CheckboxProps } from 'antd'

export default function Checkbox() {
  const onChange: CheckboxProps['onChange'] = (e) => {
    console.log(`checked = ${e.target.checked}`)
  }
  return (
    <div>
      <Checkbox onChange={onChange}>Checkbox</Checkbox>
    </div>
  )
}
