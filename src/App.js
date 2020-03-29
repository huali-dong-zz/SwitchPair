import React, { Component } from 'react';
import NameContainer from './component/NameContainer';
import PairContianer from './component/PairContianer';
class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            names: ["Yanpei", "Tianzhen", "Wangyan", "Qingqing", "Zhenguang", "Shanil", "Ziye", "Maoning", "Huali"]
        }
    }
    render() {
        return (
            <div className="App">
                <NameContainer names={this.state.names} />
                <PairContianer names={this.state.names} />
            </div>
        );
    }
}

export default App;
