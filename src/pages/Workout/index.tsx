import { useAppSelector } from "../../hooks/redux";
import AddActivity from "./AddActivity";
import DeleteActivity from "./DeleteActivity";

const Workout = () => {
  const activitys = useAppSelector((state) => state.acticity.activitys);

  return (
    <>
      <div>Workout</div>
      <AddActivity />
      {activitys.map((activity) => (
        <div key={activity.id} className="text-start gap-2 p-2">
          <div className="border-2 border-gray-200 p-2 rounded-lg flex justify-between">
            <div>
              <p>Activity : {activity.name}</p>
              <p>Duration : {activity.duration}</p>
            </div>

            <DeleteActivity
              duration={activity.duration}
              id={activity.id}
              name={activity.name}
            />
          </div>
        </div>
      ))}
    </>
  );
};

export default Workout;
