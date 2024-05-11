import { Collapse, CollapseProps, ConfigProvider } from 'antd'
import 'src/Styles/Header.scss'
import Checkbox from '../Checkbox'
import CheckBoxBrand from '../CheckBoxBrand'
import CheckBoxCategory from '../CheckBoxCategory'
import useQueryConfig from 'src/hooks/useQueryConfig'

interface Props {
  index: number
  label: string
}

export default function FilterItem({ index, label }: Props) {
  const queryConfig = useQueryConfig()
  const generateChildren = (index: number) => {
    switch (index) {
      case 1:
        return <Checkbox queryConfig={queryConfig />
      case 2:
        return (
          <div>
            <CheckBoxCategory />
          </div>
        )
      default:
        return (
          <div>
            <CheckBoxBrand />
          </div>
        )
    }
  }
  const items: CollapseProps['items'] = [
    {
      key: index,
      label: label,
      children: generateChildren(index)
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
        contentPadding: '8px 2px'
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
