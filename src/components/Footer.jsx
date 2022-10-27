import React from "react";
import { Link } from "react-router-dom";
import IconInformation from "./IconInformation";
import { FaPaperPlane, FaMapMarkerAlt } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";

function Footer() {
  return (
    <footer className="w-full">
      <div className="grid grid-cols-1 grid-rows-1 text-paragraph">
        <div className="h-full col-span-full row-span-full">
          <div className="bg-background h-2/3"></div>
          <div className="h-1/3"></div>
        </div>
        <div className="h-full col-span-full row-span-full w-full max-w-[750px] m-auto p-14 md:py-14">
          <img
            className="pb-10"
            src="../images/real-estate/logo.png"
            alt="Din Mægler logo"
            title="Din Mægler logo"
          />
          <div className="flex flex-col justify-between gap-10 md:flex-row md:gap-0">
            <div className="flex flex-col gap-6 p-6 bg-white rounded-md shadow">
              <IconInformation
                icon={<BsFillTelephoneFill />}
                title="Ring til os"
                text="+45 7070 4000"
              />
              <IconInformation
                icon={<FaPaperPlane />}
                title="Send en mail"
                text="4000@dinmaegler.com"
              />
              <IconInformation
                icon={<FaMapMarkerAlt />}
                title="Butik"
                text="Stændertorvet 78, 4000 Roskilde"
              />
              <p className="w-56 text-lg">
                Din Mægler Roskilde, er din boligibutik i lokalområdet.
              </p>
            </div>
            <div className="flex flex-col justify-between gap-10 md:gap-0">
              <div className="flex flex-col gap-4">
                <h3 className="font-semibold">Quick Links</h3>
                <ul className="flex flex-col gap-2">
                  <li>
                    <Link to="/">Boliger til salg</Link>
                  </li>
                  <li>
                    <Link to="/">Mæglere</Link>
                  </li>
                  <li>
                    <Link to="/">Kontakt os</Link>
                  </li>
                  <li>
                    <Link to="/">Log ind / bliv bruger</Link>
                  </li>
                </ul>
              </div>
              <div className="text-xs text-paragraph_2">
                <p>Medlem af</p>
                <p className="text-4xl font-bold">DMS</p>
                <p>Dansk Mægler Sammenslutning</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <p className="p-6 text-center text-white bg-primary">
        Layout By Jit Banik 2020
      </p>
    </footer>
  );
}

export default Footer;
