<template>
  <div class="container">
    <div class="column">
      <h1>My Vue Todo App</h1>
      <form class="row" @submit.prevent="onSubmit">
        <custom-input
          v-model="taskInput"
          placeholder="Enter task"
          :className="inputStyle"
          v-focus
        />
        <custom-button buttonText="Submit" />
      </form>
      <div v-if="errors" class="error">{{ errors[0] }}</div>
      <to-do-table
        :tasks="tasks"
        @remove="onDelete"
        @edit="editTask"
        @changeStatus="changeStatus"
        :statusArr="statusArr"
      />
    </div>
  </div>
</template>

<script>
import ToDoTable from "@/components/ToDoTable.vue";
export default {
  components: {
    ToDoTable,
  },
  data() {
    return {
      errors: [],
      taskInput: "",
      statusArr: ["To do", "In progress", "Done"],
      inputStyle: {
        input: true,
        inputError: false,
      },
    };
  },
  methods: {
    onSubmit() {
      if (this.taskInput.length !== 0) {
        this.$store.dispatch("setTasksToStorage", {
          task: this.taskInput,
          status: this.statusArr[0],
          id: Date.now(),
        });
        this.taskInput = "";
        this.inputStyle.inputError = false;
        this.errors = [];
      } else {
        this.errors.push("This field is required!");
        this.inputStyle.inputError = true;
      }
    },
    onDelete(id) {
      this.$store.dispatch("deleteTask", id);
    },
    editTask(editedTask) {
      this.$store.dispatch("editTask", editedTask);
    },
    changeStatus(editedTask) {
      let index;
      this.statusArr.forEach((string, _index) => {
        if (editedTask.status === string) index = _index;
      });

      let newStatus = this.statusArr[++index];
      this.$store.dispatch("editStatus", { editedTask, newStatus });
    },
  },
  mounted() {
    this.$store.dispatch("getTasksFromStorage");
  },
  computed: {
    tasks: function () {
      return this.$store.state.toDoList.tasks;
    },
  },
};
</script>

<style scoped>
.column {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
}
.row {
  display: flex;
  width: 100%;
  column-gap: 8px;
}
h1 {
  margin-bottom: 40px;
  font-family: "calibri";
}
.error {
  color: red;
  display: flex;
  align-self: flex-start;
  margin-top: 10px;
}
.inputError {
  border: 1px solid red !important;
}
.container {
  max-width: 500px;
  margin: 0 auto;
}
</style>
