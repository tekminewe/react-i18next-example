import React, { useState } from 'react';

const App = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const handleLanguageSelect = (event) => {
    setSelectedLanguage(event.target.value);
  }

  return (
    <div>
      <label>
        English
        <input type="radio" value="en" checked={selectedLanguage === 'en'} onClick={handleLanguageSelect} />
      </label>
      <label>
        中文
        <input type="radio" value="zh" checked={selectedLanguage === 'zh'} onClick={handleLanguageSelect} />
      </label>
      <p>Your selected language is: {selectedLanguage} </p>
      <p>Your have switch language for 0 times</p>
      <p>Welcome to the world of wonder</p>
    </div>
  );
}

export default App;
