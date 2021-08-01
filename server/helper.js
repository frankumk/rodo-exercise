
//assumed the count is the vehicle_count sum of all matches
const vehicleCount = (matches) => {
  console.log(typeof matches)
  return matches.reduce((sum,match)=>{
    return sum + match.vehicle_count
  },0)
}

const priceCalcs = (matches) => {

}

module.exports = {
  vehicleCount,
  priceCalcs
}