import { ChangeEvent, useEffect, useState } from 'react'
import type IProps from './SelectFilter.interface'

export default ({ value, label, options, onSelectChange }: IProps) => {
  const [selection, setSelection] = useState(value)

  useEffect(() => {
    setSelection(value)
  }, [value])

  const handleSelectionChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value
    onSelectChange(options.find((option) => option.value === value))
  }
  return (
    <select
      id={label}
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-[99px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      value={selection}
      onChange={handleSelectionChange}
    >
      <option defaultValue="" value="">
        Select {label}
      </option>
      {options.map((option, $index) => (
        <option key={$index} value={option.value}>
          {option.text}
        </option>
      ))}
    </select>
  )
}
