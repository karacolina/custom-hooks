import { useEffect, useState } from "react"

export const useFetch = ( url ) => {

    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: null
    })

    //funcion asincrona
    const getFetch = async () => {

        try {

         setState({
            ...state,
            isLoading: true
        }) 


        const resp = await fetch(url); 
        const data = await resp.json(); 

        // ok true para respuestas satisfactorias (códigos 200-299)
        if (resp.ok) { 

            //cuando ya tenemos la respuesta del fetch, mandamos a llamar a setState
            setState({ //tenemos que mandar las propiedades del objeto
                data, //data: data
                isLoading: false,
                hasError: null 
            }); 

        }else {
            console.log('Respuesta de red OK pero respuesta de HTTP no OK');
        }


        }catch (error) {
            console.log('Hubo un problema con la petición Fetch:' + error.message);
        }
    
    }


    useEffect(() => {

        getFetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [url])
    

  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError
  }
}
