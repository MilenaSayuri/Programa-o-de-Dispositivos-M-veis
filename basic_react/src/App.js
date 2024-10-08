// function Button() {
//   return <button>Sou um botao</button>;
// }

// //MARCACAO COM JSX
// function AboutPage() {
//   return (
//     <>
//       <h1>About</h1>
//       <p>
//         Ola. <br />
//         Como esta indo?
//       </p>
//     </>
//   );
// }

// const user = {
//   name: "Rose",
//   imageUrl:
//     "https://images.pexels.com/photos/736230/pexels-photo-736230.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//   imageSize: 500,
// };

// export default function MyApp() {
//   return (
//     <div>
//       <h1>Bem vindo ao basico de React</h1>
//       <AboutPage />
//       <Button />
//     </div>
//   );
// }

// export default function Photo() {
//   return(
//   <>
//     <h1>{user.name}</h1>
//     <img
//       className="avatar"
//       src={user.imageUrl}
//       alt={'Imagem de ' + user.name}
//       style={{
//         width: user.imageSize,
//         height: user.imageSize
//       }}
//     />
//     </>
//   )
// }

//Condicionais
// let content
// if (isLoggedIn)
//   content = <AdminPanel/>
// else
//   content = <LoginForm/>
// return(
//   <div>{content}</div>
// )

//FUNCAO ARRAY MAP PARA RENDERIZAR LISTAS DE COMPONENTES
// const food = [
//   { title: "Shimeji", id: 1 },
//   { title: "Temaki", id: 2 },
//   { title: "Ramen", id: 3 },
// ];
//DENTRO DO COMPONENT USE O MAP() PARA TRANSFORMAR UMA MATRIZ DE PRODUTOS EM UMA MATRIZ DE <LI>
// const listItems = food.map(food =>
//   <li key={food.id}>
//       {food.title}
//   </li>
// )

// const products = [
//   { name: "Vestido", isClothes: true, id: 1 },
//   { name: "Sapato", isClothes: false, id: 2 },
// ];

// const listItems2 = products.map((products) => (
//   <li key={products.id}>{products.name}</li>
// ));

// export default function ShoppingItems() {
//   const listItems = products.map((products) => (
//     <li
//       key={products.id}
//       style={{ color: products.isClothes ? "magenta" : "Blue" }}
//     >
//       {products.name}
//     </li>
//   ));

//   return (
//     <ul>
//       {/* {listItems}<br/>
//     {listItems2} */}
//       {listItems}
//     </ul>
//   );
// }

//EVENTOS
// function MyButton() {
//   function handleClick() {
//     alert('Voce clicou em mim!')
//   }
//   return(
//     <button onClick={handleClick}>Clica aqui</button>
//   )
// }

// export default function Botao() {
//   return(
//     <MyButton/>
//   )
// }

//ATUALIZANDO A TELA
import { useState } from "react";

function Button() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }
  return <button onClick={handleClick}>Clicou {count} vezes</button>;
}

export default function RefreshScreen() {
  return(
    <div>
      <h1>Contador</h1>
      <Button/><br />
      <Button/>
    </div>
  )
}
