import { useState } from "react";
import { initialTravelPlan } from "../places-normalized";
import PlaceTree from "./PlaceTree";

const TravelPlan = () => {
  const [plan, setPlan] = useState(initialTravelPlan);

  const planets = plan.childPlaces;
  return (
    <>
      <h2>Places to visit.</h2>
      <ol>
        {planets.map((place) => (
          <PlaceTree key={place.id} place={place} />
        ))}
      </ol>
    </>
  );
};

export default TravelPlan;
