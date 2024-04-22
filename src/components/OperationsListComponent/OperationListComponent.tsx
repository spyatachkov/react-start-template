import React, { useEffect, useRef, useState } from 'react';
import { OperationPreviewCardComponent } from 'src/homeworks/hw2_components/OperationPreview/OperationPreviewComponent';
import s from './OperationsList.module.scss';
import { fetchAPI } from 'src/db/db';
import { Operation } from 'src/homeworks/ts1/3_write';

const OperationListComponent: React.FC = () => {
  const [operations, setOperations] = useState<Operation[]>([]);
  const elementRef = useRef(null);

  function onIntersection(entries: IntersectionObserverEntry[]) {
    const entry = entries[0];
    if (entry.isIntersecting) {
      fetchMoreOperations();
    }
  }

  useEffect(() => {
    const io = new IntersectionObserver(onIntersection);
    if (io && elementRef.current) {
      io.observe(elementRef.current);
    }

    return () => {
      if (io) {
        io.disconnect();
      }
    };
  }, [operations]);

  async function fetchMoreOperations(): Promise<void> {
    const data = await fetchAPI();
    setOperations((oldOperations) => [...oldOperations, ...data]);
  }

  return (
    <>
      <div className={s.wrapper}>
        {operations.map((e) => (
          <OperationPreviewCardComponent
            key={e.id}
            amount={e.amount}
            category={e.category.name}
            title={e.name}
            description={e.desc}
          />
        ))}
        <div ref={elementRef}>Загрузка новых операций...</div>
      </div>
    </>
  );
};

export default OperationListComponent;
