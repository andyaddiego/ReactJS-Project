import { createContext } from 'react'
import  {useState} from 'react'

//Exporto a shop para poder importarlo en el cartwidget.
export const Shop = createContext()
//HOC o high order component:
const ShopProvider = ({children}) => {

    const [products, setProducts] = useState([])

    const addProduct = (product) => {
        //Para que se sumen si están repetidos en vez de reemplazarse.
        const isInCart = isProductInCart(product.id);
        if (isInCart) {
            //Encontrar el producto repetido.
            const productoPepetido = products.find(element => element.id === product.id)
            //Sumarle la cantidad de lo agregado.
            productoPepetido.quantity += product.quantity
            setProducts([...products, product])
        }else {
            setProducts([...products, product])
        }
    }

    const countCart = () => {
        let cantidadTotal = 0;
        for (const product of products) {
            cantidadTotal += product.quantity
        }
        return cantidadTotal
    }

    const isProductInCart = (id) => {
        return products.some(product => product.id === id)
    }

    const removeProduct = (id) => {
        const productsFiltered = products.filter(product => product.id !== id);
        setProducts(productsFiltered)
    }

    const clearCart = () => {
        setProducts([])
        return products
    }

    return (
        <Shop.Provider value = {{products, addProduct, countCart, removeProduct, clearCart}}>
            {children}
        </Shop.Provider>
    )
}

export default ShopProvider

//A shop provider le pongo un valor, que va a ser el que consuman los otros componentes.
//Es como un cart global que lo van a consumir varios componentes.
//Const addProduct uso spread operator para q me traiga lo que habia previamente en products mas el producto nuevo que viene por parametro.
//Con spread operator hago una copia, no puedo usar push...
//CountCart lo puedo hacer con un reduce también.
//Products.some, tira una condición de true or false dependiendo si se cumple o no.