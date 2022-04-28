// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

const longestCommonPrefix = (strs) => {
  if (strs.length === 0 || strs === undefined) return "";

  let prefix = strs[0];
  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.slice(0, -1);

      if (prefix === "") prefix = "";
    }
  }

  return prefix;
};

const strs = ["flower", "flow", "flight"];

console.log(longestCommonPrefix(strs));
