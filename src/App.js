import React, { Component } from 'react';
import './App.css';
import Customer from './components/Customer'

const customers = [
  {
    'id': 1,
    'image': 'https://placeimg.com/64/64/1',
    'name': '테스트1',
    'birthday': '950710',
    'gender': '남자',
    'job': '개발자'
  },
  {
    'id': 2,
    'image': 'https://placeimg.com/64/64/2',
    'name': '테스트2',
    'birthday': '950711',
    'gender': '여자',
    'job': '대학생'
  },
  {
    'id': 3,
    'image': 'https://placeimg.com/64/64/3',
    'name': '테스트3',
    'birthday': '950712',
    'gender': '남자',
    'job': '디자이너'
  }
]

class App extends Component {
  render() {
    return (
      <div>
        {
          customers.map(c => {
            return (
              <Customer
                /**
                 * map로 컴포넌트를 출력 할 때에는
                 * 'key'의 값이 있어야 함
                 */
                key={c.id}
                id={c.id}
                image={c.image}
                name={c.name}
                birthday={c.birthday}
                gender={c.gender}
                job={c.job}
              />
            )
          })
        }
      </div>
    );
  }
}

export default App;
