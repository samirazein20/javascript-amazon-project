import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
//import '../data/cart-class.js';
//import '../data/backend-practice.js';
import { loadProducts, loadProductsFetch } from "../data/products.js";
import { loadCart } from "../data/cart.js";

//if we return a value from this function ie return 'value2' this will be converted to resolve (value2)
async function loadPage() {
//it will wait for this line to finish before going to the next line.
//Can only use await inside an async function
  await loadProductsFetch();

  await new Promise((resolve) => {
    loadCart(()=>{
      resolve();
    });
  });

  renderOrderSummary();
  renderPaymentSummary();
}
//await lets us wait for a promise tp finish before going to the next line.

loadPage();

// Promise.all([
//   loadProductsFetch(),
//   new Promise((resolve) => {
//     loadCart(()=>{
//       resolve();
//     });
//   })

// ]).then(() => {
//   renderOrderSummary();
//   renderPaymentSummary();
// });

// new Promise((resolve) => {
//   console.log('Start promise');
//   loadProducts(() => {
//     console.log('Finished loading');
//     resolve();
//   });
// }).then(() => {
//   console.log('Next step!!!');
//   return new Promise((resolve) => {
//     loadCart(()=>{
//       resolve();
//     });
//   });
// }).then(() => {
//   renderOrderSummary();
//   renderPaymentSummary();
// });

// loadProducts(() => {
//   loadCart(() => {
//     renderOrderSummary();
//     renderPaymentSummary();
//   })
// });