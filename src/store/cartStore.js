// store/cartStore.js

import { create } from "zustand";

/**
 * Estado global del carrito de compras.
 * Maneja productos agregados, eliminación y actualización de cantidades.
 */
const useCartStore = create((set, get) => ({
    /** @type {Array<Object>} Lista de productos en el carrito */
    cart: [],

    /**
     * Agrega un producto al carrito.
     * Si ya existe, incrementa su cantidad.
     * @param {Object} product - Producto a agregar (debe tener `id`)
     */
    addToCart: (product) => {
        const { cart } = get();
        const existingProduct = cart.find((item) => item.id === product.id);

        if (existingProduct) {
            set({
                cart: cart.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                ),
            });
        } else {
            set({ cart: [...cart, { ...product, quantity: 1 }] });
        }
    },

    /**
     * Elimina o reduce la cantidad de un producto del carrito.
     * Si la cantidad llega a 0, lo elimina completamente.
     * @param {number|string} productId - ID del producto a eliminar
     */
    removeFromCart: (productId) => {
        const { cart } = get();
        const updatedCart = cart.map((item) =>
            item.id === productId
                ? { ...item, quantity: item.quantity - 1 }
                : item
        );
        set({ cart: updatedCart.filter((item) => item.quantity > 0) });
    },

    /**
     * Limpia completamente el carrito.
     */
    clearCart: () => set({ cart: [] }),
}));

export default useCartStore;