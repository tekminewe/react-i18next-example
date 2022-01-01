import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import './i18n.config';

const App = () => {
  const { t, i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);
  const [count, setCount] = useState(0);

  const handleLanguageSelect = (event) => {
    setSelectedLanguage(event.target.value);
    i18n.changeLanguage(event.target.value);
    setCount(count => count + 1);
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
          <p>{t('welcome')}</p>
          <p>{t('selectedLanguage', { language: selectedLanguage })}</p>
          <p>{t('numOfTimesSwitchingLanguage', { count })}</p>
        </section>
      </div>
    </div>
  );
};

export default App;
