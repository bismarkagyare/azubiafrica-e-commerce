import { Check } from "lucide-react";
import { useCart } from "@/hooks/useCart";
import { useNavigate } from "react-router-dom";
import { Fragment } from "react";

type Props = {
  grandTotal: number;
  onClose: () => void;
};

export default function PaymentConfirmation({ grandTotal, onClose }: Props) {
  const { cartItems, clearCart } = useCart();
  const navigate = useNavigate();

  const first = cartItems[0];
  const rest = cartItems.length - 1;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          clearCart();
          onClose();
          navigate("/");
        }
      }}
    >
      <div className="bg-white w-full max-w-lg rounded-xl p-8 md:p-12">
        <div className="w-16 h-16 rounded-full bg-primary-orangeish flex items-center justify-center mb-8">
          <Check size={32} className="text-white" />
        </div>

        <h2 className="text-2xl md:text-3xl font-bold leading-tight mb-4">
          THANK YOU
          <br />
          FOR YOUR ORDER
        </h2>

        <p className="text-neutral-500 mb-8">
          You will receive an email confirmation shortly.
        </p>

        <div className="rounded-lg overflow-hidden mb-8 flex flex-col md:flex-row">
          <div className="bg-neutral-100 flex-1 p-6">
            {first && (
              <Fragment>
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={first.image}
                    className="w-14 h-14 rounded-md object-cover"
                  />
                  <div className="flex-1">
                    <p className="font-bold">{first.name}</p>
                    <p className="text-sm text-neutral-500">
                      $ {first.price.toLocaleString()}
                    </p>
                  </div>
                  <span className="font-bold">x{first.quantity}</span>
                </div>
                {rest > 0 && (
                  <p className="text-center text-sm text-neutral-500">
                    and {rest} other item{rest > 1 ? "s" : ""}
                  </p>
                )}
              </Fragment>
            )}
          </div>

          <div className="bg-secondary-blackish flex flex-col justify-center p-6 md:w-52">
            <span className="text-sm text-neutral-400">GRAND TOTAL</span>
            <span className="text-lg font-bold text-white">
              $ {grandTotal.toLocaleString()}
            </span>
          </div>
        </div>

        <button
          onClick={() => {
            clearCart();
            onClose();
            navigate("/");
          }}
          className="w-full bg-primary-orangeish hover:bg-primary-orangeish/80 text-white font-bold uppercase tracking-widest py-4 cursor-pointer"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}
