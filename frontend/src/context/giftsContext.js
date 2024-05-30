import { createContext, useState } from "react";

export const giftContext = createContext()

export default function GiftProvider({children}){
    const [gifts,setGifts] = useState(null)

return(
    <giftContext.Provider value={{gifts,setGifts}}>
        {children}
    </giftContext.Provider>
)}