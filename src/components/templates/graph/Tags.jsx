import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import PageviewIcon from '@material-ui/icons/Pageview';
import CreateIcon from '@material-ui/icons/Create';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import EventNoteIcon from '@material-ui/icons/EventNote';

const useStyles = makeStyles((theme) => ({
root:{
 
    display: 'flex',
    justifyContent: "space-around ",
    marginTop: '60px',
   
}
}));

export default function Chips() {
  const classes = useStyles();

  const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };

  const handleClick = () => {
    console.info('You clicked the Chip.');
  };


  return (
    <div className={classes.root}>
      <Chip  
        color="secondary"
        avatar={<Avatar className={classes.pink}>
          <PageviewIcon />
    
        </Avatar>}
        label="Search"
      
      />     
      <Chip
        sizu='small'
        color="secondary"
        avatar={<Avatar className={classes.pink}>
          <DirectionsRunIcon />
        </Avatar>}
        label="Reflection alone"
      />
      <Chip
    
        color="secondary"
        avatar={<Avatar className={classes.pink}>
          <EventNoteIcon />
        </Avatar>}
        label="View the calendar"
      />
      <Chip
       
      color="secondary"
        avatar={<Avatar className={classes.pink}>
          <CreateIcon />
        </Avatar>}
        label="Biary"
      />

    </div>
  );
}