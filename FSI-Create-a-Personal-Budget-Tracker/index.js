let weeklyExpenses = 0
let monthlyExpenses = 0
let annualExpenses = 0

// Your Code Here

window.prompt(weeklyExpenseQuestions[0])
let answer = window.prompt(weeklyExpensesQuestions[0])
console.log(answer)

let stringAnswer=window.prompt(weeklyExpenseQuestions[0])
let numberAnswer=parseFloat(stringAnswer)
console.log(numberAnswer)

for(let i = 0; i < weeklyExpensesQuestions.length; i++){
let answer=parseFloat(window.prompt(weeklyExpenseQuestions[i]))
weeklyExpenses=weeklyExpenses + answer
}

