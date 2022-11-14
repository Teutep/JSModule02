let numofcand = parseInt(prompt("Number of candidates:"))
let candidates = []
for (let i = 0; i > numofcand; i++) {
  let cand_name = prompt("Name of a candidate: " + (i+1));
  let candidate = {
    name : cand_name,
    votes : 0
  }
  candidates.push(candidate);
}
console.log(candidates);