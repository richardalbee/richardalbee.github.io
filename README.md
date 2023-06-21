<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>

<!-- LegoPython -->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]


<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/richardalbee/portfolio-development">
    <img src="public/logo192.png" alt="Logo" width="160" height="160">
  </a>

<h3 align="center">Richard Albee Portfolio</h3>

  <p align="center">
    Github repo devoted to developing Richard Albee's react portfolio website.
    <br />
    <a href="https://github.com/richardalbee/portfolio-development"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/richardalbee/portfolio-development">View Portfolio</a>
    ·
    <a href="https://github.com/richardalbee/portfolio-development/issues">Report Bug</a>
    ·
    <a href="https://github.com/richardalbee/portfolio-development/issues">Request Feature</a>
  </p>
</div>




<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#Features">Features</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#local testing">Local Testing</a></li>
        <li><a href="#push to production">Push to production</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project
As an ethusiastic technical lead and generalist, the need for my portfolio website was inspired by the need to showcase my breadth of technical capacity. A resume listing my accomplishments fails to capture my technical ability un the same way as my portfolio does.

The goal of my portfolio website is two-fold. Demonstrate my other skills and abilities while simultaneously demonstrating my ability to develop a website and CI/CD workflows into Github. My portfolio website intends to show I am capable of digging into and developing solutions for broad range of technical areas.
<p align="right">(<a href="#readme-top">back to top</a>)</p>


### Features

- [ ] **Dynamic About Me Section**
- [ ] **Resume Link**
- [ ] **Github Actions Deployments**
- [ ] **Contact Me Email**
  - [ ] Up to 100 email a month via EmailJS
- [ ] **Project Categories**
  - [ ] Projects, Scripts, and Technical Writing searching
- [ ] **Profile Views Counter in Footer Today/Totals**


<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- GETTING STARTED -->
## Getting Started

This is an guide for testing website changes locally.

### Prerequisites

1. You'll need to install Node.js >=v18.0+ http://nodejs.org/
This project uses node -v 18.16.0 and npm -v 9.5.1.

### Local Testing (Master Branch)

From project root:

Create the local test environment (One Time Only)
```js
npm install
```

Start the development website environment locally
```js
npm run start
```

 http://localhost:3000/ will automatically reload if you change any of the source files.

### Push to Production (GH-Pages Branch)

There are two ways you can update the website.  After merging your changes to master, you can manually build the compiled website source files or use github actions. Compiled files are copied to the gh-pages branch where they are then deployed. 

Github Actions Deploy:
Create a release to trigger the github action, named Deploy Node.js package to portfolio website, to compile the node.js files and deploy. Use the following formatting for creating a release

Tag: v0.0.1 -> v0.0.2 increment by 0.0.1 unless a major version.
Release Name: {version} Release Name

There are built in tests looking to see if the website is comiling and rendering objects properly. These are configured in /src/ setupTests.js and App.test.js


Manual Deploy:

From project root:
```js
npm run build
```
Copy files in the build/ directory to the root of the gh-pages branch.


<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- ROADMAP -->
## Roadmap

- [ ] Update About-Me background and center headshot photo
- [ ] Update projects subwindow to have meaningful sections
- [ ] Add Technical Writing and Scripting project examples
- [ ] Format Resume education section cleanly

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- CONTACT -->
## Contact

* []()Email - ralbee1@iwu.edu
* []()Project Link: [https://github.com/richardalbee/portfolio-development](https://github.com/richardalbee/portfolio-development)


<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/ralbee1/legopython.svg?style=for-the-badge
[contributors-url]: https://github.com/richardalbee/portfolio-development/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/ralbee1/legopython.svg?style=for-the-badge
[forks-url]: https://github.com/richardalbee/portfolio-development/network/members
[stars-shield]: https://img.shields.io/github/stars/ralbee1/legopython.svg?style=for-the-badge
[stars-url]: https://github.com/richardalbee/portfolio-development/stargazers
[issues-shield]: https://img.shields.io/github/issues/ralbee1/legopython.svg?style=for-the-badge
[issues-url]: https://github.com/richardalbee/portfolio-development/issues
[license-shield]: https://img.shields.io/github/license/ralbee1/legopython.svg?style=for-the-badge
[license-url]: https://github.com/richardalbee/portfolio-development/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/Richard-Albee
[product-screenshot]: images/screenshot.png
[python.org]: https://www.python.org/static/img/python-logo.png
[python-url]: https://www.python.org/
[pypi.org]: https://pypi.org/static/images/logo-small.2a411bc6.svg
[pypi-url]: https://pypi.org/project/pip/
