import React from 'react'
import { Formik, Field, Form } from 'formik'
import Button from '@mui/material/Button'

const fieldStyle = 'border mt-2 rounded p-2'

const NewProduct = () => {
  return (
    <div>
      <h1 className="text-2xl">New product</h1>
      <Formik
        initialValues={{
          name: '',
          author: '',
          year: '',
          rating: '',
        }}
        onSubmit={(values) => {
          const { name, author, year, rating } = values
          console.log({
            name,
            author,
            year,
            rating,
          })
        }}
      >
        <Form className="flex flex-col max-w-[300px] mx-auto mt-6">
          <label htmlFor="name" className="mt-2">
            Name:
          </label>
          <Field id="name" name="name" className={fieldStyle} />

          <label htmlFor="author" className="mt-4">
            Author:
          </label>
          <Field id="author" name="author" className={fieldStyle} />

          <label htmlFor="year" className="mt-4">
            Year of publication:
          </label>
          <Field id="year" name="year" className={fieldStyle} />

          <label htmlFor="rating" className="mt-4">
            Rating:
          </label>
          <Field id="rating" name="rating" className={fieldStyle} />

          <button
            type="submit"
            className="border mt-6 w-28 mx-auto rounded p-2"
          >
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  )
}

export default NewProduct
