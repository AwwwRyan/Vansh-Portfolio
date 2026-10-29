// Single place to edit site details.
export const site = {
  name: 'Vansh',
  linkedin: 'https://www.linkedin.com/in/vansh-singh06/',
};

// "https://www.linkedin.com/in/abc/" -> "linkedin.com/in/abc"
export const linkedinLabel = site.linkedin
  .replace(/^https?:\/\/(www\.)?/, '')
  .replace(/\/$/, '');
