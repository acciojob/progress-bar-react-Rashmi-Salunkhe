import React, { Component } from 'react';

class Progress extends Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: 0,
      barWidth: 200 // total width in pixels
    };
  }

  startProcess() {
    this.interval = setInterval(() => {
      this.setState(
        (prevState) => ({
          progress: prevState.progress + 10
        }),
        () => {
          if (this.state.progress >= 100) {
            clearInterval(this.interval);
          }
        }
      );
    }, 1000);
  }

  componentDidMount() {
    this.startProcess();
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const currentWidth = (this.state.progress / 100) * this.state.barWidth;

    return (
      <div>
        <div
          id="barOuter"
          style={{ width: `${this.state.barWidth}px`, height: '30px', backgroundColor: 'lightgray' }}
        >
          <div
            id="barInner"
            style={{ width: `${currentWidth}px`, height: '30px', backgroundColor: 'blue' }}
          ></div>
        </div>
        <p>{`${this.state.progress}%`}</p>
      </div>
    );
  }
}

export default Progress;
