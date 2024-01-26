import React from 'react';
import { FaSquarePlus } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const AddMemberForm = () => (
  <div className="add-member-link-wrap">

    <Link to="/add-task" className="tasks-title-icon-wrap">
      <FaSquarePlus />
      <span style={{ fontSize: '0.75rem', fontWeight: 'bold' }}>Add new Member</span>
    </Link>
  </div>
);

export default AddMemberForm;
