import OffFramedImage from "../components/OffFramedImage";
import StatPitchTemplate from "./StatPitchTemplate";
import StatPitch from "../components/StatPitch";

const StatsSectionTemplate = () => {
  return (
    <div className="max-w-[1110px] w-full mx-auto mt-[120px]">
      <div>
        <div className="relative border-b pb-16 mb-12">
          <div>
            <OffFramedImage
              src="/images/real-estate/familystats.png"
              cornerBold="38+"
              cornerText="Års mægler-erfaring"
              cornerCss="bg-primary"
            />
          </div>
          <div className="absolute top-0 right-0 max-w-[550px]">
            <h2 className="text-4xl font-bold text-heading mb-8 max-w-[460px]">
              Vi har fulgt danskerne hjem i snart 4 årtier
            </h2>
            <h3 className="text-primary text-2xl font-medium mb-3 max-w-fit">
              Det synes vi siger noget om os!
            </h3>
            <p className="text-lg text-paragraph mb-5 max-w-[540px]">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has normal distribution.
            </p>
            <p className="text-lg text-paragraph max-w-[540px] mb-10">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
            <div className="flex">
              <StatPitch
                icon="/images/real-estate/handhouse_icon.svg"
                pitchTitle="4829"
                pitchText="boliger solgt"
              />
              <StatPitch
                icon="/images/real-estate/house_icon.svg"
                pitchTitle="158"
                pitchText="boliger til salg"
              />
            </div>
          </div>
        </div>
      </div>
      <StatPitchTemplate />
    </div>
  );
};

export default StatsSectionTemplate;
