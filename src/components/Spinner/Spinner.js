import React,{  CSSProperties } from "react";

import ClipLoader from "react-spinners/ClipLoader";
function Spinner({loading}) {
  return (
    <ClipLoader loading={loading} color="black" size={150} speedMultiplier={.8} cssOverride={{
      alignSelf: "center",
    }}/>
  )
}



export default Spinner