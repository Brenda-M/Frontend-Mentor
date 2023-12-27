// import { useState } from "react"
import AddonsCard from "./AddonsCard"

const Addons = () => {

  return (
    <div>
      <h1>Pick add-ons</h1>
      <p> Add-ons help enhance your gaming experience.</p>
   
      <div>
        <AddonsCard  title="Online service" info="Access to multiplayer games" price="+$1/mo"/>
        <AddonsCard  title="Larger storage" info="Extra 1TB of cloud save" price="+$2/mo"/>
        <AddonsCard  title="Customizable Profile" info="Custom theme on your profile" price="+$2/mo"/>
    
      </div>
    </div>
  )
}

export default Addons