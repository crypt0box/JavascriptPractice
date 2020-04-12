`use strict`;

{
    document.querySelector('button').addEventListener('click', () => {
        const targetNode = document.getElementById('target');

        // targetNode.textContent = 'Dotinsatall';
        targetNode.textContent = targetNode.dataset.translation;
    });
}