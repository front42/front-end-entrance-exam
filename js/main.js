'use strict';

import '../css/style.css';
import html2pdf from 'html2pdf.js';

const container = document.createElement('div');
container.classList.add('container');
document.body.append(container);

// document.addEventListener('mouseover', e => e.target.style.color = 'green');
// document.addEventListener('mouseout', e => e.target.style.color = 'inherit');

const printer = element => {
  html2pdf(element, {
    filename: 'CV.pdf',
    image: { type: 'jpeg', quality: 1 },
    html2canvas: { scale: 4, dpi: 330, letterRendering: true },
    jsPDF: { orientation: 'portrait' },
  });
};

const downloadBtn = document.createElement('button');
downloadBtn.classList.add('download-btn');
downloadBtn.textContent = 'Download';
document.body.append(downloadBtn);
downloadBtn.addEventListener('click', () => printer(container));

// create info-blocks
const infoBlockNames = [
  'profile-img',
  'hello',
  'languages',
  'experience',
  'tools',
  'education',
  'interests',
];

const profileImg = document.createElement('img');
// 'cause of config base: Files in the public directory are served at the root path. Instead of /public/profileImgBig.png, use /profileImgBig.png.
profileImg.src = 'profile-img.png'; // public/
profileImg.classList.add('info-block', `${infoBlockNames[0]}`);
container.append(profileImg);

for (let i = 1; i < infoBlockNames.length; i++) {
  const infoBlock = document.createElement('div');
  infoBlock.classList.add('info-block', `${infoBlockNames[i]}`);
  infoBlock.setAttribute('contenteditable', true);
  container.append(infoBlock);
  if (i > 1) {
    const blockName = document.createElement('h2');
    blockName.textContent =
      infoBlockNames[i][0].toUpperCase() + infoBlockNames[i].slice(1);
    infoBlock.append(blockName);
  }
}

// Hello
const helloBlock = document.querySelector('.hello');
const helloParagraph = document.createElement('p');
helloParagraph.classList.add('hello-paragraph');
helloParagraph.innerText = 'Hello👋🏻 I’m';
helloBlock.append(helloParagraph);
const authorName = document.createElement('h1');
authorName.textContent = 'Karthik SR';
helloBlock.append(authorName);
const speciality = document.createElement('p');
speciality.textContent = 'UX/UI Designer';
speciality.classList.add('speciality');
helloBlock.append(speciality);

// Languages
const languagesNames = ['English', 'Malayalam', 'Hindi'];
const languagesBlock = document.querySelector('.languages');
for (let i = 0; i < languagesNames.length; i++) {
  const language = document.createElement('div');
  language.classList.add('language');
  language.textContent = languagesNames[i];
  languagesBlock.append(language);
  const languageMeter = document.createElement('span');
  languageMeter.setAttribute('value', 100);
  languageMeter.setAttribute('min', 0);
  if (i == 2) {
    languageMeter.setAttribute('value', 77);
  }
  languageMeter.setAttribute('max', 100);
  languageMeter.classList.add('language-meter');
  language.append(languageMeter);
}

// Experience
const experiencePositions = ['manager', 'designer', 'assistant'];
const experienceBlock = document.querySelector('.experience');
for (let i = 0; i < experiencePositions.length; i++) {
  const experienceSubblock = document.createElement('div');
  experienceSubblock.classList.add(
    'experience-subblock',
    experiencePositions[i]
  );
  experienceBlock.append(experienceSubblock);
}

// Manager
const manager = document.querySelector('.manager');
const managerTime = document.createElement('div');
managerTime.classList.add('manager-time');
managerTime.textContent = 'Jun. 2023 - Present';

const mostRecentMark = document.createElement('div');
mostRecentMark.classList.add('most-recent-mark');
mostRecentMark.textContent = 'most recent';
managerTime.append(mostRecentMark);
manager.append(managerTime);

const managerPositionAndOrganization = document.createElement('div');
managerPositionAndOrganization.classList.add(
  'manager-position-and-organization'
);

const managerPositionInfo = document.createElement('div');
managerPositionInfo.classList.add('position-info'); // ?

const managerPositionName = document.createElement('p');
managerPositionName.classList.add('position-name');
managerPositionName.textContent = 'Marketing Manager';
managerPositionInfo.append(managerPositionName);

const managerOrganizationInfo = document.createElement('span');
managerOrganizationInfo.textContent = 'Pankayam | Full-time';
managerOrganizationInfo.classList.add('organization-info');
managerPositionInfo.append(managerOrganizationInfo);
managerPositionAndOrganization.append(managerPositionInfo);

const managerResponsibilitiesList = document.createElement('ul');
managerResponsibilitiesList.classList.add('responsibilities');

