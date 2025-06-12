import { useForm, useFormContext, FormProvider } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { AddressBookForm } from "./AddressBookForm";
import { paymentSchema, type PaymentSchemaType } from "@/validation/payment.schema";


export function PaymentMethodForm() {
  const form = useForm<PaymentSchemaType>({
    resolver: zodResolver(paymentSchema),
    defaultValues: {
      cardHolderName: "",
      cardNumber: "",
      expiryDate: "",
      cvv: "",
      billingAddress: {
        addressLabel: "",
        fullName: "",
        phoneNumber: "",
        country: "",
        state: "",
        city: "",
        zipCode: "",
        streetAddress: "",
        isDefault: false,
      },
      saveCard: false,
    },
  });

  const detectCardType = (number: string): string => {
    if (/^4/.test(number)) return "Visa";
    if (/^5[1-5]/.test(number)) return "MasterCard";
    if (/^3[47]/.test(number)) return "Amex";
    return "Other";
  };

  const handleCardInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 16);
    form.setValue("cardNumber", value);
    form.setValue("cardType", detectCardType(value) as any);
  };

  const onSubmit = (data: PaymentSchemaType) => {
    console.log("Payment Info:", data);
  };

  return (
    <div className="w-full p-4 md:p-6 lg:p-8 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-6 text-[#DB4444]">Payment Method</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4">

          <FormField
            control={form.control}
            name="cardHolderName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Card Holder Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter name on card" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="cardNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Card Number</FormLabel>
                <FormControl>
                  <Input
                    placeholder="1234 5678 9012 3456"
                    value={field.value}
                    onChange={(e) => handleCardInput(e)}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="expiryDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Expiry Date (MM/YY)</FormLabel>
                  <FormControl>
                    <Input placeholder="MM/YY" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="cvv"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>CVV</FormLabel>
                  <FormControl>
                    <Input placeholder="123" type="password" maxLength={4} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

     
          <FormField
            control={form.control}
            name="saveCard"
            render={({ field }) => (
              <FormItem className="flex items-center space-x-2">
                <FormControl>
                  <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                </FormControl>
                <FormLabel>Save this card for future</FormLabel>
              </FormItem>
            )}
          />

          <div className="flex justify-end gap-4 mt-6">
            <Button type="button" className="bg-white text-black border border-gray-300">
              Cancel
            </Button>
            <Button type="submit" className="bg-[#DB4444] text-white hover:bg-[#db4444e9]">
              Save Payment Method
            </Button>
          </div>

        </form>
      </Form>
    </div>
  );
}
