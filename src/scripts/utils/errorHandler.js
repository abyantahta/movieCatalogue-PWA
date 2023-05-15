const errorHandler = (message) => {
  const container = document.querySelector('#main');
  container.innerHTML = '';
  const shadowRoot = container.attachShadow({ mode: 'closed' });
  const errorItem = document.createElement('h4');
  errorItem.classList.add('shadow');
  errorItem.innerHTML = `
        <style>
            .shadow{
                font-size: 1rem;
                font-weight: 600;
                margin: 0 auto;
                color: red;
            }
        </style>`;
  errorItem.innerHTML += `Terdapat error : ${message}`;
  shadowRoot.append(errorItem);
};

export default errorHandler;
