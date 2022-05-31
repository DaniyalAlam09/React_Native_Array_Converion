import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SectionList } from 'react-native';


const DATA = [
  {
    category:"Main Dishes",
    title:"Pizza",
    key:0
  },
  {
    category:"Main Dishes",
    title:"Burger",
    key:1
  },
  {
    category:"Main Dishes",
    title:"Risotto",
    key:2
  },
  {
    category:"Sides",
    title:"French Fries",
    key:3
  },
  {
    category:"Sides",
    title:"Onion Rings",
    key:4
  },
  {
    category:"Sides",
    title:"Fried Shrimps",
    key:5
  },
  {
    category:"Drinks",
    title:"Water",
    key:6
  },
  {
    category:"Drinks",
    title:"Coke",
    key:7
  },
  {
    category:"Drinks",
    title:"Beer",
    key:8
  },
  {
    category:"Desserts",
    title:"Cheese Cake",
    key:9
  },
  {
    category:"Desserts",
    title:"Ice Cream",
    key:10
  },
]

var newData = []
const uniqueValues = new Set(DATA.map(v => v.category));
const uni = [...uniqueValues]
uni.map((cat)=>{
    var obj = {title:"",data:[]}
    obj.title = cat
    DATA.map((obj1)=>{
      if(cat == obj1.category){
        obj.data.push(obj1.title)
      }
    })
    newData.push(obj)
})
console.log(newData)
// let localeData = DATA.map((item) => {
//   item.key = moment(item.category)
//   return item
// });

// const section1 = () =>{
//   var data,sec;
//   for (let i=0; i<DATA.length; i++){
//    data = DATA[i];
//   sec = [];

//   if (data.category == "Main Dishes"){
//       sec.push(data)
   
//   }
  
// }



const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);


export default function App() {

  return (
    <View style={styles.container}>
      
      <SectionList
      sections={newData}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item }) => <Item title={item} />}
      renderSectionHeader={({ section: { title } }) => (
        <Text style={styles.header}>{title}</Text>
      )}
    />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8
  },
  header: {
    fontSize: 32,
    backgroundColor: "#fff"
  },
  title: {
    fontSize: 24
  }
});
