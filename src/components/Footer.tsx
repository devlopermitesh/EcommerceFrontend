import useRoutes from "@/hooks/useRoutes";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  SendHorizonal,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
    const routers=useRoutes();
  return (
    <footer className="bg-black text-white w-full mt-auto ">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Subscribe Section */}
        <div>
          <h3 className="text-lg font-bold mb-3">Exclusive</h3>
          <p className="text-sm mb-2">Subscribe</p>
          <p className="text-sm text-gray-400 mb-4">Get 10% off your first order</p>
          <div className="flex items-center border border-gray-600 rounded overflow-hidden">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-black text-white text-sm px-2 py-2 w-full outline-none"
            />
            <button className="bg-white text-black px-2">
              <SendHorizonal size={18} />
            </button>
          </div>
        </div>

        {/* Support */}
        <div>
          <h4 className="font-bold mb-3">Support</h4>
          <p className="text-sm text-gray-400">111 Bijoy sarani, Dhaka,</p>
          <p className="text-sm text-gray-400">DH 1515, Bangladesh</p>
          <p className="text-sm mt-2 text-gray-400">exclusive@gmail.com</p>
          <p className="text-sm text-gray-400">+88015-88888-9999</p>
        </div>

        {/* Account */}
        <div>
          <h4 className="font-bold mb-3">Account</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            {
                routers.map((route)=>
                <Link key={route.label} to={route.href}>{route.label}</Link>)
            }
      
          </ul>
        </div>

        {/* Quick Link */}
        <div>
          <h4 className="font-bold mb-3">Quick Link</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Privacy Policy</li>
            <li>Terms Of Use</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* App Download + Socials */}
        <div>
          <h4 className="font-bold mb-3">Download App</h4>
          <p className="text-sm text-gray-400 mb-2">
            Save $3 with App New User Only
          </p>
          <div className="flex flex-col space-y-2 mb-3">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/5f/QR_Code_example.png"
              alt="QR"
              className="w-24 h-24"
            />
            <div className="flex gap-2">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/512px-Google_Play_Store_badge_EN.svg.png"
                alt="Google Play"
                className="h-10"
              />
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="App Store"
                className="h-10"
              />
            </div>
          </div>
          <div className="flex gap-3 mt-3">
            <Facebook className="w-5 h-5 text-white hover:text-blue-500" />
            <Twitter className="w-5 h-5 text-white hover:text-sky-400" />
            <Instagram className="w-5 h-5 text-white hover:text-pink-500" />
            <Linkedin className="w-5 h-5 text-white hover:text-blue-700" />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-gray-500 text-sm border-t border-gray-700 py-4">
        © Copyright Rimel 2022. All right reserved
      </div>
    </footer>
  );
}
