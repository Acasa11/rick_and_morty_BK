import Card from '../card/Card';

export default function Cards({characters, onClose}) {
   return (<div style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
   }}>
         {
         !characters.length ? <h2>Por Favor ingrese un id...</h2>
         : 
            characters.map((personaje) => {
            return (<Card
            key={personaje.id}
            id={personaje.id}
            name={personaje.name}
            status={personaje.status}
            species={personaje.species}
            gender={personaje.gender}
            origin={personaje.origin.name}
            image={personaje.image} 
            onClose={onClose}/>)
         })}
   </div>)
}
