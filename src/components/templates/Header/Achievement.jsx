import React from 'react'
import { useSelector } from "react-redux";

export default function Achievement() {
  const dots = useSelector((state) => state.dots)
  console.log(dots)
  return (<div>☆</div>)
}
