import React, {useState, useEffect} from 'react'

function useEffectPage() {
    const sayHello = () => console.log("hello");
    // 일반 useEffect
    // useEffect(() => {
    //   sayHello();
    // });
  
    // 축약한 useEffect
    // useEffect(sayHello);
  
    // deps를 가진 useEffect - deps: deps안에 값이 변경될 때에만 실행
    // useEffect(sayHello, []);
  
    const [number, setNumber] = useState(0);
    const [anumber, setAnumber] = useState(0);
  
    useEffect(sayHello, [number]);
  
    return (
      <div>
        <div>Hi</div>
        <button onClick={() => setNumber(number + 1)}>{number}</button>
        <button onClick={() => setAnumber(anumber + 1)}>{anumber}</button>
      </div>
    )
}

export default useEffectPage
