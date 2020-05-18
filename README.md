# 리액트



- 클래스 리액트 컴포넌트는 리턴을 가지고 있지 않는다. 왜? 펑션이 아니기 때문이다.



### 1.  어떻게 state를 관리할까?

- 왜 setState를 사용해야할까? 그냥 this.state.count++ 해도 될것을... 그 이유는 밑에 `this.setState(new object)` 는 리엑트 컴포넌트라는 클래스가 **스테이트를 갱신 할 때 마다, 랜더를 새로 해주면서 데이터를 동적으로 관리**할 수 있게 한다.

  즉! 바뀐 그 부분만 리 랜더링해준다. 전체가 아니라!!!와우 

- this.state.count에 직접 접근해서 변경하지 마라.

  ```javascript
  add = () =>{
  
    console.log("add");
  
    this.setState({count: this.state.count + 1})
  
  }
  ```

  여기서 this.state.count를 직접 호출하는것은 좋지 않다. 왜? 성능문제..  그럼 어떻게 해야하지? setState에서는 함수형으로 현재의 state를 화살표 함수로 사용할 수 있도록 제공한다.

  여기서 의문. 보통 화살표 함수는 curr=>{count: curr.count + 1} 이렇게 사용할 텐데... 왜 양 끝에 ()가 있는거지?

  모범답안

  ```javascript
  add = () =>{
  
    console.log("add");
  
      this.setState(curr=>({count: curr.count + 1}));
  
  
  }
  ```

  

# 2. Component Life cycle

