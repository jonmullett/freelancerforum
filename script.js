const priceSpan = document.querySelector("#avg-price");
const freelancerList = document.querySelector ("#freelancers");

const freelancers = [
    { name: "Dr. Slice", price: 25, occupation: "gardener" },
    { name: "Dr. Pressure", price: 51, occupation: "programmer" },
    { name: "Prof. Possibility", price: 43, occupation: "teacher" },
    { name: "Prof. Prism", price: 81, occupation: "teacher" },
//     { name: "Dr. Impulse", price: 43, occupation: "teacher" },
//     { name: "Prof. Spark", price: 76, occupation: "programmer" },
//     { name: "Dr. Wire", price: 47, occupation: "teacher" },
//     { name: "Prof. Goose", price: 72, occupation: "driver" },
  ];

  const names = ["Slice", "Pressure", "Possibility", "Prism"];
  const occupations = ["gardener", "programmer", "teacher", "teacher"];
  const prices = [25, 51, 43, 81];
  // const limit = 5;

  // const freelancer = document.querySelector ("freelancers");
//   const freelancerElement = freelancer.map ("name");
  

const addFreelancerIntervalId = setInterval(addFreelancer, 3000);

render(); // We call this function once to render the initial state

/**
 * Update the DOM to reflect the current state.
 * The term "render" is often used to describe this process.
 */
function render() {
    const freelancerList = document.querySelector("#freelancers");
    const listings = freelancers.map((person) => {
const newListing = document.createElement("li");
// newListing.innerText = `Name:${person.name} Occupation:${person.occupation} Price:$(person.price}`;
newListing.innerText = `Name:${person.name} Occupation:${person.occupation} Price:$${person.price}`;

return newListing;
})
freelancerList.replaceChildren(...listings);
}
// person.freelancerList.add name: ${person.name} Occupation:${person.occupation} Price:${person.price}";
// return newListing;

    // freelancerList.appendChild(...listings);

// console.log (...listngs);


  


  function addFreelancer() {
    const newFreelancer = {
    name: names[Math.floor(Math.random() * names.length)],
    occupation: occupations[Math.floor(Math.random() * occupations.length)],
    price: prices[Math.floor(Math.random() * prices.length)],
    };

    freelancers.push(newFreelancer);
    const averageRate = freelancers.reduce(
      (total, currentItem) => (total += currentItem.price), 
      0
    )
      / freelancers.length;
   
    priceSpan.innerText = averageRate.toFixed(2);
    render();
}
 



  

  // TODO: Stop adding shapes if we've reached the maximum number of shapes