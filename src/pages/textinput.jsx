/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-duplicate-props */
export const TextInput = ({onTextChange, placeholder,styles}) =>{
    return(
        
        <input type='text'  style={{ ...loginStyles.inputStyle, ...styles}} 
        onChange={(e) => onTextChange(e.target.value)}
        
        placeholder={placeholder} className='text-Field'  />
    );
}

// const loginStyles= {
//     inputStyle:{
//         width: 100%;
//     }
// }