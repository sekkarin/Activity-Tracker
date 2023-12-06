import React from "react";
import { useAppDispatch } from "../../hooks/redux";
import { Button } from "@nextui-org/react";
import { DELETE_ACTIVITY } from "../../features/activitys/acticity";
type Props = {
  id: string;
  name: string;
  duration: string;
};

const DeleteActivity = (props: Props) => {
  const dispath = useAppDispatch();
  const handleDeleteActivity = () => {
    dispath(DELETE_ACTIVITY(props));
  };
  return (
    <Button className="w-24 self-center" color="danger" onClick={handleDeleteActivity}>
      Delete
    </Button>
  );
};

export default DeleteActivity;
