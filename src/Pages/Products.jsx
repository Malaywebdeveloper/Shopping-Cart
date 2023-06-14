import React, { useEffect, useState } from "react";
import { getProduct } from "../Api/api";
import "../Style/product.css";
import { Link, useNavigate } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { ColorRing } from "react-loader-spinner";
import { useDispatch } from "react-redux";
import { addData } from "../Redux-ToolKit/cart";

const Products = () => {
  const [productData, setProductData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const getdata = async () => {
    const res = await getProduct();
    setProductData(res?.data);
    setIsLoading(false);
  };

  useEffect(() => {
    getdata();
  }, []);

  // console.log(productData);

  const itemAdd = (item) => {
    dispatch(addData(item));
    setTimeout(() => {
      navigate("/cart");
    }, 300);
  };

  return (
    <>
      {isLoading === true ? (
        <div className="loader">
          <ColorRing
            visible={true}
            height="120"
            width="120"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
          />
        </div>
      ) : (
        <div className="ProductContainer">
          {productData.map((item) => {
            return (
              <div key={item.id} className="card">
                <Link
                  to={`/singleproduct/${item.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <img src={item.image} alt="product image" />
                  <p>{item.title.slice(0, 25)}...</p>
                  <p>Price:-{item.price.toFixed() * 75} ₹</p>
                </Link>
                <button
                  className="btn btn-primary"
                  onClick={() => itemAdd(item)}
                >
                  <ShoppingCartIcon />
                </button>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Products;
