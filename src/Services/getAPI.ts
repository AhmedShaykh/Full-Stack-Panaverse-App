export const getCartData = async () => {

    try {

        const res = await fetch("http://127.0.0.1:3000/api/cart", {
            method: "GET",
            cache: "no-store"
        });

        if (!res.ok) {
            throw new Error("Failed to Fetch the Data")
        };

        const result = await res.json();

        return result;

    }
    catch (error) {

        console.log(error);

    }

};


export const clearData = async () => {

    try {

        const res = await fetch("http://127.0.0.1:3000/api/clearcart", {
            method: "GET",
            cache: "no-store"
        });

        if (!res.ok) {
            throw new Error("Failed to Fetch the Data")
        };

        const result = await res.json();

        console.log("delete");

        return result;

    }
    catch (error) {

        console.log(error);

    }

};