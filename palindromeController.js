exports.checkPalindrome = (req, res) => {
    const { word } = req.body;
  
    if (!word || typeof word !== 'string') {
      return res.status(400).json({ error: 'Invalid input' });
    }
  
    const cleanedWord = word.toLowerCase().replace(/[^a-z0-9]/gi, '');
    const reversed = cleanedWord.split('').reverse().join('');
  
    res.json({ isPalindrome: cleanedWord === reversed });
  };
  