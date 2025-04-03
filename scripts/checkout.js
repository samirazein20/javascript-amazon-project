import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
//import '../data/cart-class.js';
//import '../data/backend-practice.js';
import { loadProducts } from "../data/products.js";
import { loadCart } from "../data/cart.js";

Promise.all([
  new Promise((resolve) => {
    console.log('Start promise');
    loadProducts(() => {
      console.log('Finished loading');
      resolve();
    });
  }),
  new Promise((resolve) => {
    loadCart(()=>{
      resolve();
    });
  })
  
]).then(() => {
  renderOrderSummary();
  renderPaymentSummary();
});

new Promise((resolve) => {
  console.log('Start promise');
  loadProducts(() => {
    console.log('Finished loading');
    resolve();
  });
}).then(() => {
  console.log('Next step!!!');
  return new Promise((resolve) => {
    loadCart(()=>{
      resolve();
    });
  });
}).then(() => {
  renderOrderSummary();
  renderPaymentSummary();
});

// loadProducts(() => {
//   loadCart(() => {
//     renderOrderSummary();
//     renderPaymentSummary();
//   })
// });