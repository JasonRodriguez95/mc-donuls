async function loadMenu(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        displayItems(data);
    } catch (error) {
        console.error('Error loading menu:', error);
    }
}

function displayItems(items) {
    const menu = document.getElementById('menu');
    menu.innerHTML = ''; // Limpiar contenido previo

    items.forEach(item => {
        const div = document.createElement('div');
        div.classList.add('menu-item'); 
        div.innerHTML = `
            <h3>${item.name}</h3>
            <p>${item.description}</p>
            <img src="${item.image}" alt="${item.name}">
            <h4>Información Nutricional</h4>
            <ul>
                <li><strong>Calorías:</strong> ${item.calories || 'Información no disponible'}</li>
                <li><strong>Proteínas:</strong> ${item.proteins || 'Información no disponible'}</li>
                <li><strong>Carbohidratos:</strong> ${item.carbohydrates || 'Información no disponible'}</li>
                <li><strong>Lípidos:</strong> ${item.lipids || 'Información no disponible'}</li>
                <li><strong>Sodio:</strong> ${item.sodium || 'Información no disponible'}</li>
                <li><strong>Fibra:</strong> ${item.fiber || 'Información no disponible'}</li>
                <li><strong>Grasas Saturadas:</strong> ${item.saturatedFats || 'Información no disponible'}</li>
                <li><strong>Grasas Trans:</strong> ${item.transFats || 'Información no disponible'}</li>
                <li><strong>Alérgenos:</strong> ${getAllergens(item.allergens)}</li>
            </ul>
        `;
        menu.appendChild(div);
    });
}

function getAllergens(allergens) {
    if (!allergens) return 'Información no disponible';
    
    const allergenList = [];
    for (const [key, value] of Object.entries(allergens)) {
        if (value) {
            allergenList.push(key);
        }
    }
    return allergenList.length > 0 ? allergenList.join(', ') : 'Ninguno';
}

// Asignación de botones
document.getElementById('burguersButton').addEventListener('click', () => {
    loadMenu('data/burguers.json');
});

document.getElementById('drinksButton').addEventListener('click', () => {
    loadMenu('data/drinks.json');
});

document.getElementById('burguers_SignatureButton').addEventListener('click', () => {
    loadMenu('data/burguers_Signature.json');
});

document.getElementById('polloButton').addEventListener('click', () => {
    loadMenu('data/pollo.json');
});

document.getElementById('papasButton').addEventListener('click', () => {
    loadMenu('data/papas.json');
});

document.getElementById('postresButton').addEventListener('click', () => {
    loadMenu('data/postres.json');
});

document.getElementById('desayunosButton').addEventListener('click', () => {
    loadMenu('data/desayunos.json');
});

document.getElementById('salsasButton').addEventListener('click', () => {
    loadMenu('data/salsas.json');
});

document.getElementById('combosButton').addEventListener('click', () => {
    loadMenu('data/combos.json');
});

document.getElementById('cajitaButton').addEventListener('click', () => {
    loadMenu('data/cajita.json');
});

document.getElementById('cajita_desayunosButton').addEventListener('click', () => {
    loadMenu('data/cajita_desayunos.json');
});