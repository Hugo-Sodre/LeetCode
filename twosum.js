function twoSum(nums, target) {
  //Criar um objeto para mapear o valor complementar e o indice correspondente
  const complementMap = {};

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    const complement = target - num;
    // Verificar se o complemento está presente no objeto complementMap
    if (complement in complementMap) {
      return [complementMap[complement], i];
    }
    // Se o complemento não estiver presente, adicionar o número atual e seu índice ao objeto complementMap
    complementMap[num] = i;
  }
  // Se nenhum par de números for encontrado, retornar um array vazio
  return [];
}

const nums = [2, 7, 11, 15];
const target = 9;

const result = twoSum(nums, target);

console.log(result);
