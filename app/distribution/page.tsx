import CardGrid from "@/components/CardGrid";
import RestaurantPage from "@/components/RestuarantPage";
import { FaCloud, FaMobileAlt, FaTags, FaBarcode, FaMoneyCheck, FaReceipt } from "react-icons/fa";

const Distribution = () => {
  const cardsData = [
    {
      title: "Cloud Based",
      description: "From the elivra cloud or mobile Dashboard apps for iOS or Android, you may access all the reports even while traveling.",
      Icon: FaCloud,
      color: "text-red-500", // Icon color
    },
    {
      title: "Device Compatibility",
      description: "On iPad, PC, Android phone tablets, old & modern POS Terminals, elivra Restaurant POS runs flawlessly.",
      Icon: FaMobileAlt,
      color: "text-red-500", // Icon color
    },
    {
      title: "Discount & Loyalty",
      description: "Use discounts on the total or on particular goods. The elivra Loyalty system is robust, adaptable, and simple to use. It can automatically enroll new customers.",
      Icon: FaTags,
      color: "text-red-500", // Icon color
    },
    {
      title: "Easy Barcode Scanning",
      description: "Use the built-in rear camera on your mobile device or barcode scanners to read barcodes on products during a sale.",
      Icon: FaBarcode,
      color: "text-red-500", // Icon color
    },
    {
      title: "Pay ins & Payouts",
      description: "With pay ins and payouts, you may handle your money more precisely and systematically. Make a manual addition to or subtraction from your cash register using POS.",
      Icon: FaMoneyCheck,
      color: "text-red-500", // Icon color
    },
    {
      title: "Printed or Electronic Receipt",
      description: "Give customers the option of printing or receiving their receipt by email or SMS.",
      Icon: FaReceipt,
      color: "text-red-500", // Icon color
    },
    // Add more card data here...
  ];

  return (
    <div>
      <RestaurantPage
        title="The right distribution channel that changes everything"
        description="Products are made available to all retailers."
        imageUrl="/images/distribution.jpg" // Replace with your actual image path
      />
      <CardGrid
        gridTitle="Features"
        gridDescription="The Complete POS System for Restaurants."
        cardsData={cardsData}
      />
    </div>
  );
};

export default Distribution;
