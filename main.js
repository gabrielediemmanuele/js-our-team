// Creo un array per i membri del team
const teamMembers = [
  {
    Name: "Wayne Barnett",
    Role: "Founder & CEO",
    userPhoto: "./img/wayne-barnett-founder-ceo.jpg",
  },
  {
    Name: "Angela Caroll",
    Role: "Chief Editor",
    userPhoto: "./img/angela-caroll-chief-editor.jpg",
  },
  {
    Name: "Walter Gordon",
    Role: "Office Manager",
    userPhoto: "./img/walter-gordon-office-manager.jpg",
  },
  {
    Name: "Angela Lopez",
    Role: "Social Media Manager",
    userPhoto: "./img/angela-lopez-social-media-manager.jpg",
  },
  {
    Name: "Scott Estrada",
    Role: "Developer",
    userPhoto: "./img/scott-estrada-developer.jpg",
  },
  {
    Name: "Barbara Ramos",
    Role: "Graphic Designer",
    userPhoto: "./img/barbara-ramos-graphic-designer.jpg",
  },
];

//collegamenti al DOM
const membersCards = document.getElementById("card-container");

// STAMPO SU CONSOLE i membri del team // li faccio apparire sul DOM
for (let tMembers of teamMembers) {
  console.log(
    tMembers.Name + " - " + tMembers.Role + " - " + tMembers.userPhoto
  );
  membersCards.innerHTML += `
    
    <div class="col-4">
    <div class="card mb-5" style="width: 18rem">
            <img src="${tMembers.userPhoto}" class="card-img-top" alt="..." />
        <div class="card-body">
            <h5 class="card-title"> ${tMembers.Name} </h5>
            <p class="card-text">${tMembers.Role}</p>
        </div>
    </div>
 </div>
`;
}
//** per stampare i membri del team in modo semplice */
/* const membersContainer = document.getElementById("members-cont"); */
/* membersContainer.innerHTML += `
    <div>
    Name: ${tMembers.Name} | Role: ${tMembers.Role} | Photo: ${tMembers.userPhoto} </div>
    `; */
