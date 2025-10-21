    import './style.css'; // Import your CSS

    function component() {
        const element = document.createElement('div');
        element.innerHTML = 'This is dynamically added by JavaScript.';
        return element;
    }

    document.getElementById('app').appendChild(component());
    console.log('Hello from JavaScript!');