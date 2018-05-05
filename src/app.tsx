import * as React from 'react';
import * as ReactDOM from 'react-dom';

class App extends React.Component {
    render () {
        return (
            <h2>Welcome to Premiereact</h2>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))