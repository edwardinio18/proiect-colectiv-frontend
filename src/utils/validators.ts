export function validateUsername(userName: String): Boolean {
    if(!userName){
        return false;
    }
    return true;
}

export function validatePasswd(passwd: String): Boolean {
    if(!passwd){
        return false;
    }
    if(!containsUpper(passwd)){
        return false;
    }
    return true;
}

function containsUpper(str: String): Boolean {
    let contains = false;
    str.split('').forEach(letter => {
        if(letter === letter.toUpperCase()){
            contains = true;
        }
    })
    return contains;
}