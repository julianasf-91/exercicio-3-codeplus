const $parentList = document.querySelector('.parent-list');

const parentList = [
  {
    name: "Marcos Maia",
    children: "Clarice",
  },
  {
    name: "João Paulo",
    children: "Pedro",
  },
  {
    name: "Fernanda",
    children: "Rosa",
  },
  {
    name: "Patricia",
    children: "Ana",
  },
  {
    name: "Lucas",
    children: "Samira",
  },
]

function renderParentList(list){
  for (const family of parentList) {
    if (family.name == 'Fernanda' || family.name == 'Patricia') {
      $parentList.innerHTML += `<li>${family.name} é mãe de ${family.children}</li>`
    } else {
      $parentList.innerHTML += `<li>${family.name} é pai de ${family.children}</li>`
    }
  }
  console.log(list);
}

renderParentList(parentList)

//a função deve adicionar as lis dentro da ul ".parent-list", contendo o nome do pai e da criança.

//ex: <li> Marcos Maia é pai de Clarice </li>

// Como o array tem 5 pais, deve adicionar 5 lis de acordo com exemplo acima. 

//dica: você pode usar o document.createElement('li') ou innerHTML;