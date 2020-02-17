import React from 'react';
import CounterComponent from './components/memoz'
import './App.css';
import Movies from './components/movies';
import Mycomponent from './components/suspense'
import ProductPage from './components/product';
import CartPage from './components/cart'
import ShopContext from './components/productData'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends React.Component {

  state = {
    product: [
      { id: '1', title: 'nokia ', price: '89' },
      { id: '2', title: 'samsung ', price: '45' },
      { id: '3', title: 'apple ', price: '56' },
      { id: '4', title: 'oneplus ', price: '67' }
    ],
    cart: []
  }
  addProductToCart = product => {
    console.log('Adding product', product);
    const updatedCart = [...this.state.cart];
    const updatedItemIndex = updatedCart.findIndex(
      item => item.id === product.id
    );

    if (updatedItemIndex < 0) {
      updatedCart.push({ ...product, quantity: 1 });
    } else {
      const updatedItem = {
        ...updatedCart[updatedItemIndex]
      };
      updatedItem.quantity++;
      updatedCart[updatedItemIndex] = updatedItem;
    }
    setTimeout(() => {
      this.setState({ cart: updatedCart });
    }, 1000);

  };
  removeProductFromCart = productId => {
    console.log('Removing product with id: ' + productId);
    const updatedCart = [...this.state.cart];
    const updatedItemIndex = updatedCart.findIndex(
      item => item.id === productId
    );

    const updatedItem = {
      ...updatedCart[updatedItemIndex]
    };
    updatedItem.quantity--;
    if (updatedItem.quantity <= 0) {
      updatedCart.splice(updatedItemIndex, 1);
    } else {
      updatedCart[updatedItemIndex] = updatedItem;
    }
    setTimeout(() => {
      this.setState({ cart: updatedCart });
    }, 1000);

  }
  render() {
    console.log(" app .js fi;e", this.props.children);

    return (

      <ShopContext.Provider value={{
        product: this.state.product,
        cart: this.state.cart,
        addProductToCart: this.addProductToCart,
        removeProductFromCart: this.removeProductFromCart

      }}>
        {this.props.children}
        <div className="App">
          <BrowserRouter>
            <Switch>
              <Route path="/" component={ProductPage} exact />
              <Route path="/cart" component={CartPage} exact />
            </Switch>
          </BrowserRouter>

        </div>
      </ShopContext.Provider>
    )
  }
}


export default App;
