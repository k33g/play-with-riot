import Human from "./human";
import Humans from "./humans";

let humans = new Humans([
  new Human("Bob", "Morane"),
  new Human("John", "Doe"),
  new Human("Jane", "Doe")
]);

riot.mount("humans-list", {humans: humans});