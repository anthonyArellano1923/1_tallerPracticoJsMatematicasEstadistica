const workers = salarios

function findPerson(personToFind) { //Requieres person 'name'
  return workers.find((worker) => worker.name == personToFind)
}

function calculateWorkerMedian(person) { //Requieres person 'name'
  const worker = findPerson(person)
  const workerSalaries = worker.trabajos.map((job) => job.salario)
  const workerMedian = YnohtsMath.calculateMedian(workerSalaries)
  return workerMedian
}

function projectingSalaries(person) {
  const worker = findPerson(person) //Finds the subject
  const workerSalaries = worker.trabajos.map((job) => job.salario)//Creates a list of subjects salaries
  const salariesDeltas = workerSalaries.map((salary, index) => workerSalaries[index + 1] - salary).filter(delta => delta !== null && !Number.isNaN(delta)) // Create a list of the deltas between salaries, excluding null or NaN values.
  const linearProjection = YnohtsMath.average(salariesDeltas) * 100 / workerSalaries[workerSalaries.length - 1] //“Calculate the average of the deltas and the percentage of salary variation based on the average.”
  return linearProjection.toFixed(2) + '%'
}
