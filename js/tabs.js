function populateTabs() {
    const regieTabs = document.getElementById("regieTabs");
    const regieTabsContent = document.getElementById("regieTabsContent");

    data.regies.forEach((regie, index) => {
        // Ajouter un onglet
        const tab = document.createElement("li");
        tab.className = "tab-item";
        tab.textContent = regie.name;
        tab.dataset.target = `tab-${index}`;
        tab.onclick = () => showTabContent(`tab-${index}`);
        regieTabs.appendChild(tab);

        // Ajouter du contenu
        const content = document.createElement("div");
        content.id = `tab-${index}`;
        content.className = "tab-pane";
        content.innerHTML = `
            <h3>${regie.name}</h3>
            <p><strong>Responsable :</strong> ${regie.responsable.name}</p>
        `;
        regieTabsContent.appendChild(content);
    });

    showTabContent("tab-0");
}

function showTabContent(id) {
    document.querySelectorAll(".tab-pane").forEach((pane) => pane.classList.remove("active"));
    document.getElementById(id).classList.add("active");
}

populateTabs();
