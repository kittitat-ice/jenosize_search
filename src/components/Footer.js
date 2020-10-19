import React from "react";
import getQuadSeq from '../math/getQuadSeq';

function Footer() {

  // src/math/getQuadSeq.js
  const quad1 = [3,5,9,15]    // expect [23,33,45] // Question 2
  const quad2 = [1,3,7,13]    // expect [21,31,43]
  const quad3 = [2,9,18,29]   // expect [42,57,74]
  const quad4 = [4,15,32,55]  // expect [84,119,160]
  const nonquad = [1,3,5,9]   // expect "invalid"

  const handleOnClick = () => {
    const cb = getQuadSeq(quad1, 3) // (array, numberOfAnswer);
    alert(cb);
  }
  return (
    <div style={style}>
      <span style={{fontSize: 20, fontWeight: 'bold', marginRight: 15}}>Footer</span>
      <button onClick={handleOnClick}><span style={{fontSize: 18,fontWeight: 'bold'}}>Click here for Test No.2</span> (Check "components/Footer.js" for different input)</button>
    </div>
  );
}

export default Footer;

var style = {
    backgroundColor: '#faa',
    paddingLeft: 20,
    paddingTop: 10,
    position: "fixed",
    left: 0,
    bottom: 0,
    height: 60,
    width: "100%",
}