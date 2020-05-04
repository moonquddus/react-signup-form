const validationRules = {
  name: {
    required: true
  },
  role: {
    required: false
  },
  email: {
    required: true,
    invalid: /\S+@\S+\.\S+/
  },
  password: {
    required: true,
    password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{10,}$/ // 10 charcters min, 1 upper & lower letter, 1 number
  }
}

export const validateFields = (fieldsObj) => {
  let errors = {}
  Object.keys(fieldsObj).forEach(field => {
    if (validationRules[field].required && !fieldsObj[field])
      errors[field] = `Please input your ${field}.`
    if (validationRules[field].password && !fieldsObj[field].match(validationRules[field].password))
      errors[field] = `Your ${field} needs to be at least 10 characters and contain 1 lowercase & 1 uppercase character, and 1 number.`
    if (validationRules[field].invalid && !fieldsObj[field].match(validationRules[field].invalid))
      errors[field] = `Your ${field} is invalid.`
  })
  return errors
}