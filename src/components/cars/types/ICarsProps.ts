import {ChildProps} from "react-apollo/types";
import {Car} from "../../../model/Car";

export interface ICarsProps extends ChildProps<{}, {}>{
    cars: Car[];
    onDataArrival: any
}