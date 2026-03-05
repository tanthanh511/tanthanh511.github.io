// FormContext.js
import { useState, createContext } from "react";

export const FormContext = createContext();

export const useForm = () => {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [fields, setFields] = useState({}); // Lưu thông tin các field

  const registerField = (name, rules = []) => {
    setFields((prev) => ({ ...prev, [name]: { rules } }));
  };

  const setFieldValue = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const setFieldTouched = (name) => {
    setTouched((prev) => ({ ...prev, [name]: true }));
  };

  const validateField = (name, value, rules = []) => {
    for (let rule of rules) {
      if (rule.required && (!value || value.toString().trim() === "")) {
        return rule.message || `Field is required`;
      }
      if (rule.pattern && value && !rule.pattern.test(value)) {
        return rule.message || `Field is invalid`;
      }
      if (rule.min && value && value.length < rule.min) {
        return rule.message || `Must be at least ${rule.min} characters`;
      }
      if (rule.max && value && value.length > rule.max) {
        return rule.message || `Cannot exceed ${rule.max} characters`;
      }
    }
    return "";
  };

  const validateForm = () => {
    const newErrors = {};
    let isValid = true;

    // Validate all registered fields
    Object.keys(fields).forEach((name) => {
      const field = fields[name];
      const value = formData[name];
      const error = validateField(name, value, field.rules);

      if (error) {
        newErrors[name] = error;
        isValid = false;
      }
    });

    setErrors(newErrors);
    return { isValid, errors: newErrors };
  };

  const getFieldValue = (name) => {
    return formData[name];
  };

  const getFieldsValue = () => {
    return { ...formData };
  };

  const setFieldsValue = (values) => {
    setFormData((prev) => ({ ...prev, ...values }));
  };

  const resetFields = () => {
    setFormData({});
    setErrors({});
    setTouched({});
  };

  return {
    formData,
    errors,
    touched,
    fields,
    registerField,
    setFieldValue,
    setFieldTouched,
    validateField,
    validateForm,
    setErrors,
    getFieldValue,
    getFieldsValue,
    setFieldsValue,
    resetFields,
  };
};
