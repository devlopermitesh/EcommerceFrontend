import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { addressSchema, type AddressSchemaType } from "@/validation/address.schema";


export function AddressBookForm() {
  const form = useForm<AddressSchemaType>({
    resolver: zodResolver(addressSchema),
    defaultValues: {
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
  });

  function onSubmit(data: AddressSchemaType) {
    console.log("Address Book:", data);
  }
  return (
    <div className="w-full p-4 md:p-6 lg:p-8 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-6 text-[#DB4444]">Address Book</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          <FormField
            control={form.control}
            name="addressLabel"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Address Label</FormLabel>
                <FormControl>
                  <Input placeholder="e.g. Home, Office" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter full name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input placeholder="Enter phone number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="country"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Country</FormLabel>
                <FormControl>
                  <Input placeholder="Enter country" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="state"
            render={({ field }) => (
              <FormItem>
                <FormLabel>State</FormLabel>
                <FormControl>
                  <Input placeholder="Enter state" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem>
                <FormLabel>City</FormLabel>
                <FormControl>
                  <Input placeholder="Enter city" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="zipCode"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Zip Code</FormLabel>
                <FormControl>
                  <Input placeholder="Enter zip code" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="streetAddress"
            render={({ field }) => (
              <FormItem className="md:col-span-2">
                <FormLabel>Street Address</FormLabel>
                <FormControl>
                  <Input placeholder="Full street address" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="isDefault"
            render={({ field }) => (
              <FormItem className="flex items-center space-x-2 md:col-span-2">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    id="isDefault"
                  />
                </FormControl>
                <FormLabel htmlFor="isDefault">Set as default address</FormLabel>
              </FormItem>
            )}
          />

          <div className="w-full flex justify-end md:col-span-2 gap-4 mt-4">
            <Button type="button" className="bg-white text-black border border-gray-300">
              Cancel
            </Button>
            <Button type="submit" className="bg-[#DB4444] text-white hover:bg-[#db4444e9]">
              Save Address
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
