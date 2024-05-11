import FilterItem from 'src/components/FilterItem'

interface Props {
  setRadioValue: any
}
export default function Filter({ setRadioValue }: Props) {
  return (
    <div className='flex flex-col '>
      <FilterItem index={1} label='Giá sản phẩm' setRadioValue={setRadioValue} />
      <FilterItem index={2} label='Danh mục' setRadioValue={setRadioValue} />
      <FilterItem index={3} label='Thương hiệu' setRadioValue={setRadioValue} />
      <FilterItem index={4} label='Đánh giá sản phẩm' setRadioValue={setRadioValue} />
    </div>
  )
}
