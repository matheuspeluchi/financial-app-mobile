import results from "./results.json"
interface ResultadoConcurso {
  concurso: number;
  data: string;
  result: string;
}
export type Result = {
  concurso: number
  data: string
  bola1: number
  bola2: number
  bola3: number
  bola4: number
  bola5: number
  bola6: number
}
const getResults = (): ResultadoConcurso[]  => {
  const newResutls: ResultadoConcurso[]= []

  for (let idx = 0; idx < results.length; idx++) {
    const item = results[idx];    
    newResutls.push({
      concurso: item.concurso,
      data: item.data,
      result: [item.bola1, item.bola2, item.bola3, item.bola4, item.bola5, item.bola6].sort((a, b) => a - b).toString()
    })      
  }
  return newResutls;
}

export const generateBet = ():number [] => {
  const resultados = getResults();
  const numbers: number[] = [];

  while (numbers.length < 6) {
      const randomNumber = Math.floor(Math.random() * 60) + 1;
      if(!numbers.includes(randomNumber))
        numbers.push(randomNumber);
  }

  const sortedNumbers = numbers.sort((a, b) => a - b);   
  const numbersString = sortedNumbers.toString();  
  const alreadyExists = resultados.some(resultado => resultado.result === numbersString);

  if (alreadyExists) {
      return generateBet();
  } else {
     return sortedNumbers
  }
}

