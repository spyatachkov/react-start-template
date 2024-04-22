import React, { useState } from 'react';
import { Header } from '../Header/Header';
import s from './Layout.module.scss';
import OperationListComponent from 'src/components/OperationsListComponent/OperationListComponent';
import { Button } from 'src/components/button/Button';
import { Modal } from 'src/components/Modal';

/**
 * Компонент Layout. Это презентационный компонент, будет использован в навигации и содержит компонент Header
 */
export const Layout: React.FC = () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Header className={s.header} />
      <Button size={'medium'} primary onClick={() => setVisible(true)} label="Открыть модальное окно" />
      <Modal
        className={s.modal}
        visible={visible}
        onClose={() => {
          console.log('unmount modal');
          setVisible(false);
        }}
      >
        Контент модального окна в портале
      </Modal>
      <OperationListComponent />
      <></>
    </>
  );
};
