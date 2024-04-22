/* eslint-disable react/no-children-prop */
import React, { useState } from 'react';

import { ModalComponent } from './ModalComponent';
import { Button } from '../../../stories/Button';

import './modal.scss';

export function ModalLayout() {
  const [visible, setVisible] = useState(false);
  const [inputValue, setInputValue] = useState('');

  function handleClick() {
    setVisible(true);
  }

  function handleInputValue(event: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(event.target.value);
  }

  return (
    <>
      <div className="wrapper">
        <input value={inputValue} onChange={(e) => handleInputValue(e)} />
        <Button size="small" onClick={handleClick} label="Open Modal" />
      </div>
      <ModalComponent visible={visible} onClose={() => setVisible(false)}>
        {inputValue}
      </ModalComponent>
    </>
  );
}
