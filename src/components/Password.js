import React, {useState} from 'react';
import './Password.css'
export default function Password(props) {
    const [text, setText] = useState('');
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')
    const [myStyle, setMyStyle] = useState()
    const handlePassChange = ()=> {
        let format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?1234567890]+/;
        if(password!==password2){
            setText("Password do not match");
            setMyStyle({
                borderColor: "#EB5757"
            })   
        }
        
        else if(password2.length<8){
            setText("Password length is less than 8");
            setMyStyle({
                borderColor: "#EB5757"
            })
        }
       
        

        else if( format.test(password2) ){
            setText("The password should contain characters only from the alphabet");
            setMyStyle({
                borderColor: "#EB5757"
            })
        }
        else{
            setText("")
            setMyStyle({
                borderColor: "#000000"
            })
        } 
    }
    
    const handleOnChange = (event)=> {
        setPassword(event.target.value);
    }
    const handleOnChange2 = (event)=> {
        setPassword2(event.target.value);
    }


  return (
      <>
    <div>
          <h1 className='heading'>
              {props.title}
          </h1>
    </div>
    <div className='Newpass'>
        NEW PASSWORD
    </div>
    <div className='box'>
        <form className="form-inline">
        <div className="form-group">
            <label htmlFor="inputPassword6"></label>
            <input type="password" id="inputPassword6" className="form-control mx-sm-3" aria-describedby="passwordHelpInline" onChange={handleOnChange} value={password}/>
            <small className="text-muted">
            </small>
        </div>
        </form>
    </div>
    <div className='text'>
        {text}
    </div>
    <div className='Renter'>
        RE-ENTER NEW PASSWORD
    </div>
    <div className='box2'>
        <form className="form-inline">
        <div className="form-group">
            <label for="inputPassword6"></label>
            <input type="password" id="inputPassword5" className="form-control mx-sm-3" aria-describedby="passwordHelpInline" onChange={handleOnChange2} style={myStyle} value={password2}/>
            <small id="passwordHelpInline" className="text-muted">
            </small>
        </div>
        </form>
    </div>
    <div className='button'>
        <button type="button" id="btn2" className="btn" onClick={handlePassChange}>RESET PASSWORD</button>
    </div>
    
    </>
  )
}
