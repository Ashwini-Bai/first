function login() {
    let role = document.getElementById("role").value;

    if (role === "Patient") {
        window.location.href = "patient.html";
    } 
    else if (role === "Doctor") {
        window.location.href = "doctor.html";
    } 
    else if (role === "Admin") {
        window.location.href = "admin.html";
    } 
    else {
        alert("Please select a role");
    }
}