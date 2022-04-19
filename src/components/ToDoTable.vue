<template>
  <table class="table">
    <tr>
      <td width="60%">Task</td>
      <td width="22%">Status</td>
      <td width="18%">Actions</td>
    </tr>
    <div class="no_items" v-if="!tasks.length">There aren't tasks!</div>
    <to-do-item
      v-for="task in tasks"
      :key="task.id"
      :task="task"
      :statusArr="statusArr"
      @remove="$emit('remove', task.id)"
      @updateTask="updateTask"
      @changeStatus="$emit('changeStatus', task)"
    />
  </table>
</template>

<script>
import ToDoItem from "@/components/ToDoItem.vue";
export default {
  components: {
    ToDoItem,
  },
  props: {
    tasks: [Array],
    statusArr: [Array]
  },
  methods: {
    updateTask(task) {
      if (task.oldTask.task !== task.newValue) {
        task.oldTask.task = task.newValue;
        this.$emit("edit", task.oldTask);
      }
    },
  },
};
</script>

<style scoped>
tr {
  padding: 5px 0;
}
td {
  word-break: break-all;
}
.table {
  width: 100%;
  background: rgb(229, 229, 229);
  border-radius: 12px;
  margin-top: 20px;
  padding: 9px;
}
</style>
