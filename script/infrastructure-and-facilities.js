fetch("loader.html")
    .then(res => res.text())
    .then(html => {
      document.getElementById("loader-container").innerHTML = html;
    });

const labs = [
            { name: "Operating System and Network Programming Lab", img: "https://www.ssn.edu.in/wp-content/uploads/2023/06/os-300x161.png" },
            { name: "System Programming Lab", img: "https://www.ssn.edu.in/wp-content/uploads/2023/06/system-300x161.png" },
            { name: "Software Engineering Lab", img: "https://www.ssn.edu.in/wp-content/uploads/2023/06/se-300x161.png" },
            { name: "Web Technology Lab", img:"https://www.ssn.edu.in/wp-content/uploads/2023/06/web-t-300x161.png"},
            { name: "Windows Programming Lab", img: "https://www.ssn.edu.in/wp-content/uploads/2023/06/windows-300x161.png" },
            { name: "Graphics and Multimedia Lab", img: "https://www.ssn.edu.in/wp-content/uploads/2023/06/image7-300x161.png" },
            { name: "Java Technology Lab", img: "https://www.ssn.edu.in/wp-content/uploads/2023/06/image8-300x161.png" },
            { name: "Digital Systems Lab", img: "https://www.ssn.edu.in/wp-content/uploads/2023/06/image-300x161.png" },
            { name: "Microprocessors Lab", img: "https://www.ssn.edu.in/wp-content/uploads/2023/06/image10-300x161.png" },
            { name: "Post-Graduate (PG) Lab – I", img: "https://www.ssn.edu.in/wp-content/uploads/2023/06/Pg-lab-300x161.png" },
            
            { name: "IoT Lab", img: "https://www.ssn.edu.in/wp-content/uploads/2023/06/image5-300x161.png" },
            { name: "High Performance Computing Lab", img: "https://www.ssn.edu.in/wp-content/uploads/2023/06/image6-300x161.png" },
            
            { name: "BIRAC lab", img: "https://www.ssn.edu.in/wp-content/uploads/2023/06/image4-300x161.png" },
            { name: "SDN lab", img: "https://www.ssn.edu.in/wp-content/uploads/2023/06/software-300x161.png" },
            { name:"Cognizant Open Source Lab", img: "https://www.ssn.edu.in/wp-content/uploads/2023/06/image3-300x161.png" },
            { name: "Post-Graduate (PG) Lab – II", img: "" },
            { name: "Open Source Lab", img: "" },
        ];

        const labContainer = document.getElementById("lab-container");
        const lightbox = document.getElementById("lightbox");
        const lightboxImg = document.getElementById("lightbox-img");

        labs.forEach(lab => {
            const card = document.createElement("div");
            card.className = "lab-card";

            if (lab.img) {
                const img = document.createElement("img");
                img.src = lab.img;
                img.alt = lab.name;
                img.onclick = (e) => {
                    e.stopPropagation();
                    lightbox.style.display = "flex";
                    lightboxImg.src = lab.img;
                };
                card.appendChild(img);
            }

            const name = document.createElement("span");
            name.textContent = lab.name;
            card.appendChild(name);

            labContainer.appendChild(card);
        });