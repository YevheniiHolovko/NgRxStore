import { Product } from "../../services/product.model";
import { CartItem } from "../reducers/cart.reducer";

export function updateCartItems( items: CartItem[], products: Product): CartItem[] {
    const existingItem = items.find(item => item.id === products.id)

    if(existingItem) {
        return items.map(item => 
            item.id === products.id ? {...item, quantyti: item.quantyti + 1} : item
        )
    }
    return [...items, {...products, quantyti: 1}]
}