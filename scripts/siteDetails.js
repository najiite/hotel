
import { createContext } from 'react'

const SiteDetails = createContext('')
export const SiteDetailsProvider = ({children}) => {
    const siteName = "La Belle Vue Hotel"

    return (
        <SiteDetails.Provider value={{siteName}}>
            {children}
        </SiteDetails.Provider>
    )
}


export default SiteDetails;