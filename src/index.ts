import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';
import NumbersCollection from './NumbersCollection';
import { Sorter } from './Sorter';

// const numbersCollection = new NumbersCollection([3, 9, 4, 0]);
// const sorter = new Sorter(numbersCollection);
// sorter.sort();
// console.log(numbersCollection.data);
// const charCollection = new CharactersCollection('XasjgoP');
// const sorter = new Sorter(charCollection).sort();
// console.log(charCollection.data);

const linkedList = new LinkedList();
linkedList.add(500);
// linkedList.print();

linkedList.add(-10);
// linkedList.print();

linkedList.add(-3);

linkedList.add(4);
linkedList.sort();
// sorter.sort();
linkedList.print();
// linkedList.print();
