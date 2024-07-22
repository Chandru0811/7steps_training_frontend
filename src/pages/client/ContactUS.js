import React from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { SlLocationPin } from "react-icons/sl";
import { IoCallOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";

const validationSchema = Yup.object({
  name: Yup.string().required("*Name is required"),
  email: Yup.string()
    .email("*Invalid email address")
    .required("*Email is required"),
  message: Yup.string().required("*Message is required"),
});

function ContactUS() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <section className="contactUs">
      <div className="card m-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-12">
              <div className="mt-5">
                <h1 style={{ color: "#F6C00B" }}>Get in touch</h1>
                <p>We are here for you! How can we help?</p>
              </div>
              <div className="row mt-5">
                <form onSubmit={formik.handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input
                      type="text"
                      className={`form-control ${formik.touched.name && formik.errors.name
                          ? "is-invalid"
                          : ""
                        }`}
                      {...formik.getFieldProps("name")}
                    />
                    {formik.touched.name && formik.errors.name && (
                      <div className="invalid-feedback">
                        {formik.errors.name}
                      </div>
                    )}
                  </div>
                  <div className="mb-3">
                    <label className="form-label fw-semibold">
                      Email address
                    </label>
                    <input
                      type="email"
                      className={`form-control ${formik.touched.email && formik.errors.email
                          ? "is-invalid"
                          : ""
                        }`}
                      {...formik.getFieldProps("email")}
                    />
                    {formik.touched.email && formik.errors.email && (
                      <div className="invalid-feedback">
                        {formik.errors.email}
                      </div>
                    )}
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Message</label>
                    <textarea
                      rows={5}
                      className="form-control"
                      {...formik.getFieldProps("message")}
                    />
                  </div>
                  <div className="mb-3">
                    <button type="submit" className="btn contactBtn">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="card mt-5">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.597764489138!2d80.25717047359075!3d13.061256012909292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526615d71d8163%3A0x234b611e7d1f61ea!2sShakti%20Towers%2C%20Sakthi%20Tower%20Ln%2C%20Anna%20Salai%2C%20Thousand%20Lights%2C%20Chennai%2C%20Tamil%20Nadu%20600002!5e0!3m2!1sen!2sin!4v1717675377721!5m2!1sen!2sin"
                  width="100%"
                  height="450"
                  style={{ borderRadius: "5px" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="row mt-3">
                <div className="col-10">
                  <p>
                    <SlLocationPin size={20} color="#7C2C83" /> The Alexiar,237
                    Alexandra Road,#04-10,Singapore-159929.
                  </p>

                  <p>
                    <IoCallOutline size={20} color="#7C2C83" /> (+65) 90214952
                  </p>

                  <p>
                    <CiMail size={20} color="#7C2C83" />{" "}
                    7Stepscoach.sg@gmail.com{" "}
                  </p>
                </div>
                <div className="col-2">
                  <div className="d-flex flex-column justify-content-end align-items-end">
                    <div
                      className="card p-2 mb-3 iconBg"
                    >
                      <div>
                        <a
                          href="https://www.facebook.com/profile.php?id=100076189750922&mibextid=9R9pX"
                          target="_blank"
                        >
                          <p className="card socialMedia-card p-2 mb-2">
                            <FaFacebookF />
                          </p>
                        </a>
                      </div>
                      <div>
                        <a
                          href="https://instagram.com/7stepscoach?utm_source=qr&igshid=MzNlNGNkZWQ4M"
                          target="_blank"
                        >
                          <p className="card socialMedia-card p-2 mb-2">
                            <FaInstagram />
                          </p>
                        </a>
                      </div>
                      <div>
                        <a
                          href="https://www.linkedin.com/in/reihana-abdullah"
                          target="_blank"
                        >
                          <p className="card socialMedia-card p-2 mb-2">
                            <FaLinkedin />
                          </p>
                        </a>
                      </div>
                      <div>
                        <a href="https://www.youtube.com/@fight2fit582" target="_blank">
                          <p className="card socialMedia-card p-2 mb-2">
                            <FaYoutube />
                          </p>
                        </a>
                      </div>
                      <div>
                        <a
                          href="https://www.tiktok.com/@the7stepscoach?_t=8f1ZaezjUhu&_r=1"
                          target="_blank"
                        >
                          <p className="card socialMedia-card p-2 mb-2">
                            <AiFillTikTok />
                          </p>
                        </a>
                      </div>
                      <div>
                        <a href="https://wa.me/6590214952" target="_blank">
                          <p className="card socialMedia-card p-2 mb-2">
                            <FaWhatsapp />
                          </p>
                        </a>
                      </div>
                      <div>
                        <a
                          href="https://www.facebook.com/Meena013?mibextid=ZbWKwL"
                          target="_blank"
                        >
                          <p className="card socialMedia-card p-2 mb-2">
                            <FaFacebookF />
                          </p>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default ContactUS;