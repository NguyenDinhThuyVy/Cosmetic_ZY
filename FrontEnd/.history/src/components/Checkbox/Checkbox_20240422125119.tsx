import { CheckboxProps } from 'antd'

const Checkbox() : React.FC = () =>
  const onChange: CheckboxProps['onChange'] = (e) => {
    console.log(`checked = ${e.target.checked}`)
  }
  return (
    <div>
      <Checkbox onChange={onChange}>Checkbox</Checkbox>
    </div>
  )
}
