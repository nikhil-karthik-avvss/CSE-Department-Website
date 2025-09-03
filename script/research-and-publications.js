fetch("loader.html")
    .then(res => res.text())
    .then(html => {
      document.getElementById("loader-container").innerHTML = html;
    });

const researchAreas = [
            "Image Processing",
            "Natural Language Processing",
            "Speech Processing",
            "Internet of Things",
            "Software Defined Networking",
            "Big Data Analytics",
            "Cybersecurity",
            "Blockchain",
            "Machine Learning",
            "Deep Learning",
            "Neural Networks",
            "Quantum Computing",
            "Optimization Techniques",
            "Reinforcement Learning",
            "Relational Learning",
            "Open Source Development",
            "AR/VR",
            "Multimedia"
        ];

        const researchContainer = document.getElementById("research-container");

        researchAreas.forEach(area => {
            const card = document.createElement("div");
            card.className = "research-card";

            const name = document.createElement("span");
            name.textContent = area;
            card.appendChild(name);

            researchContainer.appendChild(card);
        });