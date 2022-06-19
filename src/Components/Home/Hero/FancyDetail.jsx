import React from "react";
import fancyWatch from "../../../assets/images/feature.png";
import { FiMonitor } from "react-icons/fi";
import Feature from "./Feature";
import { RiLeafLine,RiBluetoothConnectLine } from "react-icons/ri";
import { AiOutlineEye } from "react-icons/ai";
import FeatureRight from "./FeatureRight";
import { BsPhone } from "react-icons/bs";
import { TbDeviceGamepad2 } from "react-icons/tb";

export default function FancyDetail() {
  const watchFeature = [
    {
      id: "1",
      title: "Support 24/7",
      des: "One disadvantage of Lorum Ipsum is that in Latin frequently than others",
      icon: <FiMonitor />,
    },
    {
      id: "2",
      title: "7 Days Return",
      des: "One disadvantage of Lorum Ipsum is that in Latin frequently than others",
      icon: <RiLeafLine />,
    },
    {
      id: "3",
      title: "100% Payment Secure",
      des: "One disadvantage of Lorum Ipsum is that in Latin frequently than others",
      icon: <AiOutlineEye />,
    },
    {
      id: "4",
      title: "Bluetooth Calling",
      des: "One disadvantage of Lorum Ipsum is that in Latin frequently than others",
      icon: <RiBluetoothConnectLine />,
    },
    {
      id: "5",
      title: "Sports Modes",
      des: "One disadvantage of Lorum Ipsum is that in Latin frequently than others",
      icon: <BsPhone />,
    },
    {
      id: "6",
      title: "Games",
      des: "One disadvantage of Lorum Ipsum is that in Latin frequently than others",
      icon: <TbDeviceGamepad2 />,
    },
  ];
  return (
    <div className="container mx-auto py-1">
      <div className="desc">
        <div className="text-center">
          <h3 className="text-3xl">What we do ?</h3>
          <p className="mt-3 md:mt-5 text-md md:text-lg text-slate-600 mx-auto max-w-xl text-center">
            Create, collaborate, and turn your ideas into incredible products
            with the definitive platform for digital design.
          </p>
        </div>
      </div>
      {/* end */}

      <div className="grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 mt-5 p-4 items-center gap-[10px] md:gap-[30px]">
        <div className="lg:col-span-4 md:col-span-6 lg:order-1 order-2">
          <div className="grid grid-cols-1">
            {watchFeature.slice(0,3).map((feature) => (
              <Feature feature={feature} key={feature.id} />
            ))}
          </div>
        </div>
        <div className="lg:col-span-4 md:col-span-12 lg:mx-8 flex items-center   lg:order-2 order-1">
          <img className="w-72 md:w-94 mx-auto" src={fancyWatch} alt="" />
        </div>
        <div className="lg:col-span-4 md:col-span-6 order-3">
          <div className="grid grid-cols-1">
            {watchFeature.slice(3,6).map((feature) => (
              <FeatureRight feature={feature} key={feature.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
