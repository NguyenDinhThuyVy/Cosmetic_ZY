import { Collapse, CollapseProps, ConfigProvider } from 'antd'
import 'src/Styles/Header.scss'

export default function FilterItem() {
  const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`

  const items: CollapseProps['items'] = [
    {
      key: '1',
      label: 'Giá sản phẩm',
      children: <p className='text-rose-300'>{text}</p>
    }
  ]
  const myTheme = {
    components: {
      Collapse: {
        colorBorder: 'white',
        headerBg: 'white',
        fontSizeIcon: 14,
        fontSizeLG: 18,
        fontFamily: 'Montserrat',
        fontSize: 18,
        headerPadding: '12px 2px'
      }
    }
  }
  return (
    <div className='font'>
      <ConfigProvider theme={myTheme}>
        <Collapse accordion items={items} />
      </ConfigProvider>
    </div>
  )
}
