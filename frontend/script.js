fetch("http://backend:5000/users")  // Change port/URL later for Kubernetes
  .then((res) => res.json())
  .then((data) => {
    const userList = document.getElementById("user-list");
    data.forEach(user => {
      const li = document.createElement("li");
      li.textContent = JSON.stringify(user);
      userList.appendChild(li);
    });
  })
  .catch((err) => {
    console.error("Error fetching users:", err);
  });
