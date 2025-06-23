import { useEffect, useCallback } from "react";
import { useCart } from "@/hooks/useCart";
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface CheckoutCardProps {
  onClose: () => void;
}

const CheckoutCard = ({ onClose }: CheckoutCardProps) => {
  const navigate = useNavigate();
  const { cartItems, cartTotal, cartCount, updateQuantity, clearCart } = useCart();

  const handleEsc = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [handleEsc]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-end bg-black/70 bg-opacity-40 pt-24 pr-4 sm:pt-28 sm:pr-8 md:pt-32 md:pr-16 lg:pr-36"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-white rounded-xl shadow-2xl w-[90%] sm:w-[400px] p-6 sm:p-8 relative">
        <button
          className="absolute top-2 right-7 text-neutral-400 hover:text-primary-orangeish text-2xl font-bold cursor-pointer"
          onClick={onClose}
          aria-label="Close cart"
        >
          <X size={20} />
        </button>

        {cartItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16">
            <svg
              width="64"
              height="64"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="mb-4 text-neutral-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9m13-9l2 9m-5-9V6a2 2 0 10-4 0v3"
              />
            </svg>
            <div className="text-neutral-400 text-lg font-medium">Your cart is empty</div>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-between mb-8">
              <span className="font-bold text-lg tracking-widest">CART ({cartCount})</span>
              <button
                className="text-neutral-400 cursor-pointer underline hover:text-primary-orangeish font-medium text-sm"
                onClick={clearCart}
              >
                Remove All
              </button>
            </div>

            <div className="flex flex-col gap-6 mb-8">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <div className="font-bold text-sm md:text-base leading-tight">{item.name}</div>
                    <div className="text-neutral-400 font-medium text-sm">
                      $ {item.price.toLocaleString()}
                    </div>
                  </div>
                  <div className="flex items-center bg-neutral-100 rounded">
                    <button
                      className="w-8 h-8 flex items-center justify-center text-neutral-400 text-lg font-bold hover:text-primary-orangeish cursor-pointer"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      aria-label="Decrease quantity"
                      disabled={item.quantity <= 1}
                    >
                      -
                    </button>
                    <span className="w-8 text-center font-semibold select-none">
                      {item.quantity}
                    </span>
                    <button
                      className="w-8 h-8 flex items-center justify-center text-neutral-400 text-lg font-bold hover:text-primary-orangeish cursor-pointer"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between mb-8">
              <span className="text-neutral-400 font-medium tracking-widest">TOTAL</span>
              <span className="font-bold text-xl">$ {cartTotal.toLocaleString()}</span>
            </div>

            <button
              onClick={() => {
                onClose();
                navigate("/checkout");
              }}
              className="w-full whitespace-nowrap bg-primary-orangeish hover:bg-primary-orangeish/80 text-white font-bold uppercase tracking-widest py-4 rounded transition-colors duration-150 cursor-pointer"
            >
              CHECKOUT
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default CheckoutCard;
