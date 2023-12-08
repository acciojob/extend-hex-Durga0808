const extendHex = (shortHex) => {
  // write your code here
	let hexcode="#"
	let n=shortHex.length;
    for (let i = 0; i < n; i++) {
   if(shortHex[i]!="#"){
  //console.log(shortHex[i]);
        hexcode+=shortHex[i]+shortHex[i];
        //console.log(hexcode)
        }
}
    return hexcode;
	
};

// Do not change the code below.
// const shortHex = prompt("Enter Short Hex.");
// alert(extendHex(shortHex));
