import { describe, it, expect, beforeEach, vi, afterEach } from "vitest";
import { act } from "react-dom/test-utils"; // Asegura sincronización del estado
import useCartStore from "../cartStore";

// 🧪 Producto simulado para pruebas
const mockProduct = {
    id: 101,
    title: "Camiseta Negra",
    price: 29.9,
};

describe("🛒 cartStore (Zustand)", () => {
    beforeEach(() => {
        // 🔁 Limpia el estado antes de cada prueba
        useCartStore.getState().clearCart();
    });

    afterEach(() => {
        vi.clearAllMocks();
    });

    it("✅ agrega un producto al carrito", () => {
        const store = useCartStore.getState();

        act(() => {
            store.addToCart(mockProduct);
        });

        const cart = store.cart;
        expect(cart).toHaveLength(1);
        expect(cart[0]).toMatchObject({
            id: 101,
            title: "Camiseta Negra",
            price: 29.9,
            quantity: 1,
        });
    });

    it("✅ incrementa cantidad si el producto ya existe", () => {
        const store = useCartStore.getState();

        act(() => {
            store.addToCart(mockProduct);
            store.addToCart(mockProduct);
        });

        const cart = store.cart;
        expect(cart).toHaveLength(1);
        expect(cart[0].quantity).toBe(2);
    });

    it("✅ reduce cantidad con removeFromCart", () => {
        const store = useCartStore.getState();

        act(() => {
            store.addToCart(mockProduct);
            store.addToCart(mockProduct); // cantidad: 2
            store.removeFromCart(101);    // cantidad: 1
        });

        const cart = store.cart;
        expect(cart).toHaveLength(1);
        expect(cart[0].quantity).toBe(1);
    });

    it("✅ elimina producto si cantidad llega a 0", () => {
        const store = useCartStore.getState();

        act(() => {
            store.addToCart(mockProduct);     // cantidad: 1
            store.removeFromCart(mockProduct.id); // cantidad: 0 → eliminado
        });

        const cart = store.cart;
        expect(cart).toHaveLength(0);
    });

    it("✅ limpia completamente el carrito", () => {
        const store = useCartStore.getState();

        act(() => {
            store.addToCart(mockProduct);
            store.clearCart();
        });

        expect(store.cart).toEqual([]);
    });
});