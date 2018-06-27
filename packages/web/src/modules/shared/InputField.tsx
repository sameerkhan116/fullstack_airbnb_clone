import * as React from "react";
import { FieldProps } from "formik";
import { Form, Input } from "antd";

const FormItem = Form.Item;

export const InputField: React.SFC<
  FieldProps<any> & { prefix: React.ReactNode }
> = ({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors },
  ...props
}) => (
  <FormItem
    help={touched[field.name] && errors[field.name]}
    validateStatus={
      touched[field.name] && errors[field.name] ? "error" : undefined
    }
  >
    <Input {...field} {...props} />
  </FormItem>
);
