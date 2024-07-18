import React, { useEffect, useRef, useState } from "react";
import "datatables.net-dt";
import "datatables.net-responsive-dt";
import $ from "jquery";
import { Link } from "react-router-dom";
import { FaEdit,FaTrash } from "react-icons/fa";
import award from "../../../assets/award.png";
import SchoolTrainingEdit from "./SchoolTrainingEdit";
import SchoolTrainingAdd from "./SchoolTrainingAdd";

const AdminSchoolTraining = () => {
  const tableRef = useRef(null);

  // Example data structure
  const [datas, setDatas] = useState([
    {
      id: 1,
      img: award,
      content: "ITOL Effective Events Planning and Management (2023)",
    },
    {
      id: 2,
      img: award,
      content: "ITOL Effective Events Planning and Management (2023)",
    },
    {
      id: 3,
      img: award,
      content: "ITOL Effective Events Planning and Management (2023)",
    },
    {
      id: 4,
      img: award,
      content: "ITOL Effective Events Planning and Management (2023)",
    },
    {
      id: 5,
      img: award,
      content: "ITOL Effective Events Planning and Management (2023)",
    },
  ]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!loading) {
      initializeDataTable();
    }
    return () => {
      destroyDataTable();
    };
  }, [loading]);

  const initializeDataTable = () => {
    if ($.fn.DataTable.isDataTable(tableRef.current)) {
      return;
    }
    $(tableRef.current).DataTable({
      responsive: true,
    });
  };

  const destroyDataTable = () => {
    const table = $(tableRef.current).DataTable();
    if (table && $.fn.DataTable.isDataTable(tableRef.current)) {
      table.destroy();
    }
  };

  return (
    <div className="container">
      <div className="my-3 d-flex justify-content-end">
      <SchoolTrainingAdd />
      </div>
      {loading ? (
        <div className="loader-container">
          <div className="loading">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      ) : (
        <table ref={tableRef} className="display">
          <thead>
            <tr>
              <th scope="col">S No</th>
              <th scope="col">Image</th>
              <th scope="col">Content</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {datas.map((data, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>
                  <img
                    src={data.img}
                    alt="award"
                    style={{ width: "50px", height: "50px" }}
                  />
                </td>
                <td>{data.content}</td>
                <td className="d-flex">
                 <SchoolTrainingEdit />
                  <Link to={`/certification/edit/${data.id}`}>
                    <button className="btn btn-sm">
                      <FaTrash />
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AdminSchoolTraining;
