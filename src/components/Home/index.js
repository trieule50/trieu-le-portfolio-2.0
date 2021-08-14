import landingPageImg from '../Home/landingpage.jpeg';
import landingpic from '../Home/landingpage-removebg.png';

const Home = () => {
    return(
        <div className='home' style={{display:'flex', justifyContent: 'space-evenly'}}>
            <div>
                <img className='home-img' src={landingpic} alt='profile'/>
            </div>
            <div>
                <div>
                    <p style={{fontFamily:'Lancelot',fontSize:'4rem', fontWeight:'bolder',
                    marginTop:'5rem'
                    }}>Trieu Le</p>
                </div>
                <div style={{float: 'right',
                marginTop:'1.5rem'
                }}>
                    <p style={{fontFamily:'Lancelot',fontSize:'3rem', fontWeight:'bolder'}}>From Builder to Coder</p>
                    <p style={{maxWidth:'30rem', fontSize:'1.15rem'}}>I'm an energetic engineer seeking a position, where I can apply and grow my skills while growing as a software developer.</p>
                    <a class="css-button" href="mailto: trieule50@gmail.com" target="_blank" style={{marginLeft:'6rem',
                    marginTop:'1rem'
                    }}>
                    <span class="css-button-icon"><svg width="16" height="16" viewBox="2 2 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16 5H4a1 1 0 00-1 1v8a1 1 0 001 1h12a1 1 0 001-1V6a1 1 0 00-1-1zM4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4z" clip-rule="evenodd"/>
                    <path fill-rule="evenodd" d="M2.071 6.243a.5.5 0 01.686-.172L10 10.417l7.243-4.346a.5.5 0 11.514.858L10 11.583 2.243 6.93a.5.5 0 01-.172-.686z" clip-rule="evenodd"/>
                    </svg></span>
                    <span class="css-button-text">Contact Me</span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Home;