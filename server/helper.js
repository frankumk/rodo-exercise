
//assumed the count is the vehicle_count sum of all matches
const vehicleCounter = (matches) => {
  return matches.reduce((sum,match)=>{
    return sum + match.vehicle_count
  },0)
}

//make/model match count
const modelCounter = (matches) => {
  let modelIdentity=[];
  let found;

  //goes through matches to see if the make/model
  //exists in modelID. If not, pushes it to modelID.
  //If in modelID, adds vehicle_counts for make/model in modelID
  matches.forEach(match => {
    found = modelIdentity.find((el) => {
      return el.model === match.model;
    }); 
    if(!found){
      modelIdentity.push(match)
    }else{
      const index = modelIdentity.indexOf(found)
      modelIdentity[index].vehicle_count += found.vehicle_count
    }
  })
  return modelIdentity;
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
    medianP: medianP
  }

}

module.exports = {
  vehicleCounter,
  priceCalcs,
  modelCounter
}