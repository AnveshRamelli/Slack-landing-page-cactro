import React from "react";

const BrandLogos = () => {
  const brands = [
    { name: "Airbnb", logo: "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_Bélo.svg" },
    { name: "NASA", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e5/NASA_logo.svg" },
    { name: "Uber", logo: "https://1000logos.net/wp-content/uploads/2021/04/Uber-logo.png" },
    { name: "Target", logo: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Target_logo.svg" },
    { name: "New York Times", logo: "https://upload.wikimedia.org/wikipedia/commons/4/40/New_York_Times_logo_variation.jpg" },
    { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
    { name: "Spotify", logo: "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg" }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 items-center mt-8 w-full max-w-[1200px] mx-auto px-4 md:px-8">
      {brands.map((brand, index) => (
        <img
          key={index}
          src={brand.logo}
          alt={brand.name}
          loading="lazy"
          className="h-12 max-w-[150px] object-contain mx-auto"
        />
      ))}
    </div>
  );
};

export default BrandLogos;