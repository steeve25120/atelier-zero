import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const CartContext = createContext(null);

const STORAGE_KEY = "atelier-zero-cart";

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => {
    try {
      const savedCart = localStorage.getItem(STORAGE_KEY);

      return savedCart ? JSON.parse(savedCart) : [];
    } catch (error) {
      console.error("Impossible de charger le panier :", error);
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(items)
      );
    } catch (error) {
      console.error(
        "Impossible de sauvegarder le panier :",
        error
      );
    }
  }, [items]);

  const addToCart = (
    product,
    size,
    quantity = 1,
    variant
  ) => {
    if (!product || !variant || !size) {
      console.error(
        "Produit, variante ou taille manquante."
      );
      return;
    }

    const key = `${product.id}-${variant.id}-${size}`;

    setItems((currentItems) => {
      const existingItem = currentItems.find(
        (item) => item.key === key
      );

      if (existingItem) {
        return currentItems.map((item) =>
          item.key === key
            ? {
                ...item,
                quantity: item.quantity + quantity,
              }
            : item
        );
      }

      return [
        ...currentItems,
        {
          key,
          id: product.id,
          slug: product.slug,
          name: product.name,
          price: product.price,
          currency: product.currency,
          variantId: variant.id,
          color: variant.color,
          size,
          image: variant.image,
          quantity,
        },
      ];
    });

    setIsCartOpen(true);
  };

  const removeFromCart = (key) => {
    setItems((currentItems) =>
      currentItems.filter((item) => item.key !== key)
    );
  };

  const updateQuantity = (key, quantity) => {
    if (quantity <= 0) {
      removeFromCart(key);
      return;
    }

    setItems((currentItems) =>
      currentItems.map((item) =>
        item.key === key
          ? {
              ...item,
              quantity,
            }
          : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const total = useMemo(() => {
    return items.reduce(
      (sum, item) =>
        sum + item.price * item.quantity,
      0
    );
  }, [items]);

  const itemCount = useMemo(() => {
    return items.reduce(
      (sum, item) => sum + item.quantity,
      0
    );
  }, [items]);

  return (
    <CartContext.Provider
      value={{
        items,
        total,
        itemCount,
        isCartOpen,
        setIsCartOpen,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error(
      "useCart doit être utilisé dans CartProvider."
    );
  }

  return context;
}