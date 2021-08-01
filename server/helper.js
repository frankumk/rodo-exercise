
//assumed the count is the vehicle_count sum of all matches
const vehicleCounter = (matches) => {
  return matches.reduce((sum,match)=>{
    return sum + match.vehicle_count
  },0)
}

//send back min price, max price, median price
const priceCalcs = (matches) => {
  if(matches.length===1){
    return {
      minP: matches[0].price,
      maxP: matches[0].price,
      medianP: matches[0].price
    }
  }
  const mid = Math.ceil(matches.length / 2);
  const medianP = matches.length % 2 !== 0 ? matches[mid].price : (matches[mid - 1].price + matches[mid].price) / 2;
  return {
    minP: matches[0].price,
    maxP: matches[matches.length-1].price,
    median: medianP
  }

}

module.exports = {
  vehicleCounter,
  priceCalcs
}