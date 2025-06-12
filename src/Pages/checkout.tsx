import { Breadcrumb, BreadcrumbEllipsis, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import  checkoutinfoschema from "@/validation/checkoutInfo.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import * as z from "zod"

const CheckoutPage=()=>{

  const form = useForm<z.infer<typeof checkoutinfoschema>>({
    resolver: zodResolver(checkoutinfoschema),
    defaultValues: {
      payment: "cod",
      saveInfo: true,
    },
  });

  function onSubmit(values: z.infer<typeof checkoutinfoschema>) {
    console.log("Form Data:", values);
  }

return (
    <div className="flex flex-col w-full h-full border px-30 py-5 gap-4">
{/* //breadcrumb  */}

    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link to="/">Home</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1">
              <BreadcrumbEllipsis className="size-4" />
              <span className="sr-only">Toggle menu</span>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuItem>jeans</DropdownMenuItem>
              <DropdownMenuItem>pent</DropdownMenuItem>
              <DropdownMenuItem>tshitr</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link to="/docs/components">cart</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Checkout</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>




   <div className="min-h-screen bg-white px-4 py-10 md:px-20 font-sans">
      <div className="grid md:grid-cols-2 gap-10">
        {/* Billing Form */}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <h2 className="text-2xl font-semibold mb-4">Billing Details</h2>

            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name*</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Enter first name" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="companyName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Company Name</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Enter company name" />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Street Address*</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Enter address" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="apartment"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Apartment (Optional)</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Apt, Floor, etc." />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Town/City*</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Enter city" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number*</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Enter phone number" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address*</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Enter email" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="saveInfo"
              render={({ field }) => (
                <FormItem className="flex items-center space-x-2">
                  <FormControl>
                    <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                  </FormControl>
                  <FormLabel className="text-sm font-normal">
                    Save this information for faster check-out next time
                  </FormLabel>
                </FormItem>
              )}
            />
          </form>
   

        {/* Order Summary */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 space-y-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1063/1063393.png"
                alt="monitor"
                className="w-10 h-10 object-contain"
              />
              <p className="text-sm font-medium">LCD Monitor</p>
            </div>
            <p className="text-sm font-semibold">$650</p>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <img
                src="https://cdn-icons-png.flaticon.com/512/810/810535.png"
                alt="gamepad"
                className="w-10 h-10 object-contain"
              />
              <p className="text-sm font-medium">H1 Gamepad</p>
            </div>
            <p className="text-sm font-semibold">$1100</p>
          </div>

          <hr />
          <div className="flex justify-between text-sm">
            <p>Subtotal</p>
            <p>$1750</p>
          </div>
          <div className="flex justify-between text-sm">
            <p>Shipping</p>
            <p className="text-green-500 font-semibold">Free</p>
          </div>
          <div className="flex justify-between font-semibold">
            <p>Total</p>
            <p>$1750</p>
          </div>

          {/* Payment */}
          <FormField
            control={form.control}
            name="payment"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Payment Method</FormLabel>
                <FormControl>
                  <RadioGroup
                    defaultValue={field.value}
                    onValueChange={field.onChange}
                    className="space-y-2"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="bank" />
                      <span className="text-sm">Bank</span>
                      <img
                        src="https://logowik.com/content/uploads/images/credit-card-payment9268.logowik.com.webp"
                        alt="cards"
                        className="h-6 ml-2"
                      />
                    </div>

                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="cod" />
                      <span className="text-sm">Cash on delivery</span>
                    </div>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Coupon */}
          <FormField
            control={form.control}
            name="coupon"
            render={({ field }) => (
              <FormItem>
                <div className="flex items-center gap-2 mt-2">
                  <FormControl>
                    <Input placeholder="Coupon Code" {...field} />
                  </FormControl>
                  <Button type="button" variant="destructive">
                    Apply Coupon
                  </Button>
                </div>
              </FormItem>
            )}
          />

          <Button type="submit" onClick={form.handleSubmit(onSubmit)} className="w-full mt-4">
            Place Order
          </Button>
        </div>
        </Form>

      </div>
    </div>

    </div>
)
}

export default CheckoutPage;
