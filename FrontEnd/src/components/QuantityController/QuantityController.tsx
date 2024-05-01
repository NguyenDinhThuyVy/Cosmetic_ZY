import { useState } from 'react'

import InputNumber, { InputNumberProps } from '../InputNumber/InputNumber'

interface Props extends InputNumberProps {
  max?: number
  onIncrease?: (value: number) => void
  onDecrease?: (value: number) => void
  onType?: (value: number) => void
  onFocusOut?: (value: number) => void
  classNameWrapper?: string
}

export default function QuantityController({
  max,
  onIncrease,
  onDecrease,
  onType,
  classNameWrapper = 'w-[40px] h-[45px]',
  onFocusOut,
  value,
  ...rest
}: Props) {
  const [localValue, setLocalValue] = useState<number>(Number(value || 0))
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let _value = Number(event.target.value)
    if (max !== undefined && _value > max) {
      _value = max
    } else if (_value < 1) {
      _value = 1
    }
    onType && onType(_value)
    setLocalValue(_value)
  }

  const increase = () => {
    let _value = Number(value || localValue) + 1
    if (max !== undefined && _value > max) {
      _value = max
    }
    onIncrease && onIncrease(_value)
    setLocalValue(_value)
  }

  const decrease = () => {
    let _value = Number(value || localValue) - 1
    if (_value < 1) {
      _value = 1
    }
    onDecrease && onDecrease(_value)
    setLocalValue(_value)
  }

  const handleBlur = (event: React.FocusEvent<HTMLInputElement, Element>) => {
    onFocusOut && onFocusOut(Number(event.target.value))
  }

  return (
    <div className={'flex  items-center justify-center border-2 border-gray-200 rounded-full'}>
      <button
        className={'flex items-center px-3  rounded-l-full hover:bg-gray-200' + classNameWrapper}
        onClick={decrease}
      >
        <span role='img' className='anticon'>
          <svg width='14' height='2' viewBox='0 0 14 2' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M1 0C0.447715 0 0 0.447715 0 1C0 1.55228 0.447715 2 1 2L1 0ZM13 2C13.5523 2 14 1.55228 14 1C14 0.447715 13.5523 0 13 0V2ZM1 2L13 2V0L1 0L1 2Z'
              fill='black'
            ></path>
          </svg>
        </span>
      </button>
      <InputNumber
        className=''
        classNameError='hidden'
        classNameInput={'flex items-center pl-3  text-base font-bold justify-center ' + classNameWrapper}
        onChange={handleChange}
        onBlur={handleBlur}
        value={value || localValue}
        {...rest}
      />
      <button
        className={'flex items-center px-3  rounded-l-full hover:bg-gray-200' + classNameWrapper}
        onClick={increase}
      >
        <span role='img' className='anticon'>
          <svg width='14' height='14' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M1 6C0.447715 6 0 6.44772 0 7C0 7.55228 0.447715 8 1 8L1 6ZM13 8C13.5523 8 14 7.55228 14 7C14 6.44772 13.5523 6 13 6V8ZM1 8L13 8V6L1 6L1 8Z'
              fill='black'
            ></path>
            <path
              d='M6 13C6 13.5523 6.44772 14 7 14C7.55228 14 8 13.5523 8 13L6 13ZM8 1C8 0.447715 7.55228 -2.41411e-08 7 0C6.44771 2.41411e-08 6 0.447715 6 1L8 1ZM8 13L8 1L6 1L6 13L8 13Z'
              fill='black'
            ></path>
          </svg>
        </span>
      </button>
    </div>
  )
}
