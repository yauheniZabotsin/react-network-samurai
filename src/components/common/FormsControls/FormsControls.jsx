import React from "react";
import styles from "./FormsControls.module.css";
import { Field } from "redux-form";

// const FormControl = (Element) => ({ input, meta, ...props }) => {
//   const hasError = meta.touched && meta.error;
//   return (
//     <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
//       {hasError && <span> {meta.error} </span>}
//       <div>
//         <Element {...input} {...props} />
//       </div>
//     </div>
//   );
// };

// export const Textarea = FormControl("textarea");
// export const Input = FormControl("Input");

const FormControl = ({ input, meta: { touched, error }, children }) => {
  const hasError = touched && error;
  return (
    <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
      {hasError && <span>{error}</span>}
      <div>{children}</div>
    </div>
  );
};

export const Textarea = (props) => {
  const { input, meta, child, ...restProps } = props;
  return (
    <FormControl {...props}>
      <textarea {...input} {...restProps} />
    </FormControl>
  );
};

export const Input = (props) => {
  const { input, meta, child, ...restProps } = props;
  return (
    <FormControl {...props}>
      <input {...input} {...restProps} />
    </FormControl>
  );
};
export const createField = (
  placeholder,
  name,
  validators,
  component,
  props = {},
  text = ""
) => (
  <div>
    <Field
      placeholder={placeholder}
      name={name}
      validate={validators}
      component={component}
      {...props}
    />{" "}
    {text}
  </div>
);
