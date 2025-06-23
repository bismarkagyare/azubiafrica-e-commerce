import { useCart } from "@/hooks/useCart";
import { SHIPPING_FEE, TAX_RATE } from "@/constants/fees";
import { useFormContext } from "react-hook-form";

type SummaryProps = {
  onPay: () => void;
  isSubmitting?: boolean;
};

export default function Summary({ onPay, isSubmitting = false }: SummaryProps) {
  const { cartItems, cartTotal } = useCart();
  const { formState } = useFormContext();

  const shipping = SHIPPING_FEE;
  const vat = cartTotal * TAX_RATE;
  const grand = cartTotal + shipping + vat;

  const disabled = !formState.isValid || cartItems.length === 0 || isSubmitting;

  return (
    <div className="bg-white border rounded-xl p-6 flex-shrink-0 w-full max-w-md">
      <h3 className="text-lg font-bold mb-6">SUMMARY</h3>

      <div className="flex flex-col gap-6 max-h-60 overflow-y-auto">
        {cartItems.map((item) => (
          <div key={item.slug} className="flex items-center gap-4">
            <img src={item.image} className="w-16 h-16 rounded-md" />
            <div className="flex-1">
              <p className="font-bold">{item.name}</p>
              <p className="text-sm text-neutral-500">$ {item.price.toLocaleString()}</p>
            </div>
            <span className="font-bold">x{item.quantity}</span>
          </div>
        ))}
      </div>

      <div className="mt-8 flex flex-col gap-2 text-sm">
        <div className="flex justify-between">
          <span className="text-neutral-500">TOTAL</span>
          <span className="font-bold">$ {cartTotal.toLocaleString()}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-neutral-500">SHIPPING</span>
          <span className="font-bold">$ {shipping}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-neutral-500">VAT (INCLUDED)</span>
          <span className="font-bold">$ {vat.toLocaleString()}</span>
        </div>
        <div className="flex justify-between mt-4">
          <span className="text-neutral-500">GRAND TOTAL</span>
          <span className="font-bold text-primary-orangeish">$ {grand.toLocaleString()}</span>
        </div>
      </div>

      <button
        onClick={onPay}
        disabled={disabled}
        className={`w-full py-4 mt-8 font-bold uppercase tracking-widest cursor-pointer
          ${
            disabled
              ? "bg-neutral-400 text-white/70 cursor-not-allowed"
              : "bg-primary-orangeish hover:bg-primary-orangeish/80 text-white"
          }`}
      >
        {isSubmitting ? 'Processing...' : 'Continue & Pay'}
      </button>
    </div>
  );
}