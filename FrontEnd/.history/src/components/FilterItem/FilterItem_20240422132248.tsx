import { Collapse, CollapseProps, ConfigProvider } from 'antd'
import 'src/Styles/Header.scss'
import Checkbox from '../Checkbox'

interface Props {
  index: number
  label: string
}
export default function FilterItem({ index, label }: Props) {
  const items: CollapseProps['items'] = [
    {
      key: { index },
      label: { label },
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
