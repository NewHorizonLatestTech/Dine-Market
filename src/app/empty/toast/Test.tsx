import { toast } from "react-toastify";

export default function Test() {

    const onClick = () => toast('Your Accessories Is Add In Shopping Cart', { position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",})

    return (<button onClick={onClick}> Add To Cart</button>)

}
