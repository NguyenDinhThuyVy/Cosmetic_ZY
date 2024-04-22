import { Collapse, CollapseProps, ConfigProvider } from 'antd'
import 'src/Styles/Header.scss'
import Checkbox from '../Checkbox'

interface Props {
  index: number
  label: Category[]
}
export default function FilterItem(index, label) {
  const items: CollapseProps['items'] = [
    {
      key: '1',
      label: 'Giá sản phẩm',
      children: <Checkbox />
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
        headerPadding: '12px 2px',
        contentPadding: '10px 2px'
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
