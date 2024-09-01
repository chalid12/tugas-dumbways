let dataProject = [];

function hitungDurasi(tanggalMulai, tanggalAkhir) {
  const mulai = new Date(tanggalMulai);
  const akhir = new Date(tanggalAkhir);
  const durasi = akhir - mulai;
  const hari = Math.floor(durasi / (1000 * 60 * 60 * 24));
  return `${hari} hari`;
}

function inputProject(event) {
  event.preventDefault();
  const namaProject = document.getElementById("namaProject").value;
  const mulaiProject = document.getElementById("mulaiProject").value;
  const akhirProject = document.getElementById("akhirProject").value;
  const keteranganProject = document.getElementById("keteranganProject").value;
  const teknologi = document.querySelectorAll('input[type="checkbox"]:checked');
  const teknologiArray = Array.from(teknologi).map((tech) => tech.id);
  const gambarProject = document.getElementById("gambarProject").files[0];

  const gambarProjectURL = URL.createObjectURL(gambarProject);

  const projectData = {
    namaProject,
    mulaiProject,
    akhirProject,
    keteranganProject,
    teknologi: teknologiArray,
    gambarProject: gambarProjectURL,
  };

  dataProject.push(projectData);

  renderProject();
}

function renderProject() {
  const projectContainer = document.getElementById("project-list");
  projectContainer.innerHTML = "";

  for (let index = 0; index < dataProject.length; index++) {
    const project = dataProject[index];
    const durasi = hitungDurasi(project.mulaiProject, project.akhirProject);

    projectContainer.innerHTML += `
      <div class="project-list-items"> 
        <div class="project-card"> 
          <div class="project-image">
            <img src="${
              project.gambarProject
            }" alt="Gambar Project" class="project-img" />
          </div>
          <div class="project-content">
            <h1><a href="detail-project.html" target="_blank">${
              project.namaProject
            }</a> - ${new Date(project.mulaiProject).getFullYear()}</h1>
            <div class="detail-project">
              
              Durasi: ${durasi} 
              <br>
            </div>
            <p class="list-deskripsi">${project.keteranganProject}</p>
            <div class="logo-tech">
              ${
                project.teknologi.includes("nodeJS")
                  ? '<i class="fa-brands fa-node-js"></i>'
                  : ""
              }
              ${
                project.teknologi.includes("reactJS")
                  ? '<i class="fa-brands fa-react"></i>'
                  : ""
              }
              ${
                project.teknologi.includes("nextJS")
                  ? '<i class="fa-brands fa-js"></i>'
                  : ""
              }
              ${
                project.teknologi.includes("typeScript")
                  ? '<i class="fa-brands fa-vuejs"></i>'
                  : ""
              }
            </div>
            <div class="btn-group">
              <button class="btn-edit">Edit</button>
              <button class="btn-delete" onclick="deleteProject(${index})">Delete</button>
            </div>
          </div>
        </div> 
      </div>
    `;
  }
}

function deleteProject(index) {
  dataProject.splice(index, 1);
  renderProject();
}
