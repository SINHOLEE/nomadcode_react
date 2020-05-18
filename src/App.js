import React from 'react';
import PropTypes from 'prop-types';

// 재사용이 가능한 컴포넌트룰 만들 수 있다.

function Bark(props){
  return(
  <div>
    <h1>
      bark
    </h1>
  </div>
  ) 
}


const arr = [
  { id: 1,
    fav: 1,
    imageUrl: "http1",
  rating: 1,},
  {id: 2,fav: 2,
  imageUrl: "http2",rating: 4,},
  {id: 3,fav: 3,
  imageUrl: "http3", rating: 2,},
  {id: 4,fav: 4,
  imageUrl: "http4",rating: 3,},
  {id: 5,fav: 5,
  imageUrl: "http5", rating: 2.5,},
]


function MakeProps({fav, imageUrl, rating}){
  return (
    <div> 
  <h1>fav: {fav}</h1>
  <h1>imageUrl: {imageUrl}</h1>
  <h1>rating: {rating} / 5.0</h1>
</div>
)
}

MakeProps.propTypes = {
  fav: PropTypes.number.isRequired,
  imageUrl: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
}

// function renderFood({fav, imageUrl, id, rating}){
//   return <MakeProps key={id} fav={fav} imageUrl={imageUrl}  rating={rating}></MakeProps>
// }



// 프롭스를 제대로 받았는지 체크하는 법 
// npm install prop-types
function App() {
  return (
    <div className="App">
      <h1> 우와와와아아
      </h1>
      <Bark />
      <Bark />
      <Bark />
      {/* js 를 html에서 사용하는 것처럼 머스테치 문법으로 사용한다. 
      
      */}
      {arr.map((obj )=>{
        // 여기서 props로 들어가는것은 fav, imageUrl, key 이렇게 세개이다. 그 안에 들어간 obj.fav, obj.url 등은
        // 현재 페이지에서 관리하고 있는 데이터에서 불러오는 값이다.
        return <MakeProps key={obj.id} fav={obj.fav} imageUrl={obj.imageUrl} rating={obj.rating}></MakeProps>
        })}

      {/* 여기서 위의 펑션을 따로 빼보자. */}
      {/* {arr.map(renderFood)} */}
    </div>
  );
}

export default App;
