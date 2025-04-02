import { addToCart, cart } from "../../data/cart.js";

describe('test suite: Add to cart', () => {
  it('adds an existing product to the cart', () => {

  });
  it('adds a new product to the cart', () => {
    //creating a mock using spyOn(). this returns an object. The function has what we want getItem to do.
    spyOn(localStorage, 'getItem').and.callFake(() => {
      return JSON.stringify([]);
    });

    console.log(localStorage.getItem('cart'));

    addToCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
    expect(cart.length).toEqual(1);
  });
});