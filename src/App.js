import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

import './i18n.config';

const App = () => {
  const { t } = useTranslation();
  const [count, setCount] = useState(0);
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const handleLanguageSelect = (event) => {
    setSelectedLanguage(event.target.value);
    i18next.changeLanguage(event.target.value);
    setCount(count + 1);
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="mx-auto bg-white p-4 rounded space-y-2">
        <div className='space-x-4'>
          <label>
            English
            <input
              type="radio"
              value="en"
              checked={selectedLanguage === 'en'}
              onClick={handleLanguageSelect}
              className='ml-2'
            />
          </label>
          <label>
            中文 (Chinese)
            <input
              type="radio"
              value="zh"
              checked={selectedLanguage === 'zh'}
              onClick={handleLanguageSelect}
              className='ml-2'
            />
          </label>
        </div>
        <p>{t('selectedLanguage', { language: selectedLanguage })}</p>
        <p>{t('numOfTimesSwitchingLanguage', { count })}</p>
        <p>{t('welcome')}</p>
      </div>
    </div>
  );
};

export default App;
