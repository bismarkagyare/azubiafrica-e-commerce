/* eslint-disable react-refresh/only-export-components */
import { useForm, FormProvider } from "react-hook-form";
import { useState } from "react";
import { useCart } from "@/hooks/useCart";
import CheckoutForm from "./CheckoutForm";
import Summary from "./Summary";
import PaymentConfirmation from "./PaymentConfirmation";
import { SHIPPING_FEE, TAX_RATE } from "@/constants/fees";
import type { FormValues } from "./CheckoutForm";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema } from "./CheckoutForm";

export const metadata = {
  title: "Audiophile Shop – Checkout",
};

export default function CheckoutPage() {
  const methods = useForm<FormValues>({ 
    mode: "onChange",
    resolver: zodResolver(schema)
  });
  
  const [showConfirm, setShowConfirm] = useState(false);
  const { cartTotal, clearCart } = useCart();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const shipping = SHIPPING_FEE;
  const vat = cartTotal * TAX_RATE;
  const grand = cartTotal + shipping + vat;

  const handleFormSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    try {
      console.log(data)
      await new Promise(resolve => setTimeout(resolve, 1000));
      setShowConfirm(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <FormProvider {...methods}>
      {showConfirm && (
        <PaymentConfirmation
          grandTotal={grand}
          onClose={() => {
            setShowConfirm(false);
            clearCart();
          }}
        />
      )}

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-8 flex flex-col gap-8">
        <button
          onClick={() => history.back()}
          className="text-neutral-500 text-sm mb-2 cursor-pointer hover:underline flex items-start px-7"
        >
          Go Back
        </button>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1 bg-white rounded-xl p-6 border">
            <CheckoutForm />
          </div>

          <Summary 
            onPay={methods.handleSubmit(handleFormSubmit)} 
            isSubmitting={isSubmitting}
          />
        </div>
      </div>
    </FormProvider>
  );
}