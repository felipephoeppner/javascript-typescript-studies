function myScope() {
  const form = document.querySelector(".form");
  const resultElement = document.querySelector(".result");
  const people = [];

  // const person = {
    //     firstName: "",
    //     lastName: "",
    //     weight: 0,
    //     height: 0,
    // createPerson(firstName, lastName, weight, height) {
    //   return {
    //     firstName: firstName,
    //     lastName: lastName,
    //     weight: weight,
    //     height: height,
    //   };
    // },
    // addPerson(person) {
    //   people.push(person);
    //   console.log("Added", person.firstName);
    // },
    // listValues(people){
    //   resultElement.innerHTML += <p>${}</p>
    // }
  //};
  // Prevents the default form submission behavior
  function handleFormSubmit(event) {
    event.preventDefault();
    const firstName = form.querySelector(".first-name").value;
    const lastName = form.querySelector(".last-name").value;
    const weight = form.querySelector(".weight").value;
    const height = form.querySelector(".height").value;

    people.push({
      firstName: firstName,
      lastName:lastName,
      weight: weight,
      height:height
    })

    resultElement.innerHTML += `<p>${firstName} ${lastName} ${weight} ${height}</p>`;


    //console.log(firstName, lastName, weight, height);
    //const result = person.createPerson(firstName, lastName, weight, height);
    //person.addPerson(result);
    //person.listValues(people);
  }
  form.addEventListener("submit", handleFormSubmit);
  // form.onsubmit = function(event){
  //     event.preventDefault()
  // }
}

myScope();

// Get the form data, create an object, and add it to the array regardless of the values
// Log the array to inspect the objects inside it
// Create a paragraph as the result inside the div
