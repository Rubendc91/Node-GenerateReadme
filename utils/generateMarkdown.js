// '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
// '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
// '[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
if (license == "MIT") {
  return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)'
}else if (license == "Apache"){
  return '![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)'
}else if (license == "GPLv3"){
  return '![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)'
}else {
  return ""
}
console.log(badge)
}
renderLicenseBadge();
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
if (license == "MIT") {
  return '(https://opensource.org/licenses/MIT)'
}else if (license == "Apache") {
  return '(https://opensource.org/licenses/Apache-2.0)' 
}else if (license == "GPLv3"){
  return '(https://www.gnu.org/licenses/gpl-3.0)'
}else {
  return ""
}
}
console.log(renderLicenseLink())
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license = "MIT"){
    return `Read more about ${license} here:`
}if (license = "Apache"){
  return `Read more about ${license} here:`
}if (license = "GPLv3"){
  return `Read more about ${license} here:`
}else {
  return ""
}
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## LicensingBadges:
  ${renderLicenseBadge(data.license)}
  ## Table of Contents 
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Testing](#testing)
  - [Additional Info](#additional-info)
  ## Description:
  ${data.description}
  ## Installation:
  ${data.installation}
  ## Usage:
  ${data.usageInfo}
  ## License
  ${renderLicenseSection(data.license)}
  ${renderLicenseLink(data.license)}
  ## Contribution:
  ${data.contributing}
  ## Testing:
  ${data.tests}
  ## Any Questions? contact me @:
  - Github: ${data.gitHub}(https://github.com/${data.gitHub})
  - Email: ${data.email} `;
}


module.exports = generateMarkdown;
