// Form.js
import React from "react";
import { FormContext } from "./FormContext";

const Form = ({
  children,
  form,
  onFinish,
  onFinishFailed,
  layout = "vertical",
  className = "",
  ...props
}) => {
  // Sử dụng form instance từ prop hoặc tạo mới
  // KHÔNG gọi useForm() conditionally
  const formInstance = form;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formInstance) {
      console.error("Form instance is required");
      return;
    }

    const { isValid, errors } = formInstance.validateForm();

    if (isValid) {
      onFinish?.(formInstance.formData);
    } else {
      onFinishFailed?.(errors);
    }
  };

  const formClassName = `custom-form custom-form-${layout} ${className}`;

  return (
    <FormContext.Provider value={formInstance}>
      <form className={formClassName} onSubmit={handleSubmit} {...props}>
        {children}
      </form>
    </FormContext.Provider>
  );
};

export default Form;
