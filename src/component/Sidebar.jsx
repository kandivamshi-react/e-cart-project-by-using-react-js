import React, { useState } from "react";
import "./Sidebar.css";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate()

  const categories = [
    "Beauty",
    "Groceries",
    "Electronics",
    "Meat",
    "Rice",
    "Vegetables",
    "Juice",
    "Fruits",
    "Protein Powder",
    "Soft Drinks",
    "Watch",
    "Vegetables & Fruits",
    "Dairy Products",
    "Beverages",
    "Snacks & Packaged Foods",
    "Bakery & Breads",
    "Frozen Foods",
    "Household Supplies",
    "Personal Care",
  ];

  const handleChangecheckbox = (e, category) => {
    console.log(e.target.checked, category);
  };
  const handleAddproduct = () => {
    navigate("/add-product")
  }

  return (
    <>
      {/* Mobile Toggle Button */}
      <button className="sidebar-toggle" onClick={() => setOpen(!open)}>
        ☰ Categories
      </button>

      <aside className={`sidebar ${open ? "open" : ""}`}>
        <h3>Product Categories</h3>
        <h2 style={{cursor:"pointer"}} onClick={handleAddproduct}>Add Products    +</h2>

        <ul className="sidebar-list">
          {categories.map((item, index) => (
            <li key={index}>
              <input
                type="checkbox"
                onChange={(e) => handleChangecheckbox(e, item)}
              />
              {item}
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
};

export default Sidebar;
