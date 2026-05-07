import Card from "./components/Card"

const cardsData = [{
  id:1,
  theme:'red',
  value:86,
  averages:{
    weekly:96,
    monthly:77
  }
},
{
  id:2,
  theme:'green',
  value:61,
  averages:{
    weekly:86,
    monthly:62
  }
}
]

export default function App(){
  return(
    <div className="main">
   {cardsData.map(item => (
    <Card key={item.id} data={item}/>
   ))}
    </div>
  )
}