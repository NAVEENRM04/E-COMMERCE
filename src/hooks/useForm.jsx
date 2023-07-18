import { useState } from "react";

const useForm = (validate) => {
  const [values, setValues] = useState({
    Firstname: "",
    Lastname: "",
    email: "",
    password: "",
    mobileNo: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setValues((prevValues) => {
      console.log(value);
      return {
        ...prevValues,
        [name]: value,
      };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(validate(values));
  };
  return { handleChange, values, handleSubmit, errors };
};

export default useForm;
