import { useContext } from "react";
import UseContext from "../context/context";

const Consumer = () => {
	const contextValue = useContext(UseContext);
	return <div>{contextValue}</div>
}

export default Consumer