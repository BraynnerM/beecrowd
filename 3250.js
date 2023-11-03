const path = require('path');
const currentFile = path.dirname(process.argv[1]);

//realiza a leitura das linhas no arquivo dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');
const [f, s, g, u, d] = lines[0].split(' ').map(Number);

function solveElevatorProblem(f, s, g, u, d) {
  const visited = new Array(f + 1).fill(false);
  const queue = [];

  queue.push(s);
  visited[s] = true;

  while (queue.length > 0) {
    const current = queue.shift();

    if (current === g) {
      return visited[current] - 1;
    }

    const upFloor = current + u;
    const downFloor = current - d;

    if (upFloor <= f && !visited[upFloor]) {
      visited[upFloor] = visited[current] + 1;
      queue.push(upFloor);
    }

    if (downFloor >= 1 && !visited[downFloor]) {
      visited[downFloor] = visited[current] + 1;
      queue.push(downFloor);
    }
  }

  return 'use the stairs';
}

const result = solveElevatorProblem(f, s, g, u, d);
console.log(result);

