import Sink from "./Sink";
import Oven from "./Oven";



const Kitchen = () => {
  return ( 
    <div>
      <h1>Kitchen</h1>
      <div>
        <Sink />
      </div>
      <div>
        <Oven />
      </div>
    </div>
  )
}

export default Kitchen;