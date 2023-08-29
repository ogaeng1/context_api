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
