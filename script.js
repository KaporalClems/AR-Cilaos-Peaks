document.addEventListener("DOMContentLoaded", () => {
    const mountainLabels = document.getElementById('mountain-labels');

    // Data for mountains in Cilaos
    const mountains = [
        { name: 'Piton des Neiges', latitude: -21.099, longitude: 55.479, altitude: 3070 },
        { name: 'Grand Bénare', latitude: -21.115049140305235, longitude: 55.423090308826986, altitude: 2898 },
        // Add more mountains of Cilaos here if needed
    ];

    mountains.forEach(mountain => {
        const label = document.createElement('a-text');
        label.setAttribute('gps-projected-entity-place', `latitude: ${mountain.latitude}; longitude: ${mountain.longitude};`);
        label.setAttribute('value', `${mountain.name} (${mountain.altitude}m)`);
        label.setAttribute('position', '0 2 0');
        mountainLabels.appendChild(label);

        console.log(`Added label for ${mountain.name} at (${mountain.latitude}, ${mountain.longitude})`);
    });
});
