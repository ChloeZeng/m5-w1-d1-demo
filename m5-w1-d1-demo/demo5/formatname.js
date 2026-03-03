//add function here
function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Chloe',
  lastName: 'Zeng'
};

const element = <h1>Hello, {formatName(user)}!</h1>;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(element);
  
  // const element = <h1>Hello, {formatName(user)}!</h1>;
  
  // ReactDOM.render(element, document.getElementById('root'));