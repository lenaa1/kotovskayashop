import "./cartItem.css";
import mock from "./../../../assets/mock2.jpg";
import delete1 from "./../../../assets/delete.svg";
import { useCartState } from "../../../entities/productCard/productCard";

export function CartItem(props: any) {
  const { cart, deleteProduct, incrementById, decrementById, setNewProduct } =
    useCartState();
  return (
    <div>
      <div className="cartitem__area">
        <div className="center">
          <img className="cartitem__area__photo" src={props.photo} alt="" />
        </div>
        <div className="cartitem__name">
          <p>{props.name}</p>
          <div>{props.price}</div>
        </div>
        <div className="cartitem__quantity">
          <div className="cartitem__quantity__buttons">
            <button
              className="cartitem__quantity__button"
              onClick={() => {
                console.log("state");
                if (cart[props.id].quantity === 1) {
                  deleteProduct({
                    name: props.name,
                    price: props.price,
                    quantity: 0,
                    id: props.id,
                    image: props.image,
                  });
                }
                decrementById(props.id);
              }}
            >
              -
            </button>
            <div className="cartitem__quantity">{cart[props.id]?.quantity}</div>
            <button
              className="cartitem__quantity__button"
              onClick={() => {
                // setNewProduct({
                //   name: props.name,
                //   quantity: 0,
                //   id: props.id,
                //   image: `http://95.182.121.35:8080/images/${props.id}`,
                //   price: props.price / 100,
                // });
                incrementById(props.id);
              }}
            >
              +
            </button>
          </div>
        </div>
        <div className="cartitem__delete__area">
          <img className="cartitem__delete" src={delete1} alt="" />
        </div>
      </div>
    </div>
  );
}
