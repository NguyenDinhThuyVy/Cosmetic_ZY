import { Collapse, CollapseProps, ConfigProvider } from 'antd'
import 'src/Styles/Header.scss'
import Checkbox from '../Checkbox'
import CheckBoxBrand from '../CheckBoxBrand'
import CheckBoxCategory from '../CheckBoxCategory'
import { NoUndefinedField } from 'src/types/utils.type'

import { Category } from 'src/types/category.type'
import { Schema } from 'src/utils/rules'
import { ProductListConfig } from 'src/types/product.type'

interface Props {
  index: number
  label: string
}
export type QueryConfig = {
  [key in keyof ProductListConfig]: string
}
interface Props {
  queryConfig: QueryConfig
  categories: Category[]
}
type FormData = NoUndefinedField<Pick<Schema, 'price_max' | 'price_min'>>
export default function FilterItem({ index, label }: Props) {
  const generateChildren = (index: number) => {
    switch (index) {
      case 1:
        return <Checkbox />
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
