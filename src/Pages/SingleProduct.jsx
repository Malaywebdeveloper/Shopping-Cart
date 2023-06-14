import React, { useEffect, useState } from "react";
import { getSingleProduct } from "../Api/api";
import { useNavigate, useParams } from "react-router-dom";
import "../Style/singleProduct.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useDispatch } from "react-redux";
import { addData } from "../Redux-ToolKit/cart";
import { ColorRing } from "react-loader-spinner";

const SingleProduct = () => {
  const { id } = useParams();
  console.log(id);
  const [singleData, setSingleData] = useState("");
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  const getData = async () => {
    const res = await getSingleProduct(id);
    setSingleData(res?.data);
    setIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  const itemAdd = (singleData) => {
    dispatch(addData(singleData));
    setTimeout(() => {
      navigate("/cart");
    }, 300);
  };

  // console.log(singleData);

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
        <div className="singleProductContainer">
          <div className="singleProductLeftPart">
            <section className="leftPartImg">
              <img src={singleData.image} alt="" />
            </section>
            <section className="leftPartBtn">
              <button className="buttons btn-primary">Buy now</button>
              <button
                className="buttons btn-primary"
                onClick={() => itemAdd(singleData)}
              >
                <ShoppingCartIcon />
              </button>
            </section>
          </div>
          <div className="singleProductRightPart">
            <section>
              <h3>{singleData.title}</h3>
              <p>Price: {singleData.price * 75} ₹</p>
              <p>Ratinig: {singleData.rating?.rate}⭐</p>
              <p>Description:- {singleData.description}</p>
            </section>
          </div>
        </div>
      )}
    </>
  );
};

export default SingleProduct;
