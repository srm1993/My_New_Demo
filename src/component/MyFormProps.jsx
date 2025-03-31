export default function MyFormProps({type,name,placeholder,value=''}){
    return(
        <>
            <input type={type} name={name} placeholder={placeholder} value={value}/>
            <br/>
        </>
    )
}