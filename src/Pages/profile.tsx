import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { Link, Outlet } from "react-router-dom"
const Sidebaroptions = [
    {
        heading: "Manage My Account",
        subLink: [
            {
                id: 1,
                subtitle: "My Profile",
                link: "",
            },
            {
                id: 2,
                subtitle: "Address Book",
                link: "addressbook",
            },
            {
                id: 3,
                subtitle: "My Payment Options",
                link: "paymentoptions",
            },
        ],
    },
    {
        heading: "My Orders",
        subLink: [
            {
                id: 1,
                subtitle: "My Returns",
                link: "myreturns",
            },
            {
                id: 2,
                subtitle: "My Cancellations",
                link: "mycancellations",
            },
        ],
    },
    {
        heading: "Wishlist",
        subLink: [
            {
                id: 1,
                subtitle: "My Wishlist",
                link: "mywishlist",
            },
        ],
    },
];
const Profile=()=>{
    return (
<div className="flex flex-col w-full h-full space-y-2">
<div className="flex flex-row w-full justify-between px-10 mt-10">
   <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link to="/">Home</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator/>
        <BreadcrumbItem>
          <BreadcrumbPage>Checkout</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
<h2 className="text-md font-Helvetic text-black">Welcome! <span className="text-red-400 text-md">{'Mitesh kumar'}</span> </h2>
</div>

<div className="flex flex-row w-full ">

  {/* Sidebar */}
  <div className="flex flex-col w-64 bg-muted p-4 border-r space-y-6">
    {Sidebaroptions.map((section, idx) => (
      <div key={idx} className="space-y-2">
        <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide">
          {section.heading}
        </h3>
        <ul className="space-y-1 pl-2 border-l border-border">
          {section.subLink.map((item) => (
            <li key={item.id}>
              <Link
                to={item.link}
                className="block text-sm text-muted-foreground hover:text-foreground hover:font-medium transition"
              >
                {item.subtitle}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>

  {/* Main content area */}
  <div className="flex-1 p-6">
    <Outlet/>
  </div>
</div>
</div>
    )
}
export default Profile