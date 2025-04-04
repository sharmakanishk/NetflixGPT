const validateLogin = (email, password)=>{
    const emailRegex =  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    const emailResult = emailRegex.test(email);
    const passwordResult = passwordRegex.test(password);
    if(!emailResult){
        return "Email is not valid!";
    }
    if(!passwordResult){
        return "Password is not valid!";
    }
    return null;
}