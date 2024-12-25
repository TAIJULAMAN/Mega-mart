import React from "react";
import Container from "@/shared/Container/Container";
import Image from "next/image";

// import icons
import location from "@/assets/icons/location.svg";
import truck from "@/assets/icons/truck.svg";
import discount from "@/assets/icons/discount.svg";

export default function TopBar() {
  return (
    <div className="bg-bg py-3 text-sm text-text text-nowrap hidden md:block ">
      <Container>
       <div className="flex items-center justify-between">
       <h3>Welcome to worldwide Megamart!</h3>
        <div className="flex items-center gap-5 justify-end">
          <div className="flex items-center gap-1">
            <Image alt="location" src={location} width={18} height={18} />
            <p>
              Deliver to
              <span className="font-semibold"> 423651</span>
            </p>
          </div>
          <div className="flex items-center gap-1">
            <Image alt="truck" src={truck} width={18} height={18} />
            <p>Track your order</p>
          </div>
          <div className="flex items-center gap-1">
            <Image alt="discount" src={discount} width={18} height={18} />
            <p>
            All Offers
            </p>
          </div>
        </div>
       </div>
      </Container>
    </div>
  );
}
