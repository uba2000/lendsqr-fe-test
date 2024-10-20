import React, { useState } from 'react'

import './InputField.scss'

interface Props {
  type?: React.HTMLInputTypeAttribute
  value: string;
  onChange: (_v: string) => void;
  placeholder?: string;
  className?: string;
}

const InputField: React.FC<Props> = ({ placeholder, className = '', type = "text", value, onChange }) => {
  const [isTypeText, setIsTypeText] = useState(false);

  const [localValue, setLocalValue] = useState(value || '');

  function handleChange(value: string) {
    setLocalValue(value);
    onChange(value);
  }

  return (
    <div className='app__input-container'>
      <input placeholder={placeholder} value={localValue} onChange={(e) => handleChange(e.target.value)} type={isTypeText ? 'text' : type} className={`app__input ${className}`} />
      {type === 'password' && (
        <div onClick={() => setIsTypeText(!isTypeText)} className='app__input-password-toggle-button'>
          {isTypeText ? 'Hide' : 'SHOW'}
        </div>
      )}
    </div>
  )
}

export default InputField