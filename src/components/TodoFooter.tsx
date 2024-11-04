import {CSSProperties} from "react";
import { useTodoContext } from "../store/todoContext";

const TodoFooter = () => {
    const { state, clearCompleted, setFilter } = useTodoContext();
    const activeCount = state.todos.filter((todo) => !todo.isCompleted).length;

    const getButtonStyle = (filterType: 'all' | 'active' | 'completed'): CSSProperties => ({
        ...styles.button,
        ...(state.filter === filterType ? styles.selected : {}),
    });

    return (
        <footer style={styles.footer}>
            <span style={styles.statusCount}>{activeCount} items left</span>
            
            <div>
                <button
                    style={getButtonStyle("all")}
                    onClick={() => setFilter("all")}
                    className={state.filter === "all" ? "selected" : ""}
                >
                    All
                </button>
                <button
                    style={getButtonStyle("active")}
                    onClick={() => setFilter("active")}
                    className={state.filter === "active" ? "selected" : ""}
                >
                    Active
                </button>
                <button
                    style={getButtonStyle("completed")}
                    onClick={() => setFilter("completed")}
                    className={state.filter === "completed" ? "selected" : ""}
                >
                    Completed
                </button>
            </div>

            <button style={styles.button} onClick={clearCompleted}>
                Clear completed
            </button>
        </footer>
    );
};

const styles = {
    footer: {
        width: "100%",
        display: "flex",
        flexDirection: "row" as CSSProperties['flexDirection'],
        justifyContent: "space-between"
    },
    button: {
        background: "none",
        padding: "8px",
    },
    selected: {
        border: "1px solid #E9D9D9",
    },

    statusCount: {
        padding: "0 5px",
    }
};

export default TodoFooter;
