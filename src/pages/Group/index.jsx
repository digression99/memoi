import React from 'react';
import styled from 'styled-components';
import Header from 'components/Header';
import LeftSideBar from 'components/LeftSideBar';
import GroupItem from 'components/GroupItem';
import { useSelector } from 'react-redux';
import Page from 'elements/Page';

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

export default () => {
  const groups = useSelector(state => state.groups);

  return (
    <Page.OuterWrapper>
      <LeftSideBar selected={'group'} />
      <Page.Wrapper>
        <Header />
        <GroupContainer>
          {groups.map(group => <GroupItem key={group.id} {...group} />)}
        </GroupContainer>
      </Page.Wrapper>
    </Page.OuterWrapper>
  )
};

