import { createContext } from "react";

export const HoroscopeContext = createContext();

// export default function HoroscopeProvider(props) {
//   const [sign, setSign] = useState("Leo");
//   return (
//     <HoroscopeContext.Provider value={{ sign, setSign }}>
//       {props.children}
//     </HoroscopeContext.Provider>
//   );
// }
