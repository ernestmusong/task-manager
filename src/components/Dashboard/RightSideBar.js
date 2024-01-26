import React from 'react';
import RightSideBarTop from './RightSideBarTop';
import RightCalendar from './RightCalendar';
import RightMembers from './RightMembers';
import AddMemberForm from './AddMemberForm';

const RightSideBar = () => (
  <aside className="show-sidebar" id="right-sidebar">
    <RightSideBarTop />
    <RightCalendar />
    <RightMembers />
    <AddMemberForm />
  </aside>
);

export default RightSideBar;
