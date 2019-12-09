let state;
let init = {type: '@@INIT'}
let increment = { type: 'INCREMENT_COUNT' }

document.addEventListener("DOMContentLoaded", () => {
  let button = document.getElementById('button')
  button.addEventListener('click', () => dispatch( increment ) )
});

function reducer( oldState={ count: 0 }, action ){
  switch( action.type ){
    case 'INCREMENT_COUNT':
      return { count: oldState.count + 1 }
    default:
      return oldState;
  }
}

function dispatch( action ){
  state = reducer( state, action)
  render()
}

function render() {
  let container = document.getElementById('container')
  container.innerText = state.count
}

dispatch( init )