const managerResponsibilities = [
  'Strategy development and planning of campaigns that promote the business and generate genuine traffic',
  'SEO Content Creation for Blogs, Website, Social media',
];

for (let i = 0; i < managerResponsibilities.length; i++) {
  const li = document.createElement('li');
  li.textContent = managerResponsibilities[i];
  managerResponsibilitiesList.append(li);
}

managerPositionAndOrganization.append(managerResponsibilitiesList);
manager.append(managerPositionAndOrganization);

// Designer
const designer = document.querySelector('.designer');
const designerTime = document.createElement('p');
designerTime.textContent = '2017 - Present';
designerTime.classList.add('position-time');
designer.append(designerTime);

const designerPositionAndOrganization = document.createElement('div');
designerPositionAndOrganization.classList.add(
  'designer-position-and-organization'
);

const designerPositionInfo = document.createElement('div');
designerPositionInfo.classList.add('position-info'); // ?

const designerPositionName = document.createElement('p');
designerPositionName.classList.add('position-name');
designerPositionName.textContent = 'Graphic / Web designer';
designerPositionInfo.append(designerPositionName);

const designerOrganizationInfo = document.createElement('span');
designerOrganizationInfo.textContent = 'Freelance';
designerOrganizationInfo.classList.add('organization-info');
designerPositionInfo.append(designerOrganizationInfo);
designerPositionAndOrganization.append(designerPositionInfo);

const designerResponsibilitiesList = document.createElement('ul');
designerResponsibilitiesList.classList.add('responsibilities');

const designerResponsibilities = [
  'Development of internal projects from scratch, product design of brands',
  'Landing page, webapps and hybrid apps',
  'Coordinating with outside agencies, art services, web designer, marketing, printers, and colleagues as necessary.',
];

for (let i = 0; i < designerResponsibilities.length; i++) {
  const li = document.createElement('li');
  li.textContent = designerResponsibilities[i];
  designerResponsibilitiesList.append(li);
}

designerPositionAndOrganization.append(designerResponsibilitiesList);
designer.append(designerPositionAndOrganization);

// Assistant
const assistant = document.querySelector('.assistant');
const assistantTime = document.createElement('p');
assistantTime.textContent = 'Sep. 2021 - Jun. 2023';
assistantTime.classList.add('position-time');
assistant.append(assistantTime);

const assistantPositionAndOrganization = document.createElement('div');
assistantPositionAndOrganization.classList.add(
  'assistant-position-and-organization'
);

const assistantPositionInfo = document.createElement('div');
assistantPositionInfo.classList.add('position-info'); // ?

const assistantPositionName = document.createElement('p');
assistantPositionName.classList.add('position-name');
assistantPositionName.textContent = 'Legal Assistant';
assistantPositionInfo.append(assistantPositionName);

const assistantOrganizationInfo = document.createElement('pre');
assistantOrganizationInfo.innerText = 'Law Firm   |   Intern';
assistantOrganizationInfo.classList.add('organization-info');
assistantPositionInfo.append(assistantOrganizationInfo);
assistantPositionAndOrganization.append(assistantPositionInfo);

const assistantResponsibilitiesList = document.createElement('ul');
assistantResponsibilitiesList.classList.add('responsibilities');

const assistantResponsibilities = [
  'Provide administrative support to lawyer and enhance office effectiveness',
  'Handle communication with clients, witnesses etc.',
  'repare case briefs and summarize depositions, interrogatories and testimony',
];

for (let i = 0; i < assistantResponsibilities.length; i++) {
  const li = document.createElement('li');
  li.textContent = assistantResponsibilities[i];
  assistantResponsibilitiesList.append(li);
}

assistantPositionAndOrganization.append(assistantResponsibilitiesList);
assistant.append(assistantPositionAndOrganization);

// Tools
const toolsBlock = document.querySelector('.tools');
const toolsGroupsNames = ['design', 'no-code', 'artoficial intelligence'];
for (let i = 0; i < toolsGroupsNames.length; i++) {
  const toolsGroup = document.createElement('div');
  toolsGroup.classList.add(
    'tools-group',
    toolsGroupsNames[i].replaceAll(' ', '-')
  );
  const toolsGroupMark = document.createElement('span');
  toolsGroupMark.classList.add('tools-group-mark');
  toolsGroupMark.textContent = toolsGroupsNames[i];
  toolsGroupMark.setAttribute('contenteditable', true);
  toolsGroup.setAttribute('contenteditable', false);
  toolsGroup.append(toolsGroupMark);
  toolsBlock.append(toolsGroup);
}

