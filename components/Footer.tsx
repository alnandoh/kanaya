import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import FooterLogo from "@/public/whatsapp.png";
import Map from "./Map";
// import dynamic from "next/dynamic";

// const Map = dynamic(() => import("./Map"), {
//   ssr: false,
// });

export default function Footer() {
  return (
    <footer className="bg-one-800" id="contact-us">
      <div className="wrapper mx-auto py-8 px-4 md:px-8 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col items-center md:items-start">
            {/* <Link href="/" className="mb-4">
              <div className="relative w-40 h-24">
                <Image
                  src=""
                  alt="Nusa Bean Logo"
                  className="object-contain"
                  fill
                />
              </div>
            </Link> */}
            <p className="text-justify md:text-left text-sm lg:text-base">
              PT Kayana Kreatif Nusantara is an exporter of high-quality natural
              bamboo products. With a focus on customization, we offer an
              extensive selection of designs and sizes tailored to meet the
              specific preferences of our global clientele
            </p>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <MapPin className="min-w-6 h-6 text-red-500 mr-3" />
                <p className="text-sm lg:text-base">
                  Jl. , Semarang,
                  <br />
                  Jawa Tengah, Indonesia
                </p>
              </div>
              <div className="flex items-center">
                <Phone className="min-w-6 h-6 text-green-500 mr-3" />
                <p className="text-sm lg:text-base">
                  Whatsapp: +62 811-1111-1111
                </p>
              </div>
              <div className="flex items-center">
                <Mail className="min-w-6 h-6 text-slate-300 mr-3" />
                <p className="text-sm lg:text-base">kayana@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-full h-60 md:col-span-2 xl:h-80 rounded-xl overflow-hidden">
          <Map />
        </div>
      </div>
      <div className="bg-one-700 py-4">
        <div className="container mx-auto text-center text-sm">
          <p className="text-two-100">
            ©2025 Kayana Kreatif Nusantara. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
