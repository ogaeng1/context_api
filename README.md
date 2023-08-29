# Context API

I. Context API 란?

> Context API는 리액트에 내장된 기능으로, 리액트에서 제공하는 상태 관리 도구 중 하나입니다. 리액트의 Context API는 컴포넌트 트리 전체에 걸쳐 상태를 효과적으로 전달하고 공유할 수 있는 메커니즘을 제공합니다.

II. Context 만들기

> Context는 데이터를 전역적으로 공유할 수 있도록 하는 객체입니다. `createContext()` 함수를 사용하여 Context를 생성할 수 있습니다. `createContext()` 함수의 인자로 기본값을 설정할 수 있습니다. 또한 Context 객체는 `Provider`와 `Consumer` 컴포넌트를 제공합니다.

```js
// context.js
import { createContext } from "react";

const UseContext = createContext("기본값");

export default UseContext;
```

III. Consumer

> `Consumer` 컴포넌트는 컨텍스트의 값을 가져와서 렌더링하거나 로직에 활용할 수 있습니다.

```js
//Consumer.js
import UseContext from "../context/context";

const Consumer = () => {
	return (
		<UseContext.Consumer>
			{value => value}
		</UseContext.Consumer>
	)
}

export default Consumer;
```

IV. Provider

> `Provider` 컴포넌트는 컨텍스트의 값을 설정하고 하위 컴포넌트에 제공하며 `value` 프로퍼티를 통해 값을 변경할 수 있습니다.

```js
// App.tsx
import Consumer from "./components/Consumer";
import UseContext from "./context/context";

function App() {
    const useProvider = "Provider 사용하기";
    return (
        <UseContext.Provider value={useProvider}>
            <Consumer />
        </UseContext.Provider>
    )
}

export default App;
```

기존에 `createContext()` 함수를 사용할 때 파라미터로 넣은 기본 값은 `Provider`를 사용하지 않았을 때만 사용됩니다. `Provider` 컴포넌트를 사용했는데 `value` 프로퍼티를 명시하지 않으면 오류가 발생합니다. `Provider`를 사용한다면 꼭 `value` 값을 명시해 주어야 합니다.

V. useContext 훅 사용하기

> Context에 있는 값을 사용할 때 `Consumer` 대신 `useContext` 라는 훅을 사용하여 값을 받아올 수 있습니다. 함수 컴포넌트에서 사용이 가능합니다.

```js
import { useContext } from "react";
import UseContext from "../context/context";

const Consumer = () => {
	const contextValue = useContext(UseContext);
	return <div>{contextValue}</div>
}

export default Consumer
```

기존의 `Consumer` 컴포넌트를 `useContext` 훅으로 변경한 코드입니다.