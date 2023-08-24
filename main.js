// Creo un array per i membri del team
const teamMembers = [
  {
    Name: "Wayne Barnett",
    Role: "Founder & CEO",
    userPhoto: "wayne-barnett-founder-ceo.jpg",
  },
  {
    Name: "Angela Caroll",
    Role: "Chief Editor",
    userPhoto: "angela-caroll-chief-editor.jpg",
  },
  {
    Name: "Walter Gordon",
    Role: "Office Manager",
    userPhoto: "walter-gordon-office-manager.jpg",
  },
  {
    Name: "Angela Lopez",
    Role: "Social Media Manager",
    userPhoto: "angela-lopez-social-media-manager.jpg",
  },
  {
    Name: "Scott Estrada",
    Role: "Developer",
    userPhoto: "scott-estrada-developer.jpg",
  },
  {
    Name: "Barbara Ramos",
    Role: "Graphic Designer",
    userPhoto: "barbara-ramos-graphic-designer.jpg",
  },
];

// STAMPO SU CONSOLE i membri del team
const membersContainer = document.getElementById("members-cont");
for (let tMembers of teamMembers) {
  console.log(
    tMembers.Name + " - " + tMembers.Role + " - " + tMembers.userPhoto
  );
  membersContainer.innerHTML += `
    <div>
    Name: ${tMembers.Name} | Role: ${tMembers.Role} | Photo: ${tMembers.userPhoto} </div>
`;
}

// Stampo sul DOM i membri del team
