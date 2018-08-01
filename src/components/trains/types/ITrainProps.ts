import {ChildProps} from "react-apollo/types";
import {Train} from "../../../model/Train";

export interface ITrainProps extends ChildProps<{}, {}>{
    trains: Train[];
    onDataArrival: any
}