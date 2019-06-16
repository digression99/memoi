import React, { useEffect, useState  } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Hashtags from 'components/Hashtags';
import Memos from 'components/Memos';
import GroupItemModal from 'components/GroupItemModal';

const Wrapper = styled.div`
  border : 1px solid gray;
  height: auto;

  padding : 10px;
  border-radius : 5px;
  cursor : pointer;
  transition : all .3s;

  &:hover {
    background: #e9ecef;
  }
`;

const GroupItem = ({ id, name, hashtags, memos }) => {
  const [ isModalOpen, setIsModalOpen ] = useState(false);
  const allMemos = useSelector(state => state.memos);

  useEffect(() => {
    console.log('is modal open changed : ', isModalOpen);
  }, [isModalOpen]);

  // TODO optimize codes here using reselect
  const getMemosById = (allMemos, memoIds) => allMemos.filter(memo => {
    return memoIds.includes(memo.id);
  });
  const filteredMemos = getMemosById(allMemos, memos);

  const handleClick = () => {
    console.log('you clicked group item : ', id);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    console.log('close modal called.');
    setIsModalOpen(false);
  };

  return (
    <>
      <Wrapper onClick={handleClick}>
        <div>
          <span>{name}</span>
        </div>
        <Hashtags hashtags={hashtags} />
      </Wrapper>
      {
        isModalOpen && (
          <GroupItemModal onClose={closeModal}>
            <div>
              <span>Links</span>
              <Memos memos={filteredMemos} />
            </div>
          </GroupItemModal>
        )
      }
    </>
  )
};

export default GroupItem;

