import { Link } from "react-router-dom";

function Header(){
    return(
        <>
            <Link to={"/"}>Home</Link>
            <Link to={"/about"}>About</Link>
            <Link to={"/contact"}>Contact</Link>
            <Link to={"/mypath"}>Navigation</Link>
            <Link to={"/map"}>Data Mapping</Link>
            <Link to={"/context"}>My Context</Link>
            <Link to={"/callback"}>Call Back</Link>
            <Link to={"/memo"}>Use Memo</Link>
            <Link to={"/form"}>Form Handling</Link>
            <Link to={"/api"}>Api Connectivity</Link>
            <Link to={"/clm"}>LC Method</Link>
        </>
    )
}
export default Header;