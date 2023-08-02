import ProductCart from "@/Components/ProductCart";
import { client } from "@/lib/sanityClient";

const getCartData = async () => {

    const res = await fetch(`http://localhost:3000/api/getcart`, { cache: "no-store" });

    const result = await res.json();

    return result;

};

const getProductByData = async (id: any) => {

    const res = await client.fetch(`
      *[_type == "product" && _id == '${id}'][0] {
        title,
        image,
        price,
        dresstype -> {
          name
        }
      }
    `);

    return res;

};

const getDataInCart = async (data: any) => {

    const cartData: any[] = await getProductByData(data.product_id);

    console.log(cartData)

    return (
        <div className="wrapper">
            {/* <ProductCart /> */}
        </div>
    )
};

const Cart = async () => {

    const data: any = await getCartData();

    if (data?.res == 0) {
        return (
            <div className="wrapper flex justify-center items-center">
                <h1 className="text-4xl md:text-5xl font-extrabold leading-[3rem]">
                    Empty Cart
                </h1>
            </div>
        );
    }

    return (
        <>
            {data?.res.map((data: any) => {
                { getDataInCart(data) }
            })}
        </>
    )
};

export default Cart;