/* eslint react/jsx-props-no-spreading: 0 */
import React, { useState } from 'react';
import { useFormik } from 'formik';
import { NavLink, useNavigate } from 'react-router-dom';
import Title from 'components/Title';
import * as Yup from 'yup';

const AddTaskForm = () => {
  const tasks = [];
  const navigate = useNavigate();
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState('');
  const formik = useFormik({
    initialValues: {
      title: '',
      description: '',
      assignee: '',
      color: '',
      image: '',
      status: 'todo',
    },
    validationSchema: Yup.object({
      title: Yup.string().required('Title must not be empty'),
      description: Yup.string()
        .max(200, 'Must be 200 characters or less')
        .required('Description must not be empty'),
      assignee: Yup.string()
        .max(50, 'Must be 50 characters or less')
        .required('Assignee must not be empty'),
      color: Yup.string().required('Color must not be empty'),
      image: Yup.string(),
      status: Yup.string(),
    }),
    onSubmit: (values) => {
      tasks.push(values);
      localStorage.setItem('tasks', JSON.stringify(tasks));
      setSuccess(true);
      setMessage('Task added Successfully!');
      navigate('/');
    },
  });

  return (
    <>
      <Title title="Add Task" />
      <div className="signup-component">
        <form
          className="register-form"
          onSubmit={formik.handleSubmit}
        >
          <div>
            <div className="form-row mx-auto">
              <div className="form-group col-lg-3">
                <label style={{ color: 'Var(--softWhite)' }} htmlFor="title">
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
              </div>
              <div className="form-group col-lg-3">
                <label style={{ color: 'Var(--softWhite)' }} htmlFor="description">
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
              </div>
              <div className="form-group col-lg-3">
                <label style={{ color: 'Var(--softWhite)' }} htmlFor="assignee" className="form-label">
                  Assignee
                  <select
                    className="form-control"
                    name="assignee"
                    id="assignee"
                    {...formik.getFieldProps('assignee')}
                  >
                    <option className="text-muted" value="" disabled selected hidden>Assignee</option>
                    <option value="Musong">Musong</option>
                    <option value="Ernest">Ernest</option>
                    <option value="Akeh">Akeh</option>
                  </select>
                </label>
                {formik.touched.assignee && formik.errors.assignee ? (
                  <div className="for-error">
                    <span className="error-message" aria-live="polite">
                      {formik.errors.assignee}
                    </span>

                  </div>
                ) : null}
              </div>
            </div>

            <div className="form-row mx-auto">
              <div className="form-group col-lg-3">
                <label style={{ color: 'Var(--softWhite)' }} htmlFor="color">
                  Color
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your username"
                    id="color"
                    name="color"
                    value={formik.values.color}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </label>
                {formik.touched.color && formik.errors.color ? (
                  <div className="for-error">
                    <span className="error-message" aria-live="polite">
                      {formik.errors.color}
                    </span>

                  </div>
                ) : null}
              </div>
              <div className="form-row mx-auto">
                <div className="form-group col-lg-3">
                  <label style={{ color: 'Var(--softWhite)' }} htmlFor="image">
                    Image
                    <input
                      id="image"
                      type="file"
                      className="form-control"
                      placeholder="Your email"
                      name="image"
                      value={formik.values.image}
                      onChange={formik.handleChange}
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
                </div>
              </div>
            </div>

            <div className="form-row mx-auto mt-4 mb-4">
              <div className="form-group col-lg-3">
                <button type="submit" className="btn w-100 btn-block">submit</button>
              </div>
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
    </>
  );
};

export default AddTaskForm;
