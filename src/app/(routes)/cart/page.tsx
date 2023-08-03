import ProductCart from "@/Components/ProductCart";

const getCartData = async () => {

    const res = await fetch(`http://localhost:3000/api/getcart`, { cache: "no-store" });

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
                <ProductCart item={data} />
            </div>
        </>
    )
};

export default Cart;