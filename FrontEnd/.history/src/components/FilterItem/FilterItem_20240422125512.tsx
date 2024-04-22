import { Collapse, CollapseProps, ConfigProvider } from 'antd'
import 'src/Styles/Header.scss'
import Checkbox from '../Checkbox'

export default function FilterItem() {
  const items: CollapseProps['items'] = [
    {
      key: '1',
      label: 'Giá sản phẩm',
      children: <Checkbox />
    }
  ]
  const myTheme = {
    components: {
      Checkbox: {
        colorPrimary: 'black'
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
