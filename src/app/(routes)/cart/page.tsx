import ProductCart from "@/Components/ProductCart";
import getDomain from "@/lib/getDomain";

async function getCartData() {

    const domain = getDomain();

    const res = await fetch(`${domain}/api/getcart`, { cache: 'no-store' });

    if (!res.ok) {
        throw new Error("Failed To Fetch Data");
    }

    const result = await res.json();

    return result;

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
            <div className="wrapper">
                <ProductCart
                    item={data}
                />
            </div>
        </>
    )
};

export default Cart;