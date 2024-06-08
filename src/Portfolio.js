 import Google from './assets/google.png';
import GitHub from './assets/github.png';
import Linked from './assets/linkdn.png'
import Typing from './Typing';
import './Portfolio.css';
import { Link } from 'react-router-dom';

function Portfolio() {
    return (
        <div className='div'>
            
            <h1 className='h1' id='h1'>Indrajeet Yadav</h1>
            <div className='header'>
                <Typing 
                    text={[
                        
                        "I'm a Developer",
                        "Software Developer",
                    ]}
                    typingspeed={100}
                    deletingspeed={50}
                    duration={1000}
                />
            </div>
            <div className='Image'>
                <a href="https://www.linkedin.com/in/siddharth-baleja-197805294/" id='insta'>
                    <img src={Linked} alt="Instagram" style={{ height: '50px', width: '50px' }} />
                </a>
                <a href="https://www.google.com" id='google'>
                    <img src={Google} alt="Google" style={{ height: '50px', width: '50px' }} />
                </a>
                <a href="https://github.com/siddharthbaleja7" id='Github'>
                    <img src={GitHub} alt="GitHub" style={{ height: '50px', width: '50px' }} />
                </a>
            </div>
        </div>
    );
}
export default Portfolio;