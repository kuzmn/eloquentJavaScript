function lazyRobot({place, parcels}, route) {
  let pick=[],drop=[];
  for (p of parcels) {
    if (place != p.place) pick.push(findRoute(roadGraph, place, p.place));
    else drop.push(findRoute(roadGraph, place, p.address));
  }
  // the following is hinted
  route = pick.length!=0 ? pick.reduce((a,b)=>a.length<=b.length?a:b) : drop.reduce((a,b)=>a.length<=b.length?a:b);
  return {direction: route[0], memory: route.slice(1)};
}
