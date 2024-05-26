import { useAppSelector } from "../../hooks/redux";
import { getCart } from "../../redux/cartSlice";
import Image from 'next/image';

interface Product {
  id: number;
  image: string;
  name: string;
  price: number;
}

const Cart = () => {
  const cart: Product[] = useAppSelector(getCart);

  return (
    <div>
      <h1 className="flex justify-center">Cart</h1>
      {cart.map((product) => (
        <div key={product.id} className="product-card">
          <Image src={product.image} alt={product.name} className="product-image" />
          <h2>{product.name}</h2>
          <p>${product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Cart;