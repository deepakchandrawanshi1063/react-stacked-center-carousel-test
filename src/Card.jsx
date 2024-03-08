import React from "react";

const Card = React.memo(function Card(props) {
  // Destructuring props to extract data and dataIndex
  const { data, dataIndex } = props;

  console.log("poprs", props);
  // Extracting cover from the data based on the provided dataIndex
  const { cover } = data[dataIndex];
  // const cover = "https://images6.alphacoders.com/679/thumb-1920-679459.jpg";

  return (
    <div
      style={{
        width: "100%", // Full width
        height: 300, // Fixed height
        userSelect: "none", // Prevent text selection
      }}
      className="my-slide-component" // Custom class for styling
    >
      {/* Image element displaying the cover */}
      <img
        style={{
          height: "100%", // Fill the parent container vertically
          width: "100%", // Fill the parent container horizontally
          objectFit: "cover", // Scale the image to cover the entire container while maintaining aspect ratio
          borderRadius: 0, // No border radius
        }}
        draggable={false} // Disable image dragging
        src="https://images6.alphacoders.com/679/thumb-1920-679459.jpg" // Source of the image
        alt="Card cover" // Alt text for accessibility
      />
    </div>
  );
});

Card.displayName = "Card";

export default Card;
