import './App.css';
import Box from './component/Box';
import { useState } from 'react';

/*

1. 박스 1개 (타이틀, 사진, 결과)
2. 가위 바위 보 버튼이 있다.
3. 버튼을 클릭하면 클릭한 값이 박스에 보임
4. 컴퓨터는 랜덤하게 아이템 선택이 된다.
5. 3 4 의 결과를 가지고 누가 이겼는지 승패를 따진다.
6. 승패 결과에 따라 테두리 색이 바뀐다. (이기면-초록, 지면-빨강, 비기면-검정)

*/

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

function App() {
  const [userSelect, setUserSelect] = useState(null);

  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
    console.log(userSelect);
  };

  return (
    <div>
      <div className="main">
        <Box title="You" item={userSelect} />
        {/* <Box title="Computer" /> */}
      </div>
      <div className="main">
        {/* 함수를 콜백함수로 넣어줘야 한다. 그냥 함수만 넣으면 바로 실행이 되어 버린다. */}
        <button onClick={() => play('scissors')}>가위</button>
        <button onClick={() => play('rock')}>바위</button>
        <button onClick={() => play('paper')}>보</button>
      </div>
    </div>
  );
}

export default App;
