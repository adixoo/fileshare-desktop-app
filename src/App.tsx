// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import { invoke } from "@tauri-apps/api/core";
// import "./App.css";
//
// function App() {
//   const [greetMsg, setGreetMsg] = useState("");
//   const [name, setName] = useState("");
//
//   async function greet() {
//     // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
//     setGreetMsg(await invoke("greet", { name }));
//   }
//
//   return (
//     <main className="container">
//       <h1>Welcome to Tauri + React</h1>
//
//       <div className="row">
//         <a href="https://vitejs.dev" target="_blank">
//           <img src="/vite.svg" className="logo vite" alt="Vite logo" />
//         </a>
//         <a href="https://tauri.app" target="_blank">
//           <img src="/tauri.svg" className="logo tauri" alt="Tauri logo" />
//         </a>
//         <a href="https://reactjs.org" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <p>Click on the Tauri, Vite, and React logos to learn more.</p>
//
//       <form
//         className="row"
//         onSubmit={(e) => {
//           e.preventDefault();
//           greet();
//         }}
//       >
//         <input
//           id="greet-input"
//           onChange={(e) => setName(e.currentTarget.value)}
//           placeholder="Enter a name..."
//         />
//         <button type="submit">Greet</button>
//       </form>
//       <p>{greetMsg}</p>
//     </main>
//   );
// }
//
// export default App;

// import Start from "./components/Start";
// import Hotspot from "./components/Hotspot";
import { signal } from "@preact/signals-react";
import { useSignals } from "@preact/signals-react/runtime";
import Home from "./components/Home";
import { ThemeProvider } from "@/components/theme-provider";
export const Page = signal("start");

// const renderComponent = () => {
//    switch (Page.value) {
//       case "start":
//          return <Start />;
//       case "hotspot":
//          return <Hotspot />;
//       case "home":
//          return <Home />;
//       default:
//          return null;
//    }
// };

export default function App() {
   useSignals();
   return (
      <>
         <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
            {/* {Page ? renderComponent() : renderComponent()} */}
            <Home />
         </ThemeProvider>
      </>
   );
}
