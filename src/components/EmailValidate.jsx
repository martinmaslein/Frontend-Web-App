import React from 'react';
import { useFormik } from 'formik'

const validate = (values) => {
  const errors = {}

  if (!values.email) {
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  return errors
}

export default function EmailValidate() {
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2))
    },
  })

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Ingrese e-mail de pago"
            className="p-2 text-sm w-full mt-6"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email && (
            <span>{formik.errors.email}</span>
          )}
        </div>
      </form>
      {/* <input type="text" id="email" placeholder="Ingrese e-mail de pago" className="p-2 text-sm w-full" /> */}
    </div>
  );
}