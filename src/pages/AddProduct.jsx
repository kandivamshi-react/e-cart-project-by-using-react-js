import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./Pages.css";

const AddProduct = () => {
  const navigate = useNavigate();

  /* ================= LOAD PRODUCTS ================= */
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
    setProducts(storedProducts);
  }, []);

  /* ================= INITIAL VALUES ================= */
  const initialValues = {
    name: "",
    price: "",
    category: "",
    stockStatus: "",
    brand: "",
    quantity: "",
    color: "",
    sku: "",
    image: "",
  };

  /* ================= VALIDATION ================= */
  const validationSchema = Yup.object({
    name: Yup.string()
      .matches(/^[a-zA-Z0-9 ]+$/, "Only alphabets and numbers allowed")
      .required("Product Name is required"),

    price: Yup.number()
      .positive("Must be a positive number")
      .required("Price is required"),

    category: Yup.string().required("Category is required"),

    stockStatus: Yup.string().required("Stock status is required"),

    brand: Yup.string().required("Brand is required"),

    quantity: Yup.number()
      .integer("Must be an integer")
      .positive("Must be greater than 0")
      .required("Quantity is required"),

    color: Yup.string().required("Color is required"),

    sku: Yup.string()
      .required("SKU is required")
      .test("unique-sku", "SKU already exists", function (value) {
        if (!value) return true;
        return !products.some((p) => p.sku === value);
      }),

    // image: Yup.string()
    //   // .url("Must be a valid URL")
    //   // .required("Image URL is required"),
  });

  /* ================= SUBMIT ================= */
  const handleSubmit = (values, { resetForm }) => {
    const newProduct = {
      id: Date.now(),
      category: values.category,
      price: Number(values.price),
      rating: 0,
      discountPercentage: 0,
      stock: Number(values.quantity),
      brand: values.brand,
      sku: values.sku,
      availabilityStatus: values.stockStatus,
      thumbnail: values.image,
    };

    const updatedProducts = [...products, newProduct];

    setProducts(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts));

    resetForm();
    navigate("/products");
  };

  return (
    <>
      <div style={{ margin: "10px", cursor: "pointer" }} onClick={() => navigate("/products")}>
        ⬅ Go Back
      </div>

      <div className="form-container">
        <h2>Add Product</h2>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form className="product-form">
            <div>
              <Field name="name" placeholder="Product Name" />
              <ErrorMessage name="name" component="small" />
            </div>

            <div>
              <Field name="price" type="number" placeholder="Price" />
              <ErrorMessage name="price" component="small" />
            </div>

            <div>
              <Field name="category" placeholder="Category" />
              <ErrorMessage name="category" component="small" />
            </div>

            <div>
              <Field as="select" name="stockStatus">
                <option value="">Stock Status</option>
                <option value="In Stock">In Stock</option>
                <option value="Out of Stock">Out of Stock</option>
                <option value="Low Stock">Low Stock</option>
              </Field>
              <ErrorMessage name="stockStatus" component="small" />
            </div>

            <div>
              <Field name="brand" placeholder="Brand" />
              <ErrorMessage name="brand" component="small" />
            </div>

            <div>
              <Field name="quantity" type="number" placeholder="Quantity" />
              <ErrorMessage name="quantity" component="small" />
            </div>

            <div>
              <Field name="color" placeholder="Color" />
              <ErrorMessage name="color" component="small" />
            </div>

            <div>
              <Field name="sku" placeholder="SKU" />
              <ErrorMessage name="sku" component="small" />
            </div>

            <div className="full-width">
              <Field name="image" placeholder="Image URL" />
              <ErrorMessage name="image" component="small" />
            </div>

            <button type="submit">Add Product</button>
          </Form>
        </Formik>
      </div>
    </>
  );
};

export default AddProduct;
