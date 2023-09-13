const parent = React.createElement('div', { id: 'parent' }, [
  React.createElement('div', { id: 'child1' }, [
    React.createElement('h1', {}, 'H1 tag'),
    React.createElement('h2', {}, 'H2 tag'),
  ]),
  React.createElement('div', { id: 'child2' }, [
    React.createElement('h1', {}, 'H1 tag'),
    React.createElement('h2', {}, 'H2 tag'),
  ]),
]);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById('root'));
console.log(root);

root.render(parent);
