import "./CheckoutPage.css";
import "./checkout-header.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { OrderSummary } from "./OrderSummary";
import { PaymentSummery } from "./PaymentSummary";

export function CheckoutPage({ cart ,loadCart}) {
  const [deliveryOptions, setdeliveryOptions] = useState([]);
  const [paymentSummery, setPaymentSummery] = useState(null);

  useEffect(() => {
    const fetchCheckoutData = async () => {
      let response = await axios.get(
        "/api/delivery-options?expand=estimatedDelivaryTime"
      );
      setdeliveryOptions(response.data);
    };
    fetchCheckoutData();
  }, []);
  
  useEffect(()=>{
    const fetchPaymentData = async ()=>{
     let  response = await axios.get("/api/payment-summary");
      setPaymentSummery(response.data);
    };
    fetchPaymentData();
  })

  return (
    <>
      <title>Checkout</title>

      <div className="checkout-header">
        <div className="header-content">
          <div className="checkout-header-left-section">
            <a href="/">
              <img className="logo" src="images/logo.png" />
              <img className="mobile-logo" src="images/mobile-logo.png" />
            </a>
          </div>

          <div className="checkout-header-middle-section">
            Checkout (
            <a className="return-to-home-link" href="/">
              3 items
            </a>
            )
          </div>

          <div className="checkout-header-right-section">
            <img src="images/icons/checkout-lock-icon.png" />
          </div>
        </div>
      </div>

      <div className="checkout-page">
        <div className="page-title">Review your order</div>

        <div className="checkout-grid">
          <OrderSummary cart={cart} deliveryOptions={deliveryOptions} loadCart={loadCart}/>

          <PaymentSummery paymentSummery={paymentSummery} />
        </div>
      </div>
    </>
  );
}
