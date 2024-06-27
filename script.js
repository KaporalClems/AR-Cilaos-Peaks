const testCoordinates = [
    { name: 'Piton des Neiges', latitude: -21.099, longitude: 55.479, altitude: 3070 },
    { name: 'Grand Bénare', latitude: -21.115049140305235, longitude: 55.423090308826986, altitude: 2898 },
    { name: 'Col du Taïbit', latitude: -21.132, longitude: 55.460, altitude: 2080 },
    { name: 'Bonnet de Prêtre', latitude: -21.119, longitude: 55.445, altitude: 2411 }
];

testCoordinates.forEach(mountain => {
    const label = document.createElement('a-text');
    // Simulate GPS coordinates for indoor testing
    label.setAttribute('gps-entity-place', `latitude: ${mountain.latitude}; longitude: ${mountain.longitude};`);
    label.setAttribute('value', `${mountain.name} (${mountain.altitude}m)`);
    label.setAttribute('position', '0 2 0');
    mountainLabels.appendChild(label);

    console.log(`Added label for ${mountain.name} at (${mountain.latitude}, ${mountain.longitude})`);
});
