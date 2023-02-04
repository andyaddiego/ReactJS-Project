const generateOrderObject = ({
    name = "", 
    email = "", 
    phone = "", 
    cart = [], 
    total = 0
}) => {

    return {
        buyer: {
            name: name,
            email: email,
            phone: phone,
        },
        items: cart,
        total: total,
        createdAt: new Date().toLocaleString()
    }
}

export default generateOrderObject;