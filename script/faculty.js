// Sample faculty data
fetch("loader.html")
    .then(res => res.text())
    .then(html => {
      document.getElementById("loader-container").innerHTML = html;
    });

const facultyData = [
    {
        name: "Dr TT Mirnalinee",
        designation: "Head of the Department",
        degrees: "B.E, M.E, PhD",
        about: "Expert in Computer vision, Machine learning, Green Networks and Software Defined Networks",
        img: "https://www.ssn.edu.in/wp-content/uploads/2020/04/mirnalini.png"
    },
    {
        name: "Dr RS Milton",
        designation: "Professor",
        degrees: "B.E (Hons), M.E, PhD",
        about: "Expert in Algorithms, Artificial Intelligence, Machine Learning, Natural Language Processing, Reinforcement Learning, and Computer Science Education",
        img: "https://www.ssn.edu.in/wp-content/uploads/2024/03/02-photo.jpg"
    },
    {
        name: "Dr D Venkata Vara Prasad",
        designation: "Professor",
        degrees: "B.E, M.E, PhD",
        about: "Expert in Computer Architecture, Microprocessors and Microcontrollers, GPU Computing, Machine learning and Data Analytics",
        img: "https://www.ssn.edu.in/wp-content/uploads/2020/06/image1-6.jpg"
    },
    {
        name: "Dr B Bharathi",
        designation: "Associate Professor",
        degrees: "B.E, M.E, PhD",
        about: "Expert in Speech processing, Natural language processing and Image Processing",
        img: "https://www.ssn.edu.in/wp-content/uploads/2020/04/bharathi.jpg"
    },
    {
        name: "Dr B Prabavathy",
        designation: "Associate Professor",
        degrees: "B.E, M.E, PhD",
        about: "Expert in Object Oriented Programming, Data Structures, Internet Programming, Compiler Design, Data Analytics, Machine Learning and Deep Learning",
        img: "https://www.ssn.edu.in/wp-content/uploads/2020/04/prabha.jpg"
    },
    {
        name: "Dr J Suresh",
        designation: "Associate Professor",
        degrees: "B.E, M.E, PhD",
        about: "Expert in Artificial Intelligence, Machine Learning and Blockchain Technology.",
        img: "https://www.ssn.edu.in/wp-content/uploads/2020/04/suresh.jpg"
    },
    {
        name: "Dr R Kanchana",
        designation: "Associate Professor",
        degrees: "B.E, M.E, PhD",
        about: "Expert in Big Data Management and Analytics, Web Services, Internet of Things, Software Engineering, Machine Learning",
        img: "https://www.ssn.edu.in/wp-content/uploads/2020/04/kanchana.png"
    },
    {
        name: "Dr VS Felix Enigo",
        designation: "Associate Professor",
        degrees: "B.E, M.E, PhD",
        about: "Expert in Computer Networks, Medical Image Processing, IoT and Artificial Intelligence",
        img: "https://www.ssn.edu.in/wp-content/uploads/2020/06/image1.jpg"
    },
    {
        name: "Dr D Thenmozhi",
        designation: "Associate Professor",
        degrees: "B.E, M.E, PhD",
        about: "Expert in Natural Language Processing, Data Science",
        img: "https://www.ssn.edu.in/wp-content/uploads/2020/04/thenmozhi.jpg"
    },
    {
        name: "Dr G Raghu Raman",
        designation: "Associate Professor",
        degrees: "B.E, M.E, PhD",
        about: "Deputy Controller of Examinations.\nExpert in Image Processing, Machine Learning, Multi Agent Systems and Cloud computing",
        img: "https://www.ssn.edu.in/wp-content/uploads/2020/04/GR.jpg"
    },
    {
        name: "Dr J Bhuvana",
        designation: "Associate Professor",
        degrees: "B.E, M.E, PhD",
        about: "Expert in Computer Vision, Deep Learning, Machine Learning and Multiobjective optimization",
        img: "https://www.ssn.edu.in/wp-content/uploads/2020/04/11.jpg"
    },
    {
        name: "Dr P Mirunalini",
        designation: "Associate Professor",
        degrees: "B.E, M.E, PhD",
        about: "Expert in Medical image processing and Analysis, Image reconstruction, Machine learning , Deep learning and Pattern Recognition",
        img: "https://www.ssn.edu.in/wp-content/uploads/2020/04/Mirunalini.png"
    },
    
    {
        name: "Dr YV Lokeshwari",
        designation: "Associate Professor",
        degrees: "B.E, M.E, PhD",
        about: "Expert in Parallel Computational Methods, Cloud Security, Distributed Systems, Bioinformatics, Machine Learning, Big Data Analytics, Data Science and Cancer Treatment through Biomarkers.",
        img: "https://www.ssn.edu.in/wp-content/uploads/2020/04/lokeshwari.png"
    },
    {
        name: "Dr S Rajalakshmi",
        designation: "Assistant Professor",
        degrees: "B.E, M.E, PhD",
        about: "Expert in Machine learning, Data mining, Natural language processing, Recommendation systems",
        img: "https://www.ssn.edu.in/wp-content/uploads/2020/04/raji.jpg"
    },
    {
        name: "Dr KR Sarath Chandran",
        designation: "Assistant Professor",
        degrees: "B.E, M.E, PhD",
        about: "Expert in Internet of things, Reconfigurable computing, Machine Learning, Image Processing, System-on-Chip architectures, Energy efficient architecture designs, Embedded systems for video and image processing and Operating systems.",
        img: "https://www.ssn.edu.in/wp-content/uploads/2020/04/Sarath-Chandran-photo.jpg"
    },
    {
        name: "Dr N Sujaudeen",
        designation: "Assistant Professor",
        degrees: "B.E, M.E, PhD",
        about: "Expert in Distributed Computing, Networking, IoT, Big Data Analytics & Machine learning",
        img: "https://www.ssn.edu.in/wp-content/uploads/2020/04/sujaudeen.png"
    },
    {
        name: "Dr M Saritha",
        designation: "Assistant Professor",
        degrees: "B.E, M.E, PhD",
        about: "Expert in Natural Language Processing, Machine Learning Applications, Statistical Relational Learning (SRL), Probabilistic Logic Systems, Predictive Analytics, Learning and Inference Algorithms, Internet of Things.",
        img: "https://www.ssn.edu.in/wp-content/uploads/2022/06/saritha.png"
    },
    {
        name: "Dr H Shahul Hamead",
        designation: "Assistant Professor",
        degrees: "B.E, M.E, PhD",
        about: "Software Defined Networking, Sustainable Networking, Distributed Systems, and Queueing Theory.",
        img: "https://www.ssn.edu.in/wp-content/uploads/2020/04/shahul.png"
    },
    {
        name: "Dr S Lakshmi Priya",
        designation: "Assistant Professor",
        degrees: "B.E, M.E, PhD",
        about: "Expert in Data Analytics, Machine Learning",
        img: "https://www.ssn.edu.in/wp-content/uploads/2020/04/lakshmi-Priya.jpg"
    },
    {
        name: "Dr S Angel Deborah",
        designation: "Assistant Professor",
        degrees: "B.E, M.E, PhD",
        about: "Expert in Machine Learning, Natural Language Processing, Data Science, Embedded Systems and Internet of Things",
        img: "https://www.ssn.edu.in/wp-content/uploads/2020/04/Angel-Deborah.jpg"
    },
    {
        name: "Dr SM Dhannya ",
        designation: "Assistant Professor",
        degrees: "B.E, M.E, PhD",
        about: "Expert in Analysis of algorithms, Hardness of combinatorial problems, Approximation algorithms, Optimal algorithms, Graph Algorithms, Coloring problems in perfect graphs",
        img: "https://www.ssn.edu.in/wp-content/uploads/2023/04/Dhannya-Photo.png"
    },
    
    {
        name: "Dr S Saraswathi",
        designation: "Associate Professor",
        degrees: "B.E, M.E, PhD",
        about: "Expert in Network Security, Cyber Security, IoT, Blockchain",
        img: "https://www.ssn.edu.in/wp-content/uploads/2020/04/SMS-B-1052.jpg"
    },
    {
        name: "Dr Nilu R. Salim",
        designation: "Assistant Professor",
        degrees: "B.E, M.E, PhD",
        about: "Expert in Biometrics, Pattern Recognition, Image Processing, Machine Learning and Deep Learning",
        img: "https://www.ssn.edu.in/wp-content/uploads/2020/04/Nilu-photo-1.jpg"
    },
    {
        name: "Dr Sakali Raghavendra Kumar",
        designation: "Assistant Professor",
        degrees: "B.E, M.E, PhD",
        about: "Expert in Bio-inspired electronics, Reconfigurable computing, Fault-Tolerant data path elements and System design.",
        img: "https://www.ssn.edu.in/wp-content/uploads/2023/09/Ragavendra-Kumar-photo-1.jpg"
    },
    {
        name: "Dr Poreddy Ajay Kumar Reddy",
        designation: "Assistant Professor",
        degrees: "B.E, M.E, PhD",
        about: "Expert in Multimedia Quality Assessment, Machine Learning, Deep Learning",
        img: "https://www.ssn.edu.in/wp-content/uploads/2025/04/ajay_photo.jpg"
    },
    {
        name: "Dr J Rajeshwari",
        designation: "Assistant Professor",
        degrees: "B.E, M.E, PhD",
        about: "Expert in Machine Learning, Deep Learning, Data Analytics, Natural Language Processing (NLP), Computer Vision.",
        img: "https://www.ssn.edu.in/wp-content/uploads/2024/02/Mrs.-J.-Rajeswari.jpg"
    }, 
    {
        name: "Dr Vijaya Lakshmi",
        designation: "Assistant Professor",
        degrees: "B.E, M.E, PhD",
        about: "Expert in Meta -Heuristic Algorithms, Intelligent Transportation System, Cryptography and Machine Learning",
        img: "https://www.ssn.edu.in/wp-content/uploads/2024/09/SEL_2342.jpeg"
    },
    {
        name: "Dr Anusha Jayasimhan",
        designation: "Assistant Professor",
        degrees: "B.E, M.E, PhD",
        about: "Expert in Deep Learning and Computer Vision",
        img: "https://www.ssn.edu.in/wp-content/uploads/2024/08/ANUSHA_Photo.jpeg"
    },
    {
        name: "Dr Ahana Priyanka",
        designation: "Assistant Professor",
        degrees: "B.E, M.E, PhD",
        about: "BioMedical Image Processing Metaheuristic Algorithms and Deep Learning",
        img: "https://www.ssn.edu.in/wp-content/uploads/2025/08/ahana-profile.jpg"
    },
    {
        name: "Mr E Selvam",
        designation: "Assistant Professor",
        degrees: "B.E, M.E, PhD",
        about: "Expert in Autonomous Systems, Multi-Agent Systems, Reinforcement Learning, SLAM",
        img: "https://www.ssn.edu.in/wp-content/uploads/2025/08/Selvam-photo.jpg"
    },
    {
        name: "Dr KA Muthukumar",
        designation: "Assistant Professor",
        degrees: "B.E, M.E, PhD",
        about: "Expert in AI Healthcare, Computer Vision, Machine Learning, Infrared Imaging, IoT Edge Computing (Optimization), Accessibility Computing",
        img: "https://www.ssn.edu.in/wp-content/uploads/2025/08/Muthukumar-photo.jpeg"
    },
    {
        name: "Dr R Neeraja",
        designation: "Assistant Professor",
        degrees: "B.E, M.E, PhD",
        about: "Expert in Deep Learning, Medical Image Analysis, Image Processing",
        img: "https://www.ssn.edu.in/wp-content/uploads/2025/08/Screenshot-2025-08-26-190508.png"
    },
    {
        name: "Dr R Sneka",
        designation: "Assistant Professor",
        degrees: "B.E, M.E, PhD",
        about: "Expert in Cyber-Physical System Optimization, Machine Learning and IoT.",
        img: "https://www.ssn.edu.in/wp-content/uploads/2025/08/Sneka-Nandhini.jpeg"
    },
    
];