// links in design-group
const designGroup = document.querySelector('.design');
const linksDesign = [
  'https://www.figma.com/',
  'https://www.adobe.com/cis_ru/products/photoshop.html',
  'https://www.adobe.com/products/illustrator.html',
  'https://www.adobe.com/products/premiere.html',
  'https://www.notion.so/',
  'https://meet.google.com/',
];
const logosDesign = [
  'logo-figma.svg',
  'logo-adobe-photoshop.svg',
  'logo-adobe-illustrator.svg',
  'logo-adobe-premiere.svg',
  'logo-notion.svg',
  'logo-meet.svg',
];
for (let i = 0; i < linksDesign.length; i++) {
  const link = document.createElement('a');
  link.setAttribute('href', linksDesign[i]);
  link.setAttribute('target', '_blank');
  const linkImg = document.createElement('img');
  linkImg.src = logosDesign[i];
  link.append(linkImg);
  designGroup.append(link);
}

// links in no-code-group
const noCodeGroup = document.querySelector('.no-code');
const linksNoCode = [
  'https://zapier.com/',
  'https://webflow.com/',
  'https://www.framer.com/',
  'https://wordpress.com/ru/',
];
const logosNoCode = [
  'logo-zapier.svg',
  'logo-webflow.svg',
  'logo-framer.svg',
  'logo-wordpress.svg',
];
for (let i = 0; i < linksNoCode.length; i++) {
  const link = document.createElement('a');
  link.setAttribute('href', linksNoCode[i]);
  link.setAttribute('target', '_blank');
  const linkImg = document.createElement('img');
  linkImg.src = logosNoCode[i];
  link.append(linkImg);
  noCodeGroup.append(link);
}

// links in artoficial-intelligence-group
const artoficialIntelligenceGroup = document.querySelector(
  '.artoficial-intelligence'
);
const linksArtoficialIntelligence = [
  'https://openai.com/chatgpt/',
  'https://copilot.microsoft.com/',
  'https://www.midjourney.com/',
];
const logosArtoficialIntelligence = [
  'logo-chat-gpt.svg',
  'logo-copilot.svg',
  'logo-midjourney.svg',
];
for (let i = 0; i < linksArtoficialIntelligence.length; i++) {
  const link = document.createElement('a');
  link.setAttribute('href', linksArtoficialIntelligence[i]);
  link.setAttribute('target', '_blank');
  const linkImg = document.createElement('img');
  linkImg.src = logosArtoficialIntelligence[i];
  link.append(linkImg);
  artoficialIntelligenceGroup.append(link);
}

// Education
const educationYears = ['2023', '2017 - 2022', '2017'];
const educationSpecialities = ['UI/UX', 'Law', 'Graphic Design'];
const educationTags = [
  '#UX #UI #research #DesignSystem #Ui #wireframing #figma #Ux',
  '#law #legalStudies #contracts #internationalLaws',
  '#branding #web #illustration #adobe',
];
const educationCourses = ['Coursera', 'University of Kerala', 'Coursera'];
const educationBlock = document.querySelector('.education');
for (let i = 0; i < educationYears.length; i++) {
  const educationSubblock = document.createElement('div');
  educationSubblock.classList.add('education-subblock');
  const subblockYear = document.createElement('h2');
  subblockYear.textContent = educationYears[i];
  educationSubblock.append(subblockYear);
  if (i == 0) {
    const heart = document.createElement('img');
    heart.src = 'yellow-heart.svg';
    educationSubblock.append(heart);
  }
  const subblockSpeciality = document.createElement('h2');
  subblockSpeciality.textContent = educationSpecialities[i];
  educationSubblock.append(subblockSpeciality);
  const subblockTags = document.createElement('span');
  if (i > 0) {
    subblockTags.classList.add('green-tags');
  }
  subblockTags.textContent = educationTags[i];
  educationSubblock.append(subblockTags);
  const subblockCourse = document.createElement('span');
  subblockCourse.textContent = educationCourses[i];
  educationSubblock.append(subblockCourse);
  educationBlock.append(educationSubblock);
}

// Interests
const interestsList = [
  'branding',
  'design',
  'photography',
  'artificial intelligence',
  'illustration',
  'typography',
  'social networks',
  'research',
  'dron pilot',
  'games',
];
const interestsBlock = document.querySelector('.interests');
for (let i = 0; i < interestsList.length; i++) {
  const interest = document.createElement('span');
  interest.classList.add('interest');
  interest.textContent = interestsList[i];
  interestsBlock.append(interest);
}

// Let's chat
const chatBlock = document.createElement('div');
chatBlock.classList.add('info-block', 'chat');
chatBlock.setAttribute('contenteditable', true);
chatBlock.textContent = 'Let´s chat! I´m ready to work on excinting projects';
container.append(chatBlock);

const email = document.createElement('a');
email.classList.add('email');
email.textContent = 'srkarthik.designscape@gmail.com';
email.setAttribute('contenteditable', false);
email.setAttribute('href', `mailto:${email.textContent}`);
email.setAttribute('target', '_blank');
chatBlock.append(email);
