/* eslint-disable react/prop-types */
const PlaceTree = ({ id, Places, onComplete, parentId }) => {
  const childIds = Places[id];
  const microChild = childIds.childIds;
  return (
    <>
      <li>
        {childIds.title}{" "}
        <button onClick={() => onComplete(parentId, id)}>Complete</button>
        <ol>
          {microChild.length > 0 &&
            microChild.map((childId) => (
              <PlaceTree
                id={childId}
                key={childId}
                Places={Places}
                parentId={id}
                onComplete={onComplete}
              />
            ))}
        </ol>
      </li>
    </>
  );
};

export default PlaceTree;
