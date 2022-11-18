/**
 *
 * @returns A promise that is designed to resolve with a list of hobbits, or potentially fail with an failure object. The failure object includes a boolean success property and a string message property.
 */
function getList() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let potentialFail = true;
      // let potentialFail = Math.round(Math.random() * 100) < 10;
      if (potentialFail) {
        reject({ success: false, message: "Failed to get list of hobbits." });
      } else {
        resolve(["Bilbo", "Frodo", "Sam", "Merry", "Pippin"]);
      }
    }, 10);
  });
}


const err = document.getElementById("error");
const list = document.getElementById("list");
// TODO: Handle the resolved or rejected states of the promise




getList().then((result) => {
  for (hobbit of result) {
    let hobbitListUl = document.getElementById("list");
    let listItem = document.createElement("li");
    listItem.textContent = hobbit;
    hobbitListUl.appendChild(listItem);
  };
  console.log(result);
}).catch((error) => {
  document.getElementById("error").textContent = `${error.message}`;
  console.log(error);
  })



// TODO: If the promise resolves with the list of hobbits
// Render the list of hobbits as list items within the unordered list with id="list" (check the index.html file)

// TODO: If the promise rejects with the failure object
// Display the failure message in the paragraph element with id="error" (check index.html file)
