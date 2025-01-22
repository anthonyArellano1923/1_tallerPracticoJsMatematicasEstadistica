const workers = salarios
const companies = getCompaniesInfo(workers)

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
  const linearProjection = YnohtsMath.calculateMedian(salariesDeltas) / workerSalaries[workerSalaries.length - 1]
  const newSalary = workerSalaries[workerSalaries.length - 1] + workerSalaries[workerSalaries.length - 1] * linearProjection
  console.log('Actual salary: ', workerSalaries[workerSalaries.length - 1])
  return newSalary
}

//Análisis empresarial

function selfCompaniesAnalysis(workers){
/*{
-Primero, debo crear una lista de empresas. Para ello debo acceder a cada persona y ver en qué empresa ha trabajado
}*/
  function getCompanies(workers){ 
    listOfCompanies = []
    workers.forEach(worker => {
      worker.trabajos.forEach(job => {
          if (!listOfCompanies.includes(job.empresa)){
            listOfCompanies.push(job.empresa)
          }
      })
    })
    return listOfCompanies
  }

/*{
-Segundo, por cada empresa, verificar si el trabajador estuvo en la empresa en la que estamos iterando. Si es así, obtener los salarios del año correspondiente.
}*/

  function getWorkersSalaries(workers, companyName, yearToReview) {
    let workersSalaries = []
    workers.forEach(worker => {
      worker.trabajos.forEach(job => {
        if (job.year == yearToReview && job.empresa == companyName){
          workersSalaries.push(job.salario)
        }
      })
    })
    return workersSalaries
  }
  
  const startingYear = 2018
  let companiesToAnalyze = getCompanies(workers)
  let companiesAnalized = {}

  for (let i = 0; i < companiesToAnalyze.length; i++) {
    let companyName = companiesToAnalyze[i]
    if (!companiesToAnalyze[companyName]){
      companiesAnalized[companyName] = {}
    }
    for (let j = startingYear; j < 2024; j++){
      let yearToReview = j
      let salaries = getWorkersSalaries(workers, companyName, yearToReview)
      companiesAnalized[companyName][yearToReview] = salaries
    }
  }
  
  return companiesAnalized
}

function getCompaniesInfo(workers) {
  let companies = []
  workers.forEach(person => {
    person.trabajos.forEach(job => {
      if (!companies[job.empresa]) {
        companies[job.empresa] = {}
      }
      if(!companies[job.empresa][job.year]){
        companies[job.empresa][job.year] = []
      }
      companies[job.empresa][job.year].push(job.salario)
    })
  })
  return companies
}

function yearlyCompanySalaryMedian(company, year) {
  if(companies[company]){
    if(companies[company][year]){
      const yearlyMedian = YnohtsMath.calculateMedian(companies[company][year])
      return yearlyMedian
    }
    else {
      return `En el año ${year} la empresa ${company} no registra salarios pagados.`
    }
  } else {
    return `La empresa ${company} no se encuentra en la base de datos`
  }
}

function companyRangeSalaryProjection(companyName){
  const lowerSalaries = []
  const higherSalaries = []
  if(companies[companyName]){
    const companyToEvaluate = companies[companyName]
    Object.values(companyToEvaluate).forEach(year => {
      year.sort((x,y) => - y + x)
      lowerSalaries.push(year[0])
      higherSalaries.push(year[year.length - 1])
    })
    const rangeProjection = [YnohtsMath.calculateMedian(lowerSalaries), YnohtsMath.calculateMedian(higherSalaries)]
    return rangeProjection
  } else {
    return `La empresa ${companyName} no se encuentra en la base de datos.`
  }
}
