import React, { useState } from 'react';

const App = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const handleLanguageSelect = (event) => {
    setSelectedLanguage(event.target.value);
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="mx-auto bg-white p-4 rounded space-y-2">
        <div className="space-x-4">
          <label>
            English
            <input
              type="radio"
              value="en"
              checked={selectedLanguage.includes('en')}
              onClick={handleLanguageSelect}
              className="ml-2"
            />
          </label>
          <label>
            中文 (Chinese)
            <input
              type="radio"
              value="zh"
              checked={selectedLanguage.includes('zh')}
              onClick={handleLanguageSelect}
              className="ml-2"
            />
          </label>
        </div>
        <section>
          
        </section>
      </div>
    </div>
  );
};

export default App;
