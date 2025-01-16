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
  const worker = findPerson(person)
  const workerSalaries = worker.trabajos.map((job) => job.salario)
  const salariesDeltas = workerSalaries.map((salary, index) => workerSalaries[index + 1] - salary).filter(delta => delta !== null && !Number.isNaN(delta))
  const linialProjection = YnohtsMath.average(salariesDeltas)
  return linialProjection
}