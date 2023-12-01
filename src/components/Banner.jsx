import Google from "../assets/google.png";
import Meta from "../assets/meta.png";
import Netflix from "../assets/netflix.png";
import Amazon from "../assets/amazon.png";

const Banner = () => {
  const images = [
    {
      src: Google,
      alt: "google",
    },
    {
      src: Amazon,
      alt: "amazon",
    },
    {
      src: Netflix,
      alt: "netflix",
    },
    {
      src: Meta,
      alt: "meta",
    },
  ];

  return (
    <div className="w-[100%] bg-[#ebeffc] py-8">
      <div className="w-[80%] flex items-center gap-4 m-auto">
        <div className="flex-[3] border-r-[1px] border-neutral-700 px-2">
          <p className="text-neutral-800 text-[22px] font-medium leading-[2.5rem]">
            Trusted By Over 1200+ Companies All Around the World
          </p>
        </div>
        <div className="flex items-center justify-between flex-[7] gap-6">
          {images.map((image) => (
            <div className="w-[25%] pl-8">
              <img src={image.src} alt={image.alt} className="w-[75%]" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;
