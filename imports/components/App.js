import React          from 'react';
import { Meteor }     from 'meteor/meteor';
import Dashboard      from './Dashboard';
import HomePage       from './HomePage';
import SelectLanguage from './SelectLanguage';


const validateProfile = (obj, ...args) => {
  for (var i = 0; i < args.length; i++) {
    if (!obj || !obj.hasOwnProperty(args[i])) {
      return false
    }
    obj = obj[args[i]];
  }
  return true;
}


const App = ({
  onlineUsers, 
  user, 
  loading,
  peer,
  videos
}) => {
  if (!loading && user) {
    if (!validateProfile(user, 'profile', 'complete')) {
      return (
        <SelectLanguage id={Meteor.userId()} /> 
      );
    } else {
      return (
        <Dashboard 
          onlineUsers={onlineUsers}
          language={user.profile.language}
          peer={peer}
          user={user}
          videos={videos}
        />
      );
    }
  } else {
    return <HomePage /> 
  }
}

export default App;
