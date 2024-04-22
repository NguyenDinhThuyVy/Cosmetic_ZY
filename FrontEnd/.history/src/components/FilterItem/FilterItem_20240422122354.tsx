import { Collapse, CollapseProps, ConfigProvider } from 'antd'

export default function FilterItem() {
  const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`

  const items: CollapseProps['items'] = [
    {
      key: '1',
      label: 'This is panel header 1',
      children: <p>{text}</p>
    }
  ]
  const myTheme = {
    components: {
      Collapse: {
        colorBorder: white
      }
    }
  }
  return (
    <div>
      <ConfigProvider theme={myTheme}>
        <Collapse accordion items={items} />
      </ConfigProvider>
    </div>
  )
}
