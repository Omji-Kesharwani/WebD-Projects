import styles from "./App.module.css"
import ButtonsContainer from "./components/ButtonsContainer"
import Dis from "./components/Dis";
function App()
{
  return
    <div className={styles.calculator}>
  <Dis></Dis>
   <ButtonsContainer></ButtonsContainer>
  </div>
};
export default App;