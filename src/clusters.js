import cluster              from "cluster";
import os                   from "os";

const CPUS = os.cpus();
if (cluster.isMaster) {
  CPUS.forEach(() => cluster.fork());
  cluster.on("listening", worker => {
  });
  cluster.on("disconnect", worker => {
  });
  cluster.on("exit", worker => {
    cluster.fork();
    // Garante que um novo cluster inicie se um antigo morrer
  });
} else {
  require("../bin/server.js");
}
