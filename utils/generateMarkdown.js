// function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  if (license == 'No license') {
    return "";
  } else {
  //const licenseType = encodeURIComponent(license.replace('-', ' '))
  return `![${license}](https://img.shields.io/static/v1?label=License&message=${license}&color=green)`
}}


// function that returns the license link
function renderLicenseLink(license) {
  if (license == 'No license') {
    return "";
  } else {
    return `Licensed under [${license}](https://opensource.org/licenses/${license}) `
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
  ${renderLicenseBadge(license)}
  # ${title}
\
  
  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Guidelines](#guidelines)
  * [Tests](#tests)
  * [License](#license)
  * [Questions](#questions)

  ${description}

  ## Installation
   ${installation}


  ## Usage
   ${usage}


  ## Contributing
   ${contributions}


  ## Guidelines
   ${guidelines}


  ## Tests
   ${tests}


  ## License
   ${renderLicenseLink(license)}
\
  ## Questions
   For any questions you can find my GitHub at [${github}](https://www.https://github.com/${github}) or email me at [${email}](${email}) 
`;
}

module.exports = generateMarkdown;
