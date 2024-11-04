import {CSSProperties} from 'react'
import TodoHeader from './TodoHeader';
import TodoList from './TodoList'
import TodoFooter from './TodoFooter'


  

function MainPage() {

  return (
    <>
      <h1 style={styles.logo}>todos</h1>
      <div style={styles.mainWrapper}>
        
        <TodoHeader/>
        <TodoList />
        <TodoFooter />
    </div>
    </>
    
  )

}

const styles = {
    logo: {
        fontWeight: "lighter",
        fontColor: "#E9D9D9"
    },
    mainWrapper: {
        display: "flex",
        width: "600px",
        flexDirection: "column"  as CSSProperties['flexDirection'],
        border: "1px solid #EBEBEB",
        boxShadow: "0px 0px 31px 10px rgba(235, 235, 235, 0.6)"

    }
}

export default MainPage