
function Message({isLoggedIn}){
     if(isLoggedIn){
        return <h1>Welcome User</h1>;
}   
     else{

       return <h1>Welcome Guest</h1>;
}

}

export default Message;
