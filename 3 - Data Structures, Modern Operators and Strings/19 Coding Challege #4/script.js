"use strict";
document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));
document.querySelector("button").addEventListener("click", function () {
  const text = document.querySelector("textarea").value;
  // console.log(text);
  // removing new line tag and converting it into array
  const rows = text.split("\n");
  console.log(rows);
  for (let row of rows) {
    let [first, second] = row.trim().toLowerCase().split("_");
    // console.log(row, first, second);
    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(output);
  }
});

/*
underscore_case
 first_name
Some_Variable
 calculate_AGE
delayed_departure
*/
