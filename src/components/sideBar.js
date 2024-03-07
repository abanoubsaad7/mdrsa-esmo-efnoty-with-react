import React from "react";
import { NavLink } from "react-router-dom";
const SideBar = () => {
  return (
    <>
      <nav className="sideBar col-lg-2">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink to="/" className="nav-link page">
              <i className="fa-solid fa-user" />
              <span className="none">الصفحة الشخصية</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/user/lectures" className="nav-link page">
              <i className="fa-solid fa-chalkboard" />
              <span className="none">الحصص</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="jgjkgh" className="nav-link page">
              <i className="fa-solid fa-list-check" />
              <span className="none">الحضور والغياب</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/admin/waiting" className="nav-link page">
              <i className="fa-solid fa-user-plus" />
              <span className="none">قائمة الانتظار</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/admin/add-lec" className="nav-link page">
              <i className="fa-solid fa-chalkboard-user" />
              <span className="none">ادارة الحصص</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="kjgh" className="nav-link page">
              <i className="fa-solid fa-file-pen" />
              <span className="none">ادارة الحضور والغياب</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="kjgj" className="nav-link page">
              <i className="fa-solid fa-bullhorn" />
              <span className="none">اخبار المدرسة</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="jgfhgf" className="nav-link page">
              <i className="fa-solid fa-circle-exclamation" />
              <span className="none">عن المدرسة</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <form action="/logOut" method="post">
              <button type="submit" className="nav-link page">
                <i className="fa-solid fa-right-from-bracket" />
                <span className="none">تسجيل الخروج</span>
              </button>
            </form>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default SideBar;
