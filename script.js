const bands = [
  'The Bled', 'Norma Jean', 'The Devil Wears Prada', 'Pierce the Veil',
  'The Midway State', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive',
  'Anywhere But Here', 'An Old Dog', 'Your Favorite Weapon', 'The Plot in You',
  'The Story So Far', 'The Smiths', 'The Piano Guys', 'South of Borneo',
  'Sun Aruption'
];

// Helper function to strip leading articles and normalize case
function stripArticle(name) {
  return name.replace(/^(a |an |the )/i, '').trim().toLowerCase();
}

// Sort the bands ignoring articles, preserving original order for duplicates
const sortedBands = bands
  .map((band, index) => ({ original: band, key: stripArticle(band), index }))
  .sort((a, b) => {
    const cmp = a.key.localeCompare(b.key);
    return cmp !== 0 ? cmp : a.index - b.index; // stable sort
  })
  .map(item => item.original);

// Display the sorted list inside #band-list
const container = document.getElementById('band-list');
const ul = document.createElement('ul');

sortedBands.forEach(band => {
  const li = document.createElement('li');
  li.textContent = band;
  ul.appendChild(li);
});

container.appendChild(ul);
