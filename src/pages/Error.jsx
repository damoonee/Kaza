import '../style/Error.css'

function Error() {
    return (
        <div className="error">
            <h1>404</h1>
            <p className='error_text'>Oups! La page que vous demandez n'existe pas.</p>
            <a href="/" className='lien_home'>Retourner sur la page d’accueil</a>
        </div>
    )
}

export default Error;