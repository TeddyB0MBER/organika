import "./admin.css";
import { useState } from "react";

const Admin = () => {
  const [product, setProduct] = useState({});
  const [allProducts, setAllProducts] = useState([]);

  const saveProduct = () => {
    console.log(product);
    let copy = [...allProducts];
    copy.push(product);
    setAllProducts(copy);
  };
  const productValChange = (Event) => {
    let name = Event.target.name;
    let value = Event.target.value;
    let copy = { ...product };
    copy[name] = value;
    setProduct(copy);
  };

  const [coupon, setCoupon] = useState({});

  const [allCoupons, setAllCoupons] = useState([]);

  const couponValChange = (Event) => {
    let couponName = Event.target.name;
    let couponValue = Event.target.value;
    //  the ... prevents a state from replacing the original and actuablly becoming a copy
    let couponCopy = { ...coupon };
    couponCopy[couponName] = couponValue;
    setCoupon(couponCopy);
  };

  const saveCoupon = () => {
    console.log(coupon);
    let copy = [...allCoupons];
    copy.push(coupon);
    setAllCoupons(copy);
  };

  return (
    <div>
      <h3> Admin Page</h3>
      <div className="flex">
        <div className="container1">
          <div>
            <label className="form-label"> Title</label>
            {/* on blur cataches an input field after yoou leave it and puts it in console log, if instructed to do so */}
            {/* ON change happens for every single change while in the inpit field */}
            <input
              className="my-control"
              name="title"
              onBlur={productValChange}
              type="text"
            ></input>
          </div>
          <div className="my-control">
            <label className="form-label"> Image</label>
            {/* make sure there are no line spaces in the input field when using prettier.  */}
            <input name="image" onBlur={productValChange} type="text"></input>
          </div>
          <div className="my-control">
            <label className="form-label"> Category</label>
            <input
              name="Category"
              onBlur={productValChange}
              type="text"
            ></input>
          </div>
          <div className="my-control">
            <label className="form-label">Price</label>
            <input name="Price" onBlur={productValChange} type="text"></input>
          </div>
          <div>
            <button onClick={saveProduct} className="btn btn-sm btn-dark">
              Save
            </button>
            <hr />
            <h5> Products List</h5>
            <ul>
              {allProducts.map((c) => (
                <li key={c.title}>
                  {/* toFixed plus (amount) are decimals, ParseFloat is a forced conversion of number to string */}
                  {c.title} - {c.image} - ${parseFloat(c.price).toFixed(2)} -{" "}
                  {c.Category}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="container2">
          <div className="my-control">
            <label className="form-label"> Code</label>
            <input name="Code" type="text" onBlur={couponValChange}></input>
          </div>
          <div className="my-control">
            <label className="form-label"> Discount</label>
            <input name="Discount" onBlur={couponValChange} type="text"></input>
          </div>
          <div>
            <button onClick={saveCoupon} className="btn btn-sm btn-dark">
              Save
            </button>
            <hr />
            <h5> Coupon List</h5>
            <ul>
              {allCoupons.map((c) => (
                <li key={c.code}>
                  {c.Code} - {c.Discount}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
