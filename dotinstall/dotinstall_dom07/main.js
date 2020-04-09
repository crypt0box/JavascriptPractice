`use strict`;

{
    document.querySelector('button').addEventListener('click', () => {
        const targetNode = document.getElementById('target');

        // targetNode.className = 'my-color';
        targetNode.className = 'my-color my-border';
    });
}