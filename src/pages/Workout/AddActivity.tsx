import { useState } from "react";
import { useAppDispatch } from "../../hooks/redux";
import { Button, Input } from "@nextui-org/react";
import {
  CRAETER_ACTIVITY,
} from "../../features/activitys/acticity";
type Props = {
  id?: string;
  name: string;
  duration: string;
};

const AddActivity = () => {
  const dispath = useAppDispatch();
  const [activity, setActivity] = useState<Props>({
    duration: "",
    name: "",
  });

  const handleAddActivity = () => {
    dispath(CRAETER_ACTIVITY(activity));
  };
  return (
    <div className="">
      <div className="w-full flex flex-col gap-4">
        <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
          <Input
            size={"md"}
            type={"text"}
            label="Name"
            placeholder="Enter your name"
            onChange={(e) =>
              setActivity((prev) => ({ ...prev, name: e.target.value }))
            }
          />
        </div>
        <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
          <Input
            size={"md"}
            type="text"
            label="duration"
            placeholder="Enter your duration"
            onChange={(e) =>
              setActivity((prev) => ({ ...prev, duration: e.target.value }))
            }
          />
        </div>
        <Button onClick={handleAddActivity} color="success">Add Activity</Button>
      </div>
    </div>
  );
};

export default AddActivity;
