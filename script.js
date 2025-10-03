const bands = [
  'The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil',
  'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State',
  'We Came as Romans', 'Counterparts', 'Oh, Sleeper',
  'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'
];

// Function to strip leading articles "a ", "an ", "the "
function stripArticle(name) {
  return name.replace(/^(a |an |the )/i, '').trim();
}

// Sort ignoring leading articles and case with localeCompare sensitivity 'base'
const sortedBands = bands.sort((a, b) => {
  const nameA = stripArticle(a);
  const nameB = stripArticle(b);
  // Sensitivity 'base' ignores case and diacritics, resulting in consistent, correct order
  return nameA.localeCompare(nameB, undefined, { sensitivity: "base" });
});

// Inject sorted band names into the ul#band element as li elements
const ul = document.getElementById('band');
sortedBands.forEach(band => {
  const li = document.createElement('li');
  li.textContent = band;
  ul.appendChild(li);
});
