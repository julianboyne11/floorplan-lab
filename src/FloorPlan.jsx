import Kitchen from "./Kitchen";
import LivingRoom from "./LivingRoom";
import BedRoom from "./BedRoom";
import Bath from "./Bath";


const FloorPlan = () => {
  return (  
    <div className="floorplan">
      <BedRoom bedNum={1} />
      <Kitchen />
      <Bath size="Full" />
      <BedRoom bedNum={2} />
      <LivingRoom />
      <Bath size="Half" />
    </div>
  )
}

export default FloorPlan;