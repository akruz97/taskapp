const TaskSchema = {
    name: "Task",
    properties: {
      id: "string",
      title: "string",
      status: "string?",
    },
    primaryKey: "id",
  };

const schema = [
    TaskSchema
];

export default schema;