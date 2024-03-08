import React from "react";
import "./App.css";
import {
  StackedCarousel,
  ResponsiveContainer,
} from "react-stacked-center-carousel";
import { data } from "./helpers/datas";
import { Avatar } from "primereact/avatar";
import Card from "./Card";

function App() {
  const ref = React.useRef();
  return (
    <>
      <div style={{ width: "100%", position: "relative" }}>
        <ResponsiveContainer
          carouselRef={ref}
          render={(parentWidth, carouselRef) => {
            // If you want to use a ref to call the method of StackedCarousel, you cannot set the ref directly on the carousel component
            // This is because ResponsiveContainer will not render the carousel before its parent's width is determined
            // parentWidth is determined after your parent component mounts. Thus if you set the ref directly it will not work since the carousel is not rendered
            // Thus you need to pass your ref object to the ResponsiveContainer as the carouselRef prop and in your render function you will receive this ref object
            let currentVisibleSlide = 2;
            if (parentWidth <= 1440) currentVisibleSlide = 3;
            if (parentWidth <= 1080) currentVisibleSlide = 1;
            return (
              <StackedCarousel
                ref={carouselRef}
                slideComponent={Card}
                slideWidth={parentWidth < 800 ? parentWidth - 40 : 750}
                carouselWidth={parentWidth}
                data={data}
                currentVisibleSlide={currentVisibleSlide}
                maxVisibleSlide={1}
                useGrabCursor
              />
            );
          }}
        />
        <>
          <Avatar
            style={{ position: "absolute", top: "40%", left: 10, zIndex: 10 }}
            size="small"
            color="primary"
            onClick={() => {
              ref.current?.goBack();
            }}
          >
            {/* <ArrowBackIcon /> */}
            <i className="pi pi-arrow-right"></i>
          </Avatar>
          <Avatar
            style={{ position: "absolute", top: "40%", right: 10, zIndex: 10 }}
            size="small"
            color="primary"
            onClick={() => {
              ref.current?.goNext();
            }}
          >
            {/* <ArrowForwardIcon /> */}
            <i className="pi pi-arrow-left"></i>
          </Avatar>
        </>
      </div>
    </>
  );
}

export default App;

// Very import to memoize your Slide component otherwise there might be performance issue
// At minimum your should do a simple React.memo(SlideComponent)
// If you want the absolute best performance then pass in a custom comparator function like below
