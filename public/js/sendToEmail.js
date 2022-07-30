const formulario = document.querySelector('#formulario');

    formulario.addEventListener('submit', handleSubmit);

    async function handleSubmit(event) {
        event.preventDefault();
        const formulario = new FormData(this);
        const response = await fetch(this.action, {
            method: this.method,
            body: formulario,
            headers: {
            'Accept': 'application/json'
            }
        })
        if (response.ok) {
            this.reset();
            alert('Gracias por contactarme, te responderé a la brevedad');
        }
    }