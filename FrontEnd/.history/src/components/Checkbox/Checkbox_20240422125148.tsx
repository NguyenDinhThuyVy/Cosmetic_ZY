import { CheckboxProps } from 'antd'

export default function CheckBox(){}
  const onChange: CheckboxProps['onChange'] = (e) => {
    console.log(`checked = ${e.target.checked}`)
  }
  return (
    <div>
      <Checkbox onChange={onChange}>Checkbox</Checkbox>
    </div>
  )
}
