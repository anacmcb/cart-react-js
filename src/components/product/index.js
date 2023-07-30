import { Link } from 'react-router-dom';
import './product.css';

function Products() {
    let cart = [];
    const savedCartData = localStorage.getItem('cartData');
    cart = JSON.parse(savedCartData);

    if (cart == null) {
        cart = [];
    }

    function add(element) {
        const value = element;
        const index = cart.indexOf(value);


        cart.push(value);

        localStorage.setItem('cartData', JSON.stringify(cart));
    }

    function remove(id) {
        const index = cart.indexOf(id);

        if (index !== -1) {
            cart.splice(index, 1);
        }

        localStorage.setItem('cartData', JSON.stringify(cart));
    }

    return (
        <div className="App">
            <Link to={'/cart'}>Cart</Link>
            <div className='container'>
                <div className="card">
                    <div className="card-body">
                        <h1>Primeiro Produto</h1>
                    </div>
                    <div className="card-footer">
                        <button id="first" value="1" onClick={() => add('Primeiro Produto')}>Add to cart</button>
                        <button onClick={() => remove(1)}>x</button>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h1>Segundo Produto</h1>
                    </div>
                    <div className="card-footer">
                        <button id="second" value="2" onClick={() => add('Segundo Produto')}>Add to cart</button>
                        <button onClick={() => remove(2)}>x</button>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h1>Terceiro Produto</h1>
                    </div>
                    <div className="card-footer">
                        <button id="thirsd" value="3" onClick={() => add('Terceiro Produto')}>Add to cart</button>
                        <button onClick={() => remove(3)}>x</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Products;
