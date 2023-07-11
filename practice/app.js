function pigIt(str) {
  //Code here

  let result = str.split(" ");
  console.log(result);
  return result
    .map((word) => {
      if (
        (97 <= word.charCodeAt(0) && word.charCodeAt(0) <= 122) ||
        (65 <= word.charCodeAt(0) && word.charCodeAt(0) <= 90)
      ) {
        return word.slice(1) + word[0] + "ay";
      }
      return word;
    })
    .join(" ");
}

console.log(pigIt("Pig latin is cool"));
console.log(pigIt("Hello world !"));
