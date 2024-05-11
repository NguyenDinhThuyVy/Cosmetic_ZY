import { Collapse, CollapseProps, ConfigProvider } from 'antd'
import 'src/Styles/Header.scss'
import Checkbox from '../Checkbox'
import CheckBoxBrand from '../CheckBoxBrand'
import CheckBoxCategory from '../CheckBoxCategory'
import useQueryConfig from 'src/hooks/useQueryConfig'
import categoryApi from 'src/apis/category.api'
import { useQuery } from 'react-query'

interface Props {
  index: number
  label: string
}

export default function FilterItem({ index, label }: Props) {
  const queryConfig = useQueryConfig()
  const { data: categoriesData } = useQuery({
    queryKey: ['categories'],
    queryFn: () => {
      return categoryApi.getCategories()
    }
  })
  const generateChildren = (index: number) => {
    switch (index) {
      case 1:
        return <Checkbox queryConfig={queryConfig} />
      case 2:
        return (
          <div>
            <CheckBoxCategory queryConfig={queryConfig} categories={categoriesData?.data.data || []} />
          </div>
        )
      default:
        return (
          <div>
            <CheckBoxBrand queryConfig={queryConfig} categories={categoriesData?.data.data || []} />
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
