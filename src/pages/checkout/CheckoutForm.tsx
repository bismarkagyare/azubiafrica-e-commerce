/* eslint-disable react-refresh/only-export-components */
import { useFormContext } from "react-hook-form";
import { z } from "zod";

export const schema = z
  .object({
    name: z.string().min(1, "Field cannot be empty"),
    email: z.string().email("Must be a valid email"),
    phone: z.string().min(1, "Field cannot be empty"),
    address: z.string().min(1, "Field cannot be empty"),
    zip: z.string().min(1, "Field cannot be empty"),
    city: z.string().min(1, "Field cannot be empty"),
    country: z.string().min(1, "Field cannot be empty"),
    payment: z.enum(["e-money", "cod"]),
    eMoneyNumber: z.string().optional(),
    eMoneyPin: z.string().optional(),
  })
  .superRefine((data, ctx) => {
    if (data.payment === "e-money") {
      if (!data.eMoneyNumber)
        ctx.addIssue({ path: ["eMoneyNumber"], code: "custom", message: "Field cannot be empty" });
      if (!data.eMoneyPin)
        ctx.addIssue({ path: ["eMoneyPin"], code: "custom", message: "Field cannot be empty" });
    }
  });

export type FormValues = z.infer<typeof schema>;

export default function CheckoutForm() {
  const { register, watch, formState: { errors } } = useFormContext<FormValues>();
  const payment = watch("payment");

  const inputClasses = (field: keyof FormValues) =>
    `w-full border rounded-md px-4 py-3 text-sm outline-none ${
      errors[field] ? "border-primary-orangeish" : "border-neutral-300"
    }`;

  return (
    <form className="grid gap-6">
      <h2 className="text-3xl font-bold">CHECKOUT</h2>

      {/* Billing Details */}
      <p className="text-primary-orangeish font-bold">BILLING DETAILS</p>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1">
          <label className="text-xs font-bold">Name</label>
          <input {...register("name")} className={inputClasses("name")} placeholder="Kwame Frimpong" />
          {errors.name && <span className="text-primary-orangeish text-xs">{errors.name.message}</span>}
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs font-bold">Email Address</label>
          <input {...register("email")} className={inputClasses("email")} placeholder="kwame@mail.com" />
          {errors.email && <span className="text-primary-orangeish text-xs">{errors.email.message}</span>}
        </div>
        <div className="flex flex-col gap-1 md:col-span-2">
          <label className="text-xs font-bold">Phone Number</label>
          <input {...register("phone")} className={inputClasses("phone")} placeholder="+233 202-555-136" />
          {errors.phone && <span className="text-primary-orangeish text-xs">{errors.phone.message}</span>}
        </div>
      </div>

      {/* Shipping Info */}
      <p className="text-primary-orangeish font-bold">SHIPPING INFO</p>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1 md:col-span-2">
          <label className="text-xs font-bold">Your Address</label>
          <input {...register("address")} className={inputClasses("address")} placeholder="1137 Williams Avenue" />
          {errors.address && <span className="text-primary-orangeish text-xs">{errors.address.message}</span>}
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs font-bold">ZIP Code</label>
          <input {...register("zip")} className={inputClasses("zip")} placeholder="28000" />
          {errors.zip && <span className="text-primary-orangeish text-xs">{errors.zip.message}</span>}
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs font-bold">City</label>
          <input {...register("city")} className={inputClasses("city")} placeholder="Accra" />
          {errors.city && <span className="text-primary-orangeish text-xs">{errors.city.message}</span>}
        </div>
        <div className="flex flex-col gap-1 md:col-span-2">
          <label className="text-xs font-bold">Country</label>
          <input {...register("country")} className={inputClasses("country")} placeholder="Ghana" />
          {errors.country && <span className="text-primary-orangeish text-xs">{errors.country.message}</span>}
        </div>
      </div>

      {/* Payment Details */}
      <p className="text-primary-orangeish font-bold">PAYMENT DETAILS</p>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1">
          <label className="text-xs font-bold">Payment Method</label>
        </div>
        <div className="flex flex-col gap-4">
          <label className="flex items-center gap-4 border rounded-md px-4 py-3 cursor-pointer">
            <input type="radio" value="e-money" {...register("payment")} className="form-radio" />
            e-Money
          </label>
          <label className="flex items-center gap-4 border rounded-md px-4 py-3 cursor-pointer">
            <input type="radio" value="cod" {...register("payment")} className="form-radio" />
            Cash on Delivery
          </label>
          {errors.payment && <span className="text-primary-orangeish text-xs">{errors.payment.message}</span>}
        </div>

        {payment === "e-money" && (
          <>
            <div className="flex flex-col gap-1">
              <label className="text-xs font-bold">e-Money Number</label>
              <input {...register("eMoneyNumber")} className={inputClasses("eMoneyNumber")} placeholder="238521993" />
              {errors.eMoneyNumber && (
                <span className="text-primary-orangeish text-xs">{errors.eMoneyNumber.message}</span>
              )}
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xs font-bold">e-Money PIN</label>
              <input {...register("eMoneyPin")} className={inputClasses("eMoneyPin")} placeholder="6891" />
              {errors.eMoneyPin && (
                <span className="text-primary-orangeish text-xs">{errors.eMoneyPin.message}</span>
              )}
            </div>
          </>
        )}
      </div>
    </form>
  );
}