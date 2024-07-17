import React, { useState } from 'react';
import * as Yup from "yup";
import { useFormik } from "formik";
import { useNavigate, Link } from 'react-router-dom';

const Auth = ({ handleLogin }) => {
    const [activeTab, setActiveTab] = useState('signin')

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="auth-container card my-2">
            <div className="tabs">
                <button
                    className={activeTab === 'signin' ? 'active' : ''}
                    onClick={() => handleTabClick('signin')}
                    style={{ fontSize: "bold" }}
                >
                    Sign In
                </button>
                <button
                    className={activeTab === 'signup' ? 'active' : ''}
                    onClick={() => handleTabClick('signup')}
                >
                    Sign Up
                </button>
            </div>
            <div className="tab-content">
                {activeTab === 'signin' && <SignInForm handleLogin={handleLogin} />}
                {activeTab === 'signup' && <SignUpForm />}
            </div>
        </div>
    );
};

const SignInForm = ({ handleLogin }) => {
    const navigate = useNavigate()

    const validationSchema = Yup.object({
        email: Yup.string()
            .email('* Invalid email address')
            .required('* Email is required'),
        password: Yup.string()
            .min(8, '* Password must be at least 8 characters')
            .required('* Password is required'),
    });

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values, { resetForm }) => {
            handleLogin();
            navigate('/');
            console.log(values); // Log form values
        },
    });
    return (
        <div className="form-container">
            <h2>Sign In</h2>
            <form onSubmit={formik.handleSubmit}>
                <div className="input-group">
                    <label className="form-label fw-semibold">Email address</label>
                    <input
                        type="email"
                        className={`form-control ${formik.touched.email && formik.errors.email
                                ? "is-invalid"
                                : ""
                            }`}
                        placeholder="Enter email"
                        {...formik.getFieldProps("email")}
                    />
                    {formik.touched.email && formik.errors.email && (
                        <div className="invalid-feedback">{formik.errors.email}</div>
                    )}
                </div>
                <div className="input-group">
                    <label className="form-label fw-semibold">Password</label>
                    <input
                        type="password"
                        className={`form-control ${formik.touched.password && formik.errors.password
                                ? "is-invalid"
                                : ""
                            }`}
                        placeholder="Enter password"
                        {...formik.getFieldProps("password")}
                    />
                    {formik.touched.password && formik.errors.password && (
                        <div className="invalid-feedback">{formik.errors.password}</div>
                    )}
                    <Link to='/forgotpassword' className='mt-2'>Forgot Password?</Link>
                </div>
                <button type="submit" className="btn auth-button">Sign In</button>
            </form>
        </div>
    );
};

const SignUpForm = () => {
    const validationSchema = Yup.object({
        name: Yup.string().required('* Name is required'),
        email: Yup.string()
            .email('* Invalid email address')
            .required('* Email is required'),
        password: Yup.string()
            .min(8, '* Password must be at least 8 characters')
            .required('* Password is required'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], '* Passwords must match')
            .required('* Confirm Password is required'),
        terms: Yup.bool()
            .oneOf([true], '* You must accept the terms and conditions')
            .required('* You must accept the terms and conditions'),
    });

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
            terms: false,
        },
        validationSchema: validationSchema,
        onSubmit: (values, { resetForm }) => {
            console.log(values); // Log form values
            resetForm(); // Reset form after successful submission
        },
    });
    return (
        <div className="form-container">
            <h2>Sign Up</h2>
            <form>
                <div className="input-group">
                    <label className="form-label fw-semibold">Name</label>
                    <input
                        type="text"
                        className={`form-control ${formik.touched.name && formik.errors.name
                                ? "is-invalid"
                                : ""
                            }`}
                        placeholder="Enter name"
                        {...formik.getFieldProps("name")}
                    />
                    {formik.touched.name && formik.errors.name && (
                        <div className="invalid-feedback">{formik.errors.name}</div>
                    )}
                </div>
                <div className="input-group">
                    <label className="form-label fw-semibold">Email Address</label>
                    <input
                        type="email"
                        className={`form-control ${formik.touched.email && formik.errors.email
                                ? "is-invalid"
                                : ""
                            }`}
                        placeholder="Enter email"
                        {...formik.getFieldProps("email")}
                    />
                    {formik.touched.email && formik.errors.email && (
                        <div className="invalid-feedback">{formik.errors.email}</div>
                    )}
                </div>
                <div className="input-group">
                    <label className="form-label fw-semibold">Password</label>
                    <input
                        type="password"
                        className={`form-control ${formik.touched.password && formik.errors.password
                                ? "is-invalid"
                                : ""
                            }`}
                        placeholder="Enter password"
                        {...formik.getFieldProps("password")}
                    />
                    {formik.touched.password && formik.errors.password && (
                        <div className="invalid-feedback">{formik.errors.password}</div>
                    )}
                </div>
                <div className="input-group">
                    <label className="form-label fw-semibold">Confirm Password</label>
                    <input
                        type="password"
                        className={`form-control ${formik.touched.confirmPassword && formik.errors.confirmPassword
                                ? "is-invalid"
                                : ""
                            }`}
                        placeholder="Enter confirmPassword"
                        {...formik.getFieldProps("confirmPassword")}
                    />
                    {formik.touched.confirmPassword && formik.errors.confirmPassword && (
                        <div className="invalid-feedback">{formik.errors.confirmPassword}</div>
                    )}
                </div>
                <div className="input-group d-flex">
                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                    <span>
                        I agree to the <a href="#">Terms of Condition</a> and <a href="#">Privacy Policy</a>
                    </span>
                </div>
                <button type="submit" onClick={formik.handleSubmit} className="btn auth-button">Sign Up</button>
            </form>
        </div>
    );
};

export default Auth;
