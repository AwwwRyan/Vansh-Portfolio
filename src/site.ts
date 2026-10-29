// Single place to edit site details.
export const site = {
  name: 'Vansh',
  fullName: 'Vansh Singh',
  linkedin: 'https://www.linkedin.com/in/vansh-singh06/',
  // Used for search results and link previews (WhatsApp, LinkedIn, X, Slack…).
  title: 'Vansh Singh — Portfolio',
  description:
    'Portfolio of Vansh Singh — projects, experience and background. Connect with Vansh on LinkedIn.',
};

// "https://www.linkedin.com/in/abc/" -> "linkedin.com/in/abc"
export const linkedinLabel = site.linkedin
  .replace(/^https?:\/\/(www\.)?/, '')
  .replace(/\/$/, '');
