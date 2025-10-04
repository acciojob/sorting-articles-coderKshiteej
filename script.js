const bands = [
  'The Bled', 'Norma Jean', 'The Devil Wears Prada', 'Pierce the Veil',
  'The Midway State', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive',
  'Anywhere But Here', 'An Old Dog', 'Your Favorite Weapon', 'The Plot in You',
  'The Story So Far', 'The Smiths', 'The Piano Guys', 'South of Borneo',
  'Sun Aruption'
];

// Helper function to strip leading articles
function stripArticle(name) {
  return name.replace(/^(a |an |the )/i, '').trim();
}

// Sort the bands ignoring articles
const sortedBands = bands
  .slice()
  .sort((a, b) => stripArticle(a).localeCompare(stripArticle(b)));

// Display the sorted list
const ul = document.createElement('ul');
sortedBands.forEach(band => {
  const li = document.createElement('li');
  li.textContent = band;
  ul.appendChild(li);
});
document.body.appendChild(ul);
