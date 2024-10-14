import CardGrid from '@/components/CardGrid';
import HomeComponent from '@/components/Home/HomeComponent'; // Adjust the import path as necessary

const Reports = () => {
  const cardsData = [
    {
      title: "Sales Information",
      description: "With sales data, you can see how much profit is made and apply resources more effectively to grow your business.",
      imageUrl: "/images/sales.jpg",
      buttonText: "Learn More"
    },
    {
      title: "Invoice Status",
      description: "Track invoices with ease. You can check if there are Active, Void, Paid or Not Paid.",
      imageUrl: "/images/invoice.jpg",
      buttonText: "Learn More"
    },
    {
        title: "Credit Terms",
        description: "With our system,you can specify when payment is due for credits sales, any applicable discounts, and any applicable interest or late payment fees.",
        imageUrl: "/images/credit.jpg",
        buttonText: "Learn More"
      },{
        title: "Purchase Order Status",
        description: "You can track the status of each purchase made.",
        imageUrl: "/images/purchase.jpg",
        buttonText: "Learn More"
      },{
        title: "Stock Availability",
        description: "You can monitor how well your store inventory meets customer demand.",
        imageUrl: "/images/stock.jpg",
        buttonText: "Learn More"
      },{
        title: "Reports",
        description: "Reports will assist you in determining which items are causing you to lose or gain the most money, and you will be able to adjust your stock accordingly to increase profits.",
        imageUrl: "/images/reports.jpg",
        buttonText: "Learn More"
      },
    // Add more card data here...
  ];

  return (
    <div>

      <HomeComponent
        title="Uplift Reports and Analytics"
        description="Powerful report analytics designed to help you run your business and have the right insights."
        buttonText="Sign In"
        imageSrc="/images/multiple-pos.png" // Update with your actual image path
        imageAlt="Image description"
        isImageFirst={false} // Set to true if you want the image first
      />
      <CardGrid
        gridTitle="Key Features"
        gridDescription="Analytics and reports have never been this exciting"
        cardsData={cardsData}
      />
    
    </div>
  );
};

export default Reports;