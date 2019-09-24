console.log('App.js is running!');

const app = {
    title: 'Indecision App'
    , subtitle: 'ANYTHING APPEARS !'
    , options: []
};

function getSubtitle(subtitle) {
    if(subtitle) {
        return <p>{subtitle}</p>
    }
}

const onFormSubmit = (e) => {
    e.preventDefault(); // stops the full page refresh

    const option = e.target.elements.option.value;

    if(option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        renderPage();
    }
};

const clearOptions = () => {
    app.options = [];
    renderPage();
};

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
};

const appRoot = document.getElementById('app');

const numbers = [55, 101, 1000];

const renderPage = () => {
    // JSX - JavaScript XML
    // will need babel to run this one
    const template = (
        // do we reference app? YES!
        // do we reassign this? NO!
        <div>
            <h1>{app.title}</h1>
            {/* <p>{app.subtitle}</p> */}
            {/* {getSubtitle(app.subtitle)} */}
            {app.subtitle && <p>{app.subtitle}</p>}
            <h2>{app.options && app.options.length > 0 ? "Here are your options" : "No options"}</h2>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={clearOptions}>Remove All</button>
            <ol>
                {
                    app.options.map((str) =>  <li key={str}>{str}</li>)
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);
};

renderPage();