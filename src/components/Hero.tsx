import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useEffect, useRef } from "react";

const Hero = () => {
  const sliderRef = useRef(null);
  const [keenSliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: { perView: 1 },
    duration: 1500,
  });

  // Autoplay effect
  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    const run = () => {
      if (instanceRef.current) {
        instanceRef.current.next();
      }
      timeout = setTimeout(run, 2000);
    };
    run();
    return () => clearTimeout(timeout);
  }, [instanceRef]);

  return (
    <section
      id="home"
      className="bg-gradient-to-r from-[#001288] via-[#0257a6] to-[#93cbff] min-h-screen flex items-center px-6 text-white"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: Identity, Text, Button */}
        <div className="space-y-8">
          {/* Profile Section */}
          <div className="flex flex-col items-start space-y-4">
            <img
              src="/images/ceo-image.png"
              alt="Atumonye James"
              className="w-40 h-40 rounded-full object-cover shadow-md"
            />
            <div>
              <h2 className="text-2xl font-semibold">Atumonye James</h2>
              <p className="text-white/80 text-lg">
                Data Analytics II AI Engineer II Machine Learning
              </p>
            </div>
          </div>

          {/* Main Heading & Text */}
          <h1 className="text-3xl lg:text-4xl font-semibold leading-snug">
            Unlock business growth through intelligent data analytics
          </h1>
          <p className="text-xl text-white/80 leading-relaxed">
            Advanced analytics & consulting services to drive strategic decisions and digital transformation for forward thinking businesses.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdak1Vfy-xvWgpxl30InSwV4TT4FOh_3rYcmDnKHWSe8zmmRw/viewform?usp=dialog"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="group bg-white text-[#001288] hover:bg-gray-100 font-semibold"
              >
                Start your project
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
          </div>
        </div>

        {/* Right: Carousel */}
        <div className="relative">
          <div
            ref={keenSliderRef}
            className="keen-slider aspect-video bg-white/10 rounded-2xl overflow-hidden shadow-2xl"
          >
            {[
              "truck1.png",
              "truck2.png",
              "truck3.png",
              "sales-dashboard.png",
              "sales-dashboard2.png",
              "e_commerce3.png",
              "e_commerce2.png",
              "e_commerce1.png",
              "drug-expiry3.jpg",
              "drug-expiry2.jpg",
              "drug-expiry1.jpg",
              "drug-expiry.png",
              "Return-Analysis2.png",
              "Return-Analysis1.png",
              "Return-Analysis.png",
              "truck1.png",
            ].map((slide, index) => (
              <div className="keen-slider__slide" key={index}>
                <img
                  src={`/images/cases/${slide}`}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