// Hierarchy order
const hierarchy = [
    "Head of the Department",
    "Professor",
    "Associate Professor",
    "Assistant Professor"
];

// Render faculty grouped by designation without labels
function renderFacultyList() {
    const container = document.getElementById('facultyList');
    container.innerHTML = '';

    hierarchy.forEach(designation => {
        const group = facultyData.filter(faculty => faculty.designation === designation);
        if(group.length > 0) {
            const groupContainer = document.createElement('div');
            groupContainer.className = 'faculty-group';
            group.forEach(faculty => {
                const card = document.createElement('div');
                card.className = 'faculty-card';
                card.innerHTML = `
                    <img src="${faculty.img}" alt="${faculty.name}">
                    <h3>${faculty.name}</h3>
                    <p><strong>${faculty.designation}</strong></p>
                    <p>${faculty.degrees}</p>
                    <p>${faculty.about}</p>
                `;
                groupContainer.appendChild(card);
            });
            container.appendChild(groupContainer);
        }
    });
}

// Filter function (maintains hierarchy)
function filterFaculty() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const container = document.getElementById('facultyList');
    container.innerHTML = '';

    hierarchy.forEach(designation => {
        const group = facultyData.filter(faculty => 
            faculty.designation === designation && faculty.name.toLowerCase().includes(input)
        );
        if(group.length > 0) {
            const groupContainer = document.createElement('div');
            groupContainer.className = 'faculty-group';
            group.forEach(faculty => {
                const card = document.createElement('div');
                card.className = 'faculty-card';
                card.innerHTML = `
                    <img src="${faculty.img}" alt="${faculty.name}">
                    <h3>${faculty.name}</h3>
                    <p><strong>${faculty.designation}</strong></p>
                    <p>${faculty.degrees}</p>
                    <p>${faculty.about}</p>
                `;
                groupContainer.appendChild(card);
            });
            container.appendChild(groupContainer);
        }
    });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', renderFacultyList);
