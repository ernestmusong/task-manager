/* eslint react/jsx-props-no-spreading: 0 */
import React, { useState } from 'react';
import { useFormik } from 'formik';
import { NavLink, useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import Title from 'components/Title';
import * as Yup from 'yup';

const AddTaskForm = () => {
  const navigate = useNavigate();
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const formik = useFormik({
    initialValues: {
      id: uuidv4(),
      title: '',
      description: '',
      assignees: [],
      color: '',
      image: '',
      status: 'todo',
    },
    validationSchema: Yup.object({
      title: Yup.string().required('Title must not be empty'),
      description: Yup.string()
        .max(200, 'Must be 200 characters or less')
        .required('Description must not be empty'),
      assignees: Yup.array()
        .of(
          Yup.string().url('Must be a valid URL for the image'),
        )
        .min(1, 'At least one assignee must be selected')
        .required('Assignee must not be empty'),
      color: Yup.string().required('Color must not be empty'),
      image: Yup.string(),
      status: Yup.string(),
    }),
    onSubmit: (values) => {
      const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

      // Convert the image file to a data URL
      if (values.image instanceof File) {
        const reader = new FileReader();
        reader.onload = (event) => {
          const updatedValues = { ...values, image: event.target.result };
          tasks.push(updatedValues);
          localStorage.setItem('tasks', JSON.stringify(tasks));
          setSuccess(true);
          setMessage('Task added Successfully!');
          navigate('/');
        };
        reader.readAsDataURL(values.image);
      } else {
        // If the image is already a URL or not provided, proceed as usual
        tasks.push(values);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        setSuccess(true);
        setMessage('Task added Successfully!');
        navigate('/');
      }
    },
  });

  return (
    <main className="main">
      <Title title="Add Task" />
      <div className="task-form">
        <form
          className="register-form"
          onSubmit={formik.handleSubmit}
        >
          <label style={{ color: 'Var(--darkBlue)' }} htmlFor="title">
            Title
            <input
              type="text"
              className="form-control"
              placeholder="Enter your title"
              id="title"
              name="title"
              value={formik.values.title}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </label>
          {formik.touched.title && formik.errors.title ? (
            <div className="for-error">
              <span className="error-message" aria-live="polite">
                {formik.errors.title}
              </span>
            </div>
          ) : null}

          <label style={{ color: 'Var(--darkBlue)' }} htmlFor="description">
            Description
            <textarea
              className="form-control"
              placeholder="Description"
              id="description"
              name="description"
              value={formik.values.description}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </label>
          {formik.touched.description && formik.errors.description ? (
            <div className="for-error">
              <span className="error-message" aria-live="polite">
                {formik.errors.description}
              </span>

            </div>
          ) : null}

          <label style={{ color: 'Var(--darkBlue)' }} htmlFor="assignees" className="form-label">
            Assignees
            <select
              className="add-form-select"
              name="assignees"
              id="assignees"
              multiple
              onChange={(e) => formik.setFieldValue('assignees', Array.from(e.target.selectedOptions, (option) => option.value))}
              value={formik.values.assignees}
            >
              {/* <option className="text-muted" value="">
                      Assignees
                    </option> */}
              <option value="https://tse1.mm.bing.net/th?id=OIP.VAuEzdfI8cRI28R8U0s2zwHaFj&pid=Api&P=0&h=220">
                Musong
              </option>
              <option value="https://tse1.mm.bing.net/th?id=OIP.VAuEzdfI8cRI28R8U0s2zwHaFj&pid=Api&P=0&h=220">
                Ernest
              </option>
              <option value="https://tse1.mm.bing.net/th?id=OIP.VAuEzdfI8cRI28R8U0s2zwHaFj&pid=Api&P=0&h=220">
                Akeh
              </option>
            </select>
          </label>
          {formik.touched.assignees && formik.errors.assignees ? (
            <div className="for-error">
              <span className="error-message" aria-live="polite">
                {formik.errors.assignees}
              </span>
            </div>
          ) : null}

          <label style={{ color: 'Var(--darkBlue)' }} htmlFor="color">
            Color
            <select
              className="add-form-select"
              name="color"
              id="color"
              {...formik.getFieldProps('color')}
            >
              <option value="red">Red</option>
              <option value="green">Green</option>
              <option value="orange">Orange</option>

            </select>
          </label>
          {formik.touched.color && formik.errors.color ? (
            <div className="for-error">
              <span className="error-message" aria-live="polite">
                {formik.errors.color}
              </span>

            </div>
          ) : null}

          <label style={{ color: 'Var(--darkBlue)' }} htmlFor="image">
            Image
            <input
              id="image"
              type="file"
              className="form-control"
              name="image"
              onChange={(e) => {
                const file = e.target.files[0];
                formik.setFieldValue('image', file);
                setSelectedImage(URL.createObjectURL(file)); // Display a preview
              }}
              onBlur={formik.handleBlur}
            />
          </label>
          {formik.touched.image && formik.errors.image ? (
            <div className="for-error">
              <span className="error-message" aria-live="polite">
                {formik.errors.image}
              </span>
            </div>
          ) : null}
          {selectedImage && (
          <div>
            <p>Image Preview:</p>
            <img src={selectedImage} alt="Preview" style={{ maxWidth: '100%', maxHeight: '200px' }} />
          </div>
          )}

          <div className=" mt-4 mb-4">
            <div className="form-group col-lg-3">
              <button type="submit" className="btn w-100 btn-block">submit</button>
            </div>
          </div>

          {message && (
          <div className="form-group">
            <div
              className={
                  success
                    ? 'alert alert-success bg-white text-success text-center'
                    : 'alert alert-danger text-center text-danger'
                }
              role="alert"
            >
              {success ? message : 'Something went wrong!'}
            </div>
          </div>
          )}
          <NavLink to="/" className="session-link">Go back</NavLink>
        </form>
      </div>
    </main>
  );
};

export default AddTaskForm;
