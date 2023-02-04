import { db } from "../Firebase/config"
import products from "../Data/products.json"
import { addDoc, collection } from 'firebase/firestore'


const saveFromJSONToFirebase = async () => {
    try {    
        products.forEach(async (product) => {
            const docRef = await addDoc(collection(db, "products"), {
                brand: product.brand,
                category: product.category,
                description: product.description,
                image: product.image,
                name: product.name,
                price: product.price,
                stock: product.stock || 10,
            });
            console.log("Document written with ID: ", docRef.id);
        })
        
    } catch (error) {
        console.log(error)
    }
}

export default saveFromJSONToFirebase;

//La info la saco de la docu de firebase y la adapto a mi prooyecto al igual que en itemlistcontainer.