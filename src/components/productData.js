
import React from 'react'
export const themes = {
  light: {
    foreground: '#000000',
    background: '#eeeeee',
  },
  dark: {
    foreground: '#ffffff',
    background: '#222222',
  },
};

export default React.createContext(
  {
    product: [
      { id: '1', title: 'nokia ', price: '89' },
      { id: '2', title: 'samsung ', price: '45' },
      { id: '3', title: 'apple ', price: '56' },
      {        id: '4', title: 'oneplus ', price: '67'      }
    ],
    cart: [],
    addProductToCart: product => { },
    removeProductFromCart: productId => { }
  }
  // default value

);