import React from 'react';

type TimerState = {
  time: number;
};

export default class Timer extends React.Component<unknown, TimerState> {
  timerId: NodeJS.Timer | undefined;

  constructor(props: unknown) {
    super(props);
    this.state = {
      time: 0,
    };
  }

  componentDidMount(): void {
    this.timerId = setInterval(() => {
      this.setState({ time: this.state.time + 1 });
    }, 1000);
  }

  componentWillUnmount(): void {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  render(): JSX.Element {
    return (
    <>
      <div className="timer">{this.state.time}</div>
      <img src='./flag.png'></img>
    </>
    );
  }
}
