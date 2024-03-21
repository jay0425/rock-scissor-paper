import React, { Component } from 'react';
import BoxClass from './component/BoxClass';

const choice = {
  rock: {
    name: 'Rock',
    img: 'https://nationaltoday.com/wp-content/uploads/2021/08/National-Pet-Rock-Day-1200x834.jpg',
  },
  scissors: {
    name: 'Scissors',
    img: 'https://kr.element14.com/productimages/standard/en_GB/TL15160-40.jpg',
  },
  paper: {
    name: 'Paper',
    img: 'https://www.collinsdictionary.com/images/full/paper_111691001.jpg',
  },
};

export default class AppClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userSelect: null,
      computerSelect: null,
      result: '',
    };
  }

  play = (userChoice) => {
    let computerChoice = this.randomChoice();
    this.setState({
      userSelect: choice[userChoice],
      computerSelect: computerChoice,
      result: this.judgement(choice[userChoice], computerChoice),
    });
  };

  judgement = (user, computer) => {
    if (user.name === computer.name) {
      return 'tie';
    } else if (user.name === 'Rock') return computer.name === 'Scissors' ? 'win' : 'lose';
    else if (user.name === 'Scissors') return computer.name === 'Paper' ? 'win' : 'lose';
    else if (user.name === 'Paper') return computer.name === 'Rock' ? 'win' : 'lose';
  };

  randomChoice = () => {
    let itemArray = Object.keys(choice); // 객체의 키값만 뽑아서 배열로 만들어주는 함수
    let randomItem = Math.floor(Math.random() * itemArray.length); // 랜덤으로 0 1 2 값을 뽑는다.
    let final = itemArray[randomItem]; // 위에서 만든 랜덤 번호를 객체 키값을 뽑아 만든 배열 인덱스 번호로 넣는다.
    console.log(final); // 객체 키값이 나온다.
    return choice[final];
  };

  render() {
    return (
      <div>
        <div className="main">
          <BoxClass title="You" item={this.state.userSelect} result={this.state.result} />
          <BoxClass title="Computer" item={this.state.computerSelect} result={this.state.result} />
        </div>
        <div className="main">
          {/* 함수를 콜백함수로 넣어줘야 한다. 그냥 함수만 넣으면 바로 실행이 되어 버린다. */}
          <button onClick={() => this.play('scissors')}>가위</button>
          <button onClick={() => this.play('rock')}>바위</button>
          <button onClick={() => this.play('paper')}>보</button>
        </div>
      </div>
    );
  }
}
