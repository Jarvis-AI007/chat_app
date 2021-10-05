import React from 'react';
import { Button, Drawer } from 'rsuite';
import { useProfile } from '../../context/profile.context';

const Dashboard = ({ onSignOutHandler }) => {
  const { profile } = useProfile();
  return (
    <>
      <Drawer.Header>
        <Drawer.Title> Dashboard </Drawer.Title>
      </Drawer.Header>
      <Drawer.Body>
        <h3>Hey! {profile.name} </h3>
      </Drawer.Body>

      <Drawer.Footer>
        <Button block color="red" onClick={onSignOutHandler}>
          SignOut
        </Button>
      </Drawer.Footer>
    </>
  );
};

export default Dashboard;
