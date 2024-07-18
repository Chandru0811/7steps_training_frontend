import React, { useEffect } from "react";
import { useState } from "react";
import { useFormik } from "formik";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";


function SchoolTrainingAdd() {
  const [show, setShow] = useState(false);
  const [loadIndicator, setLoadIndicator] = useState(false);

  const handleClose = () => {
    setShow(false);
    formik.resetForm();
  };

  const handleShow = () => {
    setShow(true);
  }

  const formik = useFormik({
    initialValues: {
      image: "",
      content: "",
    },
    onSubmit: async (values) => {
    //   setLoadIndicator(true);
      console.log("object",values)
    },
  });
  return (
    <>
      <div className="d-flex justify-content-end">
        <button
          type="button"
          className="btn btn-button btn-sm"
          onClick={handleShow}
        >
          Add <i class="bx bx-plus"></i>
        </button>
      </div>
      <Modal show={show} size="lg" onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title className="headColor">Add School Training</Modal.Title>
        </Modal.Header>
        <form onSubmit={formik.handleSubmit}>
          <Modal.Body>
            <div className="container">
              <div className="row py-4">
                <div className="col-md-6 col-12 mb-2">
                  <label className="form-label">
                    Image
                  </label>
                  <input
                    type="file"
                    className={`form-control  ${
                      formik.touched.image && formik.errors.image
                        ? "is-invalid"
                        : ""
                    }`}
                    {...formik.getFieldProps("image")}
                  />
                  {formik.touched.image && formik.errors.image && (
                    <div className="invalid-feedback">
                      {formik.errors.image}
                    </div>
                  )}
                </div>
                <div className="col-md-6 col-12 mb-2">
                  <label className="form-label">
                    Content
                  </label>
                  <input
                    type="text"
                    className={`form-control  ${
                      formik.touched.content && formik.errors.content
                        ? "is-invalid"
                        : ""
                    }`}
                    {...formik.getFieldProps("content")}
                  />
                  {formik.touched.content && formik.errors.content && (
                    <div className="invalid-feedback">
                      {formik.errors.content}
                    </div>
                  )}
                </div>    
              </div>
            </div>
            <Modal.Footer>
              <Button type="button" variant="secondary" onClick={handleClose} className="btn btn-sm">
                Cancel
              </Button>
              <Button
                type="submit"
                className="btn btn-button btn-sm"
                disabled={loadIndicator}
              >
                {loadIndicator && (
                  <span
                    className="spinner-border spinner-border-sm me-2"
                    aria-hidden="true"
                  ></span>
                )}
                Submit
              </Button>
            </Modal.Footer>
          </Modal.Body>
        </form>
      </Modal>
    </>
  );
}

export default SchoolTrainingAdd;
