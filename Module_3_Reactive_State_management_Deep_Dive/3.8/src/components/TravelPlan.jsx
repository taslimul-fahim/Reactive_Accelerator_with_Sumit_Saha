import { useState } from "react";
import { initialTravelPlan } from "../places-normalized";
import PlaceTree from "./PlaceTree";

const TravelPlan = () => {
  const [plan, setPlan] = useState(initialTravelPlan);

  const root = plan[0];
  const childIds = root.childIds;

  function handleComplete(parentId, childId) {
    const cod = plan[parentId];
    const nextParent = {
      ...plan,
      childIds: cod.childIds.filter((id) => id !== childId),
    };

    setPlan({
      ...plan,
      [parentId]: nextParent,
    });
  }
  return (
    <ol>
      {childIds.map((placeId) => (
        <PlaceTree
          key={placeId}
          id={placeId}
          Places={plan}
          onComplete={handleComplete}
          parentId={0}
        />
      ))}
    </ol>
  );
};

export default TravelPlan;
