import React, { useState } from 'react';
import styled from 'styled-components';
import Header from 'components/Header';
import LeftSideBar from 'components/LeftSideBar';
import GroupItem from 'components/GroupItem';
import { useSelector } from 'react-redux';
import Page from 'elements/Page';
import AddButton from 'components/AddButton';
import GroupFormModal from 'components/GroupFormModal';
import GroupForm from '../../components/GroupForm';

const GroupContainer = styled.div`
  display: flex;
  flex-direction : row;
  flex-wrap : wrap;
  align-content :flex-start;
  height : 100%;

  & > * {
    &:not(:first-child) {
      margin-left : 10px;
    }
  }
  padding : 4px;
`;

const StyledAddButton = styled(AddButton)`
  position : fixed;
  bottom : 40px;
  right : 40px;
`;

export default () => {
  const groups = useSelector(state => state.groups);
  const [ isModalOpen, setIsModalOpen ] = useState(false);

  const handleClickAddButton = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  return (
    <Page.OuterWrapper>
      <LeftSideBar selected={'group'} />
      <Page.Wrapper>
        <Header />
        <GroupContainer>
          {groups.map(group => <GroupItem key={group.id} {...group} />)}
        </GroupContainer>
        <StyledAddButton onClick={handleClickAddButton} />
      </Page.Wrapper>
      {
        isModalOpen &&
        <GroupFormModal onClose={() => setIsModalOpen(false)}>
          <GroupForm />
        </GroupFormModal>
      }
    </Page.OuterWrapper>
  )
};

