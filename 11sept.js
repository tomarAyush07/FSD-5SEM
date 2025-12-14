document.getElementById("message").innerHTML ="Hello, welcome to JavaScript!";
document.getElementById("message").style.color = "blue";
document.getElementById("message").style.fontSize = "20px";
document.getElementById("message").style.fontFamily = "Arial, sans-serif";
document.getElementById("message").style.textAlign = "center";
document.getElementById("message").style.marginTop = "50px";
document.getElementById("message").style.backgroundColor = "#f0f0f0";
document.getElementById("message").style.padding = "10px";
document.getElementById("message").style.borderRadius = "5px";
document.getElementById("message").style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
document.getElementById("message").style.width = "300px";
document.getElementById("message").style.margin = "auto";
document.getElementById("message").style.transition = "all 0.3s ease";
document.getElementById("message").onmouseover = function() {
    this.style.backgroundColor = "#e0e0e0";
    this.style.color = "darkblue";
    this.style.transform = "scale(1.05)";
};  
document.getElementById("message").onmouseout = function() {
    this.style.backgroundColor = "#f0f0f0";
    this.style.color = "blue";
    this.style.transform = "scale(1)";
};  
document.getElementById("message").onclick = function() {
    alert("You clicked the message!");
}
document.getElementById("message").ondblclick = function() {
    this.style.fontWeight = this.style.fontWeight === "bold" ? "normal" : "bold";
}
document.getElementById("message").oncontextmenu = function(event) {
    event.preventDefault();
    alert("Right-click is disabled on this message.");
}   
document.getElementById("message").onkeydown = function(event) {
    if(event.key === "Enter") {
        alert("You pressed Enter!");
    }
    else if(event.key === "Escape") {
        this.style.display = "none";
    }   
};
document.getElementById("message").tabIndex = 0; // Make div focusable
document.getElementById("message").setAttribute("role", "alert"); // Accessibility