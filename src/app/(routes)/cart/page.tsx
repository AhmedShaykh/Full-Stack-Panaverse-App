import ProductCart from "@/Components/ProductCart";

async function getCartData() {

    try {

        const URL = "http://127.0.0.1:3000" || "http://localhost:3000" || "";

        const res = await fetch(`${URL}/api/getcart`, {
            method: "GET",
            next: { revalidate: 2 }
        });

        const result = await res.json();

        return result;

    }
    catch (error) {

        console.log(error);

    }

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