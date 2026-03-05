// FormItem.js
import React, { useContext, useEffect } from "react";
import { FormContext } from "./FormContext";

const FormItem = ({
  children,
  name,
  label,
  rules = [],
  required = false,
  className = "",
  ...props
}) => {
  const form = useContext(FormContext);

  if (!form) {
    throw new Error("Form.Item must be used within Form component");
  }

  // Add required rule if required prop is true
  const allRules = required
    ? [...rules, { required: true, message: `${label} là bắt buộc` }]
    : rules;

  // Register field với form
  useEffect(() => {
    if (name) {
      form.registerField(name, allRules);
    }
  }, [name, allRules]);

  const error = form.errors[name];
  const touched = form.touched[name];
  const value = form.formData[name] || "";

  const childProps = {
    value,
    onChange: (e) => {
      const newValue = e.target ? e.target.value : e;
      form.setFieldValue(name, newValue);

      // Validate on change
      if (allRules.length > 0) {
        const errorMessage = form.validateField(name, newValue, allRules);
        if (errorMessage) {
          form.setErrors((prev) => ({ ...prev, [name]: errorMessage }));
        }
      }
    },
    onBlur: () => {
      form.setFieldTouched(name);
      // Validate on blur
      if (allRules.length > 0) {
        const errorMessage = form.validateField(name, value, allRules);
        if (errorMessage) {
          form.setErrors((prev) => ({ ...prev, [name]: errorMessage }));
        }
      }
    },
    status: error && touched ? "error" : "",
  };

  // Clone children and inject props
  const child = React.Children.only(children);
  const enhancedChild = React.cloneElement(child, childProps);

  const itemClassName = `form-item ${
    error && touched ? "form-item-has-error" : ""
  } ${className}`;

  return (
    <div className={itemClassName} {...props}>
      {label && (
        <label className="form-item-label">
          {label}
          {required && <span className="form-item-required">*</span>}
        </label>
      )}
      <div className="form-item-control">
        {enhancedChild}
        {error && touched && <div className="form-item-error">{error}</div>}
      </div>
    </div>
  );
};

export default FormItem;
