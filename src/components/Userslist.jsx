import React from 'react';

import Card from './Card';
import classes from './Userslist.module.css';

const UsersList = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user, key) => (
          <li key={key}>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
