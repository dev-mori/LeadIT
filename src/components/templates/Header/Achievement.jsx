import React, {useContext} from 'react'
import { useSelector } from "react-redux";
import { AuthContext } from "../../../firebase/AuthService";

export default function Achievement() {
  const dots = useSelector((state) => state.dots)
  const user = useContext(AuthContext);
  console.log(dots)
  console.log(user)
  return (<div>☆</div>)
}
