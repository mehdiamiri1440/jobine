import React, { Component } from "react";

class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            min: this.props.min,
            sec: this.props.sec
        };
    }

    componentDidMount() {
        this.renderTimer()
    }

    componentWillUnmount() {
        clearInterval(this.myInterval);
    }

    renderTimer = () => {
        this.myInterval = setInterval(() => {
            const { sec, min } = this.state;

            if (sec > 0) {
                this.setState(({ sec }) => ({
                    sec: sec - 1
                }));
            }
            if (sec === 0) {
                if (min === 0) {
                    clearInterval(this.myInterval);
                } else {
                    this.setState(({ min }) => ({
                        min: min - 1,
                        sec: 59
                    }));
                }
            }
        }, 1000);
    }

    restartTimer = () => {
        return this.setState({ min: this.props.min, sec: this.props.sec }, () => this.renderTimer())
    };

    render() {
        const { min, sec } = this.state;
        let { substitutionText, timerClassName, substitutionTextClassName, containerClassName, onSubstitution, additionalText = '' } = this.props;
        return (
            <div className={`${containerClassName}`}>
                {min === 0 && sec === 0 ? (
                    <h6
                        onClick={() => {
                            onSubstitution();
                            this.restartTimer();
                        }}
                        className={`${substitutionTextClassName}`}>{substitutionText}</h6>
                ) : (
                        <h6 className={`${timerClassName}`}>
                            {min}:{sec < 10 ? `0${sec}` : sec} <span className='mx-2'>{additionalText}</span>
                        </h6>
                    )
                }
            </div>
        );
    }
}
export default Timer;