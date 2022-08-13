import React from 'react'
import { useField, ErrorMessage } from "formik"

const InputField = ({ label, ...props }) => {

  const [field, meta] = useField(props);
  // console.log(field, meta);

  return (
    <div className='mb-3'>
      <label htmlFor={field.name}>{label}</label>
      <input className={`form-control shadow-none ${meta.touched && meta.error && 'is-invalid'}`} autoComplete='off' {...field} {...props} />
      <ErrorMessage component="div" className="error" name={field.name} />
    </div>
  )
}

export default InputField