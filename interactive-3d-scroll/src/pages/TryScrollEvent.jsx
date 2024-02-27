import { useEffect } from "react";
import { IMAGES } from "../assets/images";
import { useState } from "react";

const TryScrollEvent = () => {
  const [scrollPosition, setScrollPostiion] = useState(0);
  const [elementRect, setElementRect] = useState(null);
  const [zoom, setZoom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPostiion(window.scrollY);
      const element = document.querySelector(".ilbuni");
      if (element) {
        const rect = element.getBoundingClientRect();
        setElementRect(rect);
        const positionY = rect.top;

        if (positionY < window.innerHeight * 0.4) {
          setZoom(true);
        } else {
          setZoom(false);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  console.log(elementRect?.top);

  return (
    <div className="TryScrollEvent">
      <div className="output">
        {scrollPosition === 0 ? "OUTPUT" : scrollPosition}
      </div>
      <div className="try-scroll-root">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          odio, iusto atque obcaecati eos ad, nam tempora explicabo maxime unde,
          quo ullam? Similique alias ab consectetur, aspernatur deleniti
          voluptatibus accusantium! Quae ullam blanditiis deserunt voluptatum
          llitia, voluptates illo, laborum alias assumenda facere vero porro
          commodi corporis doloribus. Corporis minima deleniti debitis deserunt
          officiis atque dolorum dolor recusandae, optio sint laudantium tenetur
          nam aliquam eius, odit molestiae quaerat vel eveniet. Natus,
          asperiores? Quia repellat in quasi veritatis ipsum? Est quisquam
          laudantium iste cumque sed nemo iusto asperiores autem ipsam aperiam
          quas nihil maxime eius atque iure natus quae similique, distinctio
          ullam rerum a eligendi? Sed magnam numquam ex.
        </p>
        <figure className={zoom ? "ilbuni zoom" : "ilbuni"}>
          <img src={IMAGES.ilbuni0} alt="일부니" />
        </figure>
      </div>
    </div>
  );
};

export { TryScrollEvent };
