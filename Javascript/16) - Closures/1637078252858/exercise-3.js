function createStore() {
  const product = []
  return function (items){
     product.push(items);
    console.log(product);
  }

}

const redPants = { id: 1, name: 'Red Pants' };
const whiteHat = { id: 2, name: 'White Hat' };
const blackSneakers = { id: 3, name: 'Black Sneakers' };
const redBoots = { id: 4, name: 'Red Boots'};

console.log('--- Dress Store ---');
const dressStore = createStore();
dressStore(redPants);
dressStore(whiteHat)

console.log('--- Shoes Store ---');
const shoesStore = createStore();
shoesStore(blackSneakers);
shoesStore(redBoots);