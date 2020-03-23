export const getLetterMatchCount = (guessedWord, secretWord) => {
    const secretLetterSet = new Set(secretWord.split(''));
    const guessedWordLetterSet = new Set(guessedWord.split(''));
    return [...secretLetterSet].filter(letter => guessedWordLetterSet.has(letter)).length;
};