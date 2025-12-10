"use client"
import { Formik, Form, Field, FieldProps } from "formik"
import * as Yup from "yup"
import { Input, Textarea, Button } from "@heroui/react"
import { LuArrowRight } from "react-icons/lu"

interface TestimonialFormValues {
  name: string
  position: string
  message: string
}

const initialValues: TestimonialFormValues = {
  name: "",
  position: "",
  message: "",
}

const schema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  position: Yup.string().required("Position is required"),
  company: Yup.string(),
  message: Yup.string().min(20, "Message must be at least 20 characters").required("Message is required"),
})

const TestimonialForm = () => {
  return (
    <div className="w-full mx-auto py-8 rounded-2xl shadow-sm">
      <h2 className="text-3xl font-semibold text-primary text-center mb-6">Share Your Experience</h2>
      <p className="mb-6 text-sm text-gray-500">
        We’d love to hear your thoughts! Your feedback helps us grow and inspires others to trust our services.
      </p>

      <Formik<TestimonialFormValues>
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={(values, { resetForm }) => {
          console.log("Submitted:", values)
          resetForm()
        }}
      >
        {({ isSubmitting }) => (
          <Form className="space-y-6">
            {/* NAME */}
            <Field name="name">
              {({ field, meta }: FieldProps) => (
                <div>
                  <Input {...field} type="text" size="lg" label="Full Name" variant="bordered" placeholder="eg. Juan Dela Cruz" />
                  {meta.touched && meta.error && <small className="text-red-500">{meta.error}</small>}
                </div>
              )}
            </Field>

            {/* POSITION */}
            <Field name="position">
              {({ field, meta }: FieldProps) => (
                <div>
                  <Input {...field} type="text" size="lg" label="Position" variant="bordered" placeholder="eg. CEO" />
                  {meta.touched && meta.error && <small className="text-red-500">{meta.error}</small>}
                </div>
              )}
            </Field>

            {/* COMPANY */}
            <Field name="company">
              {({ field, meta }: FieldProps) => (
                <div>
                  <Input {...field} type="text" size="lg" label="Company" variant="bordered" placeholder="eg. Google, Netflix, IBM..." />
                  {meta.touched && meta.error && <small className="text-red-500">{meta.error}</small>}
                </div>
              )}
            </Field>

            {/* MESSAGE */}
            <Field name="message">
              {({ field, meta }: FieldProps) => (
                <div>
                  <Textarea {...field} size="lg" label="Message" variant="bordered" placeholder="Write your testimonial here..." />
                  {meta.touched && meta.error && <small className="text-red-500">{meta.error}</small>}
                </div>
              )}
            </Field>

            {/* SUBMIT */}
            <div>
              <Button
                type="submit"
                className="bg-primary text-gray-100"
                size="lg"
                variant="solid"
                endContent={<LuArrowRight />}
                isLoading={isSubmitting}
              >
                Submit Testimonial
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default TestimonialForm
