import NavMenu from "./navMenu";
import InfoSection from "./infoSection";

export default function TopSection() {
  return (
    <div className="row topSection mb-4">
      <div className="topSectionContainer col-12 border-1 border-primary">
        <InfoSection />
        <NavMenu />
      </div>
    </div>
  );
}
