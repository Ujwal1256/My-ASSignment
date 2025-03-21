function userRole(obj){
  
    obj["role"] === "admin" ?
      console.log(obj["active"] ? "Admin Access Granted!":"Admin Access Revoked")
    : 
    obj["role"] === "user" ?
      console.log(obj["active"] ? "User  Access Granted!":"User Access Revoked")
    :console.log("Access Denied")
  
}

userRole({ name: "Alice", role: "admin", active: true })
userRole({ name: "Alice", role: "admin", active: false })
userRole({ name: "Bob", role: "user", active: true })
userRole({ name: "Bob", role: "user", active: false })
userRole({ name: "Bob", role: "other", active: true })