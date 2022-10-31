import OffFramedImage from "../components/OffFramedImage";
import StatPitchTemplate from "./StatPitchTemplate";
import StatPitch from "../components/StatPitch";

const StatsSectionTemplate = () => {
  const styles = {
    pitchTitle:
      "text-heading_2 font-medium text-2xl col-start-2 col-end-3 pl-4 row-start-1 row-end-2",
    pitchText:
      "max-w-[290px] text-lg text-paragraph col-start-2 col-end-3 pl-4 row-start-1 row-end-2 place-self-end pr-4",
  };
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
              alt="picture of a family"
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
                pitchTitle=""
                pitchText=""
              >
                <h3 className={styles.pitchTitle}>4829</h3>
                <p className={styles.pitchText}>boliger solgt</p>
              </StatPitch>
              <StatPitch
                icon="/images/real-estate/house_icon.svg"
                pitchTitle=""
                pitchText=""
              >
                <h3 className={styles.pitchTitle}>158</h3>
                <p className={styles.pitchText}>boliger til salg</p>
              </StatPitch>
            </div>
          </div>
        </div>
      </div>
      <StatPitchTemplate />
    </div>
  );
};

export default StatsSectionTemplate;
