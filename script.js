let cells = document.getElementsByClassName('features-cell');

// Convert HTMLCollection to an array and iterate
Array.from(cells).forEach(element => {
    element.addEventListener('mouseover', function () {
        let cellDivs = element.getElementsByClassName('features-cell-icon'); // Get icons inside the hovered cell
        let cellDivs2 = element.getElementsByClassName('features-cell-arrow'); // Get arrows inside the hovered cell

        // Loop through all icons and apply styles
        Array.from(cellDivs).forEach(icon => {
            icon.style.fill = 'var(--primary-background-color)'; // Apply fill color
            icon.style.transition = '0.2s'; // Smooth transition
            icon2.style.fill = 'var(--primary-background-color)'; // Apply fill color
            icon2.style.transition = '0.2s'; // Smooth transition
        });
    });

    element.addEventListener('mouseout', function () {
        let cellDivs = element.getElementsByClassName('features-cell-icon'); // Get icons inside the cell
        let cellDivs2 = element.getElementsByClassName('features-cell-arrow'); // Get arrows inside the cell

        // Reset the styles for all icons
        Array.from(cellDivs).forEach(icon => {
            icon.style.fill = ''; // Reset to the original fill color
        });

        // Reset the styles for all arrows
        Array.from(cellDivs2).forEach(icon2 => {
            icon2.style.fill = ''; // Reset to the original fill color
        });
    });
});
