const Home = () => {
    return(
        <div className='home'>
            <div>
                <p>Trieu <br/><span>Le</span></p>
            </div>
            <div style={{display:'flex', flexWrap:'wrap', justifyContent: 'right'}}>
                <h2>From Builder to Coder</h2>
                <p>Energetic engineer seeking for a position, where I can use my skills to learn new things and grow as a software developer.</p>
                <a class="css-button" href="mailto: trieule50@gmail.com" target="_blank">
	            <span class="css-button-icon"><svg width="16" height="16" viewBox="2 2 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16 5H4a1 1 0 00-1 1v8a1 1 0 001 1h12a1 1 0 001-1V6a1 1 0 00-1-1zM4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4z" clip-rule="evenodd"/>
                <path fill-rule="evenodd" d="M2.071 6.243a.5.5 0 01.686-.172L10 10.417l7.243-4.346a.5.5 0 11.514.858L10 11.583 2.243 6.93a.5.5 0 01-.172-.686z" clip-rule="evenodd"/>
                </svg></span>
	            <span class="css-button-text">Contact Me</span>
                </a>
            </div>
        </div>
    )
}

export default Home;