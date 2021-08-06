import { useState, useCallback } from 'react';

type useModalReturnType = [
  boolean,
  { openModal: () => void; closeModal: () => void },
];

const useModal = (initialState = false): useModalReturnType => {
  const [isModalOpened, setIsModalOpened] = useState(initialState);

  const openModal = useCallback(() => setIsModalOpened(true), []);
  const closeModal = useCallback(() => setIsModalOpened(false), []);

  return [isModalOpened, { openModal, closeModal }];
};

export default useModal;
