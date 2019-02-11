let voters = [];
let democratCandidates = [];
let republicanCandidates = [];
let independentCandidates = [];
class Person {
  constructor(name) {
    this.name = name;
  }
}
class Voter extends Person {
  constructor(name, ideology){
    super(name);
    this.ideology = ideology;
  }
  newVoter(){
  voters.push(this)
}
}
class Candidate extends Person {
  constructor(name, party, votes = 0){
    super(name);
    this.party = party;
    this.votes = votes;
  }
  newCandidate(){
  if (this.party === "Democrat") {
  democratCandidates.push(this)
}
  else if (this.party === "Republican") {
    republicanCandidates.push(this)
  }
  else if(this.party === "Independent"){
    independentCandidates.push(this)
  }
 }
}
function Vote() {
  let voty
   voters.forEach(function(ele){
    let x = Math.ceil(Math.random() * 5 )
    let y = Math.ceil(Math.random() * 4 )
    if (ele.ideology === "Liberal"){
     if (x <= 3){
       return voty = `Democrat`;
     }
     else if (x === 4) {
       return voty = `Independent`;
     }
     else if (x === 5) {
       return voty = `Republican`
     }}
     if (ele.ideology === "Neutral"){
      if (y <= 2){
        return voty = `Independent`;
      }
      else if (x === 3) {
        return voty = `Democrat`;
      }
      else if (x === 4) {
        return voty = `Republican`
      }}
      if (ele.ideology === "Conservative"){
       if (x <= 3){
         return voty = `Republican`;
       }
       else if (x === 4) {
         return voty = `Independent`;
       }
       else if (x === 5) {
         return voty = `Democrat`
       }}
    if ( voty === `Democrat`) {
      let x = Math.floor(Math.random() * democratCandidates.length);
        democratCandidates[x].votes++;
    }
    else if (voty === `Independent`) {
      let x = Math.floor(Math.random() * independentCandidates.length);
        independentCandidates[x].votes++;
    }
    else if (voty === `Republican`) {
      let x = Math.floor(Math.random() * republicanCandidates.length);
        republicanCandidates[x].votes++;
    }
  })
  }
let final = []
function win(){
// winner = democrateCandidates.reduce(function(current, acc){
// return candidate = (current.votes > acc.votes) ? current : acc })
final.push(democratCandidates.reduce(function(current, acc){
return candidate1 = (current.votes > acc.votes) ? current : acc }))
final.push(independentCandidates.reduce(function(current, acc){
return candidate2 = (current.votes > acc.votes) ? current : acc })
)
final.push(republicanCandidates.reduce(function(current, acc){
return candidate3 = (current.votes > acc.votes) ? current : acc })
)
return final.reduce(function(current,acc){
  return winner = (current.votes > acc.votes) ? current : acc
})
}
$(document).ready(function() {
  $(`#voter-form form`).on('submit', function (event) {
    event.preventDefault();
    let voterName = $(`#voter-name`).val()
    let voterIdeology = $(`#voter-ideology`).val()
    let x = new Voter(voterName, voterIdeology)
    x.newVoter()
     $("#voter-list .list-group").append(`<li class="list-group-item">${x.name} - ${x.ideology}</li>`)
  })
  $(`#candidate-form form`).on(`submit`, function (event){
    event.preventDefault();
    candidateName = $(`#candidate-name`).val()
    candidateParty = $(`#candidate-party`).val()
    let y = new Candidate(candidateName,candidateParty)
    y.newCandidate()
    $("#candidate-list .list-group").append(`<li class="list-group-item">${y.name} - ${y.party}</li>`)
  })
  $(`#vote-btn-div`).on(`click`, function (event){
    Vote();
    win();
  alert(win().name +" "+ win().party);
  // alert(win().party);
});
})
