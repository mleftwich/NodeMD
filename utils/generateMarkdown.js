// function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  if (license == 'No license') {
    return "";
  } else {
  const licenseType = encodeURIComponent(license.replace('-', ' '))
  return `![${license}](https://img.shields.io/badge/${licenseType})`
}}


// function that returns the license link
function renderLicenseLink(license) {
  if (license == 'No license') {
    return "";
  } else {
    return `# Licensed under [${license}](https://opensource.org/licenses/${license}) `
}}


// TODO: Create a function to generate markdown for README
function generateMarkdown({
  title,
  license,
  description,
  contents,
  installation,
  usage,
  contributions,
  guidelines,
  tests,
  github,
  email,
}) {
  return `
  # ${title}
  ${renderLicenseBadge(license)}
\
  # ${description}
\
  # Table of Contents
  * ${contents}
\
  # Installation
   ${installation}
\
  # Usage
   ${usage}
\
  # Contributions
   ${contributions}
\
  # Guidelines
   ${guidelines}
\
  # Tests
   ${tests}
\
  # License
   ${renderLicenseLink(license)}
\
  # Questions
   For any questions you can find me at [github](https://www.https://github.com/${github}) or email me at [${email}](${email}) 
`;
}

module.exports = generateMarkdown;
