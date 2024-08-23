# Full-Stack Developer Bootcamp Module 12 - Challenge: Employee Tracker

## Table of Contents

- [Description](#description)
- [Install](#install)
- [Usage](#usage)
- [Generator](#generator)
- [Badge](#badge)
- [Credit and Source Code](#credits-and-code-source)
- [Related Efforts](#related-efforts)
- [Maintainers](#maintainers)
- [Contributing](#contributing)
- [License](#license)
- [Tests](#tests)
- [GitHub Repository Location (HTTPS)](#github-repository-location-https)
- [GitHub Pages Location](#github-pages-location)
- [Application Screenshots](#application-screenshots) 


## Description

The README Generator is a Node.js Command-Line Interface (CLI) based application that enables Users to quickly and professionally create Project README files, in Markdown (.md) format by answering a simple string of questions regarding the User's Project.  

The README Generator programatically creates README files with content determined by User responses to questions associated with the individual sections of a model README, and enhances the generated Markdown file with similarly programattically-generated colored badges, and URL references.

The README Generator ensures consistency of generated output, through programmatically-standardized specifications defined by the User questionnaire, and makes available the output Markdown file in a defined (predictable) location and file format that enables automated ingestion to, or use through and end-point application.

As developed, the README Generator is only accessible through a local instance, specific to each accessing computer.

Artifacts (README Markdown files) generated through local instances of the README Generator will be available to all Users of the install computer, held in on-device storage and, consequently, not currently accessible through the Web unless deployed as a component of an online application or other end-point.

The README Generator source code is published on GitHub, and may be cloned to individual User computers to instantiate local versions.

The app utilizes a Node.js CLI-based (Inquirer Module) Form to ingest User requirements input, and JavaScript (mediated by Node) to generate local Markdown file output. 

Because the README Generator output files are held in on-device storage, generated artifacts, though not Inquirer-mediated questionnaire responses themselves, will persist across User sessions on individual, hosting computers.


## Installation

The README Generator source code may be downloaded from its GitHub repository, and run directly by a hosting computer.

No Installation of the SVG Logo Generator itself is required.

However, local computers must hold an installation of Node.js in order the run the README Generator application.


## Usage

The README Generator is intended for use by one or more Users to generate README files, in Markdown format, specific to User-selected requirements (i.e., README content) identified through a CLI-based questionaire, and maintain the locally-generated Markdown file artifacts which persist across multiple sessions. 

All Users of the README Generator on a local computer will have full access to all generated artifacts.


## Credits and Code Source

Code, where referenced from a third-party Source, is noted in Comments accompanying the relevant Code lines.


## License

Copyright <YEAR> <COPYRIGHT Chris Milazzo>


MIT License

Copyright (c) 2024 MeanderingBrook

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


## Badges

N / A


## Features

N / A


## How to Contribute

N / A


## Tests

Specification output testing and data evaluation, see index-test.js, and log.txt ('archive' Folder)

`console.log` output of specification data specific to User requirements; see index.js and generateMarkdown.js ('utils' Folder).


## GitHub Repository Location (HTTPS)

https://github.com/MeanderingBrook/09_Challenge_README-Generator.git


## GitHub Pages Location

Not Applicable: Application is a Node.js Command Line Interface (CLI)-based application that cannot be hosted through a browser interface.


## Application Screenshots

![README Generator: CLI Questionnaire - Screenshot 01](./assets/images/README-Generator_CLI-Questionnaire_Screenshot-01.png?raw=true "README Generator: CLI Questionnaire")

![README Generator: CLI Questionnaire with Validation Warning - Screenshot 02](./assets/images/README-Generator_CLI-Questionnaire-Validation-Warning_Screenshot-02.png?raw=true "README Generator: CLI Questionnaire with Validation Warning")

![README Generator: CLI Questionnaire with Process Completion Notice - Screenshot 03](./assets/images/README-Generator_CLI-Questionnaire-Process-Completion-Notice_Screenshot%2003.png?raw=true "README Generator: CLI Questionnaire with Process Completion Notice")
