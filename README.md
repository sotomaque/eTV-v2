# eTV React


 ![version](https://img.shields.io/badge/version-1.8.0-blue.svg) ![license](https://img.shields.io/badge/license-MIT-blue.svg) [![GitHub issues open](https://img.shields.io/github/issues/creativetimofficial/material-kit-react.svg?maxAge=2592000)](https://github.com/creativetimofficial/material-kit-react/issues?q=is%3Aopen+is%3Aissue) [![GitHub issues closed](https://img.shields.io/github/issues-closed-raw/creativetimofficial/material-kit-react.svg?maxAge=2592000)](https://github.com/creativetimofficial/material-kit-react/issues?q=is%3Aissue+is%3Aclosed) [![Join the chat at https://gitter.im/NIT-dgp/General](https://badges.gitter.im/NIT-dgp/General.svg)](https://gitter.im/creative-tim-general/Lobby) [![Chat](https://img.shields.io/badge/chat-on%20discord-7289da.svg)](https://discord.gg/E4aHAQy)


![Product Presentation Image](https://s3.amazonaws.com/creativetim_bucket/products/83/original/opt_mk_react_thumbnail.jpg)

**[Material Kit React](https://demos.creative-tim.com/material-kit-react/#/?ref=mkr-readme)** is a Free Material-UI Kit with a fresh, new design inspired by Google's material design and is was developed using [create-react-app](https://www.npmjs.com/package/create-react-app). You asked for it, so we built it. It's a great pleasure to introduce to you the material concepts in an easy to use and beautiful set of components. Along with the restyling of the Material-UI elements, you will find three fully-coded example pages, to help you design your next project.

**[Material Kit React](https://demos.creative-tim.com/material-kit-react/#/?ref=mkr-readme)** makes use of light, surface and movement. It uses a deliberate color choice, edge-to-edge imagery and large scale typography. The general layout resembles sheets of paper following multiple different layers, so that the depth and order is obvious. The navigation stays mainly on the left and the actions on the right.

This new design has elements that have been the result of research regarding ink and paper and the way objects and materials interact in real life. The result is a beautiful and consistent set of elements that can get you started with your next project. Material Kit React is a great tool if you are looking to create a web presence for your Android application and need to be consistent, leaving the impression of visually similar elements. It is also a great resource in its own right, looking gorgeous and helping you build your web pages.

**[Material Kit React](https://demos.creative-tim.com/material-kit-react/#/?ref=mkr-readme)** was built with the help of [create-react-app](https://github.com/facebook/create-react-app) and it uses a framework built by our friends from **[Material-UI](https://material-ui.com/)**, who did an amazing job creating the backbone for the material effects, animations, ripples and transitions. Big thanks to this team for the effort and forward thinking they put into it.


## Table of Contents

* [Quick Start](#quick-start)
* [Documentation](#documentation)
* [File Structure](#file-structure)
* [Browser Support](#browser-support)
* [Resources](#resources)
* [Reporting Issues](#reporting-issues)
* [Licensing](#licensing)


## Quick start

- `npm i material-kit-react`
- [Download from Github](https://github.com/creativetimofficial/material-kit-react/archive/master.zip).
- [Download from Creative Tim](https://www.creative-tim.com/product/material-kit-react).
- Install with [Bower](https://bower.io/): ```bower install material-kit-react```.
- Clone the repo: `git clone https://github.com/creativetimofficial/material-kit-react.git`.


## Documentation
The documentation for the Material Kit React is hosted at our [website](https://demos.creative-tim.com/material-kit-react/#/documentation/tutorial).


## File Structure
Within the download you'll find the following directories and files:

```
material-kit-react
.
├── CHANGELOG.md
├── ISSUE_TEMPLATE.md
├── LICENSE.md
├── README.md
├── bower.json
├── gulpfile.js
├── jsconfig.json
├── package.json
├── Documentation
│   ├── assets
│   │   ├── css
│   │   ├── img
│   │   │   └── faces
│   │   └── js
│   └── tutorial-components.html
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src
    ├── index.js
    ├── logo.svg
    ├── assets
    │   ├── css
    │   │   └── material-kit-react.css.map
    │   ├── img
    │   │   ├── examples
    │   │   └── faces
    │   ├── jss
    │   │   ├── material-kit-react
    │   │   │   ├── components
    │   │   │   └── views
    │   │   │       ├── componentsSections
    │   │   │       ├── landingPageSections
    │   │   └── material-kit-react.js
    │   └── scss
    │       ├── core
    │       │   ├── mixins
    │       │   └── variables
    │       ├── plugins
    │       └── material-kit-react.scss
    ├── components
    │   ├── Badge
    │   │   └── Badge.js
    │   ├── Card
    │   │   ├── Card.js
    │   │   ├── CardBody.js
    │   │   ├── CardFooter.js
    │   │   └── CardHeader.js
    │   ├── Clearfix
    │   │   └── Clearfix.js
    │   ├── CustomButtons
    │   │   └── Button.js
    │   ├── CustomDropdown
    │   │   └── CustomDropdown.js
    │   ├── CustomInput
    │   │   └── CustomInput.js
    │   ├── CustomLinearProgress
    │   │   └── CustomLinearProgress.js
    │   ├── CustomTabs
    │   │   └── CustomTabs.js
    │   ├── Footer
    │   │   └── Footer.js
    │   ├── Grid
    │   │   ├── GridContainer.js
    │   │   └── GridItem.js
    │   ├── Header
    │   │   ├── Header.js
    │   │   └── HeaderLinks.js
    │   ├── InfoArea
    │   │   └── InfoArea.js
    │   ├── NavPills
    │   │   └── NavPills.js
    │   ├── Pagination
    │   │   └── Pagination.js
    │   ├── Parallax
    │   │   └── Parallax.js
    │   ├── Snackbar
    │   │   └── SnackbarContent.js
    │   └── Typography
    │       ├── Danger.js
    │       ├── Info.js
    │       ├── Muted.js
    │       ├── Primary.js
    │       ├── Quote.js
    │       ├── Small.js
    │       ├── Success.js
    │       └── Warning.js
    └── views
        ├── Components
        │   ├── Components.js
        │   └── Sections
        │       ├── SectionBasics.js
        │       ├── SectionCarousel.js
        │       ├── SectionCompletedExamples.js
        │       ├── SectionDownload.js
        │       ├── SectionExamples.js
        │       ├── SectionJavascript.js
        │       ├── SectionLogin.js
        │       ├── SectionNavbars.js
        │       ├── SectionNotifications.js
        │       ├── SectionPills.js
        │       ├── SectionTabs.js
        │       └── SectionTypography.js
        ├── LandingPage
        │   ├── LandingPage.js
        │   └── Sections
        │       ├── ProductSection.js
        │       ├── TeamSection.js
        │       └── WorkSection.js
        ├── LoginPage
        │   └── LoginPage.js
        └── ProfilePage
            └── ProfilePage.js
```


## Reporting Issues

We use GitHub Issues as the official bug tracker for the Material Kit. Here are some advices for our users that want to report an issue:

1. Make sure that you are using the latest version of the Material Kit. Check the CHANGELOG from your dashboard on our [website](https://www.creative-tim.com/).
2. Providing us reproducible steps for the issue will shorten the time it takes for it to be fixed.
3. Some issues may be browser specific, so specifying in what browser you encountered the issue might help.

## Licensing

- Copyright 2019 Creative Tim (https://www.creative-tim.com/)

- Licensed under MIT (https://github.com/creativetimofficial/material-kit/blob/master/LICENSE.md)
