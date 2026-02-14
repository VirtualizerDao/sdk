import { v4 as uuidv4 } from "uuid";

class User {
  constructor(username) {
    this.id = uuidv4();
    this.username = username;
    this.points = 0;
    this.completedTasks = [];
  }
}

export default User;
