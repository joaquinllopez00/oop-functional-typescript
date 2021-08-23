let num = 123;

function toString(val: any) {
  return val.toString();
}

const str = toString(num);

//immutable data

const data = Object.freeze([1, 2, 3, 4, 5, 6]);

// functions as arguments

const addEmoji = (val: any) => toString(val) + "!";

const emojiData = data.map(addEmoji);

//Functions as return value

const appendExclamation = (fixed) => (dynamic) => fixed + dynamic;

