import React from 'react'

import './Select.scss'

interface Props {
  options: {
    label: string;
    value: string;
  }[]
}

const Select: React.FC<Props> = ({ options = [] }) => {
  return (
    <select className='select-container'>
      <option value="">Select</option>
      {options.map((option) => (
        <option value={option.value} key={option.value}>{option.label}</option>
      ))}
    </select>
  )
}

export default Select