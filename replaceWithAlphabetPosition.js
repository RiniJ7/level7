function alphabetPosition(text) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'
  return text.toLowerCase().split('').filter(i => alphabet.includes(i)).map(i => alphabet.indexOf(i) + 1).join(' ');
}