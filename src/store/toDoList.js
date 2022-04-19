export const toDoListModule = {
  state: () => ({
    tasks: [],
  }),
  getters: {
    getTasks: (state) => state.tasks,
  },
  mutations: {
    setTasks(state, newTasks) {
      state.tasks = newTasks;
    },
  },
  actions: {
    setTasks({ commit }, tasks) {
      localStorage.clear();
      commit("setTasks", tasks);
      localStorage.setItem("tasks", JSON.stringify(tasks));
    },
    getTasksFromStorage({ commit }) {
      try {
        const storageTasks = localStorage.getItem("tasks") || [];
        const parsedTasks = JSON.parse(storageTasks);
        commit("setTasks", parsedTasks);
      } catch (e) {
        commit("setTasks", []);
      }
    },
    setTasksToStorage({ state }, task) {
      this.dispatch("setTasks", [...state.tasks, task]);
    },
    deleteTask({ state }, id) {
      this.dispatch(
        "setTasks",
        state.tasks.filter((elem) => elem.id !== id)
      );
    },
    editTask({ state }, editedTask) {
      const newTasks = [...state.tasks];
      newTasks.forEach((elem) => {
        if (elem.id === editedTask.id) {
          elem = editedTask;
        }
      });
      this.dispatch("setTasks", newTasks);
    },
    editStatus({ state }, { editedTask, newStatus }) {
      const newTasks = [...state.tasks];
      newTasks.forEach((elem) => {
        if (elem.id === editedTask.id) {
          if (newStatus) {
            elem.status = newStatus;
          } else {
            elem.status = "To do";
          }
        }
      });
      this.dispatch("setTasks", newTasks);
    },
  },
};
