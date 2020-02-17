import React from 'react'
import ShopContext from './productData'
import MainNavigation from '../page/mainavigation'

export default class ProductPage extends React.Component {
    render() {

        console.log(" in shop page ");

        return (
            <ShopContext.Consumer>

                {context => (
                    <React.Fragment>
                        <MainNavigation cartItemNumber={context.cart.reduce((count, curtitem) => {
                            return count + curtitem.quantity
                        }, 0)}></MainNavigation>
                        <main className="products">
                            <ul>
                                {context.product.map(ele => (
                                    <li key={ele.id}>
                                        <div>
                                            <strong>{ele.title}</strong>
                                            ${ele.price}
                                        </div>
                                        <div>
                                            <button onClick={context.addProductToCart.bind(
                                                this, ele
                                            )}>add to cart</button>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </main>


                    </React.Fragment>
                )}
            </ShopContext.Consumer>

        )
    }
}
