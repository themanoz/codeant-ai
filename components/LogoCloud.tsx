import { InfiniteSlider } from "@/components/motion-primitives/infinite-slider";
import Image from "next/image";
import { ProgressiveBlur } from "./motion-primitives/progressive-blur";

export function LogoCloud() {
  const companies = [
    {
      url: "https://framerusercontent.com/images/z9601IFnU2uufEJFp58WBP8.png?scale-down-to=512",
    },
    {
      url: "https://framerusercontent.com/images/tOCxg4IjXjjuNgl2dToXwZtcK0.png?scale-down-to=512",
    },
    {
      url: "https://framerusercontent.com/images/UPOWAL2KyWw3Eq8QkyJc1YrbZg.png?scale-down-to=512",
    },
    {
      url: "https://framerusercontent.com/images/ySUHEiRXx3fgEkOd2cr1sCny4Ys.png?scale-down-to=512",
    },
    {
      url: "https://framerusercontent.com/images/2nsX1rJBVHaitGrTzNJl9F6hDzU.png?scale-down-to=51",
    },
    {
      url: "https://framerusercontent.com/images/KHlqooG20fF7KlUpHAm1Pi4gYgo.png?scale-down-to=512",
    },
    {
      url: "https://framerusercontent.com/images/JDCxR6n1vNayhb9rhkMNOR5bQBI.png?scale-down-to=512",
    },
    {
      url: "https://framerusercontent.com/images/puLCZkrPa0TyikAsCzUV4KSgI.png?scale-down-to=512",
    },
    {
      url: "https://framerusercontent.com/images/C3DHspSab1UcWZVTz9EmUeROX8.png?scale-down-to=512",
    },
  ];

  return (
    <div className="relative h-[150px] w-full overflow-hidden">
      <p className="text-center">Trusted by </p>
      <InfiniteSlider gap={24}>
        {companies.map((company, index) => (
          <Image
            src={company.url}
            alt="logo"
            key={index}
            width={200}
            height={200}
            className={`w-26 h-26 object-contain`}
          />
        ))}
      </InfiniteSlider>
      <ProgressiveBlur
        className="pointer-events-none absolute top-0 left-0 h-full w-[270px] bg-black"
        direction="left"
        blurIntensity={1}
      />
      <ProgressiveBlur
        className="pointer-events-none absolute top-0 right-0 h-full w-[270px] bg-black"
        direction="right"
        blurIntensity={1}
      />
    </div>
  );
}
