/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function (emails) {
  const emailSet = new Set();

  for (const email of emails) {
    let i = 0;
    let local = "";

    while (email[i] !== "@" && email[i] !== "+") {
      if (email[i] !== ".") {
        local += email[i];
      }
      i++;
    }

    while (email[i] !== "@") {
      i++;
    }

    let domain = email.slice(i);

    emailSet.add(local + domain);
  }

  return emailSet.size;
};
