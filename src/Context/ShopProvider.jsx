import { createContext } from 'react'
import  {useState} from 'react'

//Exporto a shop para poder importarlo en el cartwidget.
export const Shop = createContext()
//HOC o high order component:
const ShopProvider = ({children}) => {

    const [products, setProducts] = useState([])

    return (
        <Shop.Provider value = {{products}}>
            {children}
        </Shop.Provider>
    )
}

export default ShopProvider

//A shop provider le pongo un valor, que va a ser el que consuman los otros componentes.
//Es como un cart global que lo van a consumir varios componentes